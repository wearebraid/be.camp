import moment from 'moment'
import md5 from 'blueimp-md5'
import {sortObjKeys} from '../libs/util'

export const state = () => ({
  butterPages: {},
  sponsors: [],
  attendees: [],
  schedule: [],
  currentPageAccentColor: 'orange',
  timeToEvent: null,
  eventCountdownStarted: false,
  youtubeAPIReady: false,
  viewMode: ''
})

export const getters = {
  eventTimeObject (state) {
    let duration = state.timeToEvent
    if (duration) {
      return {
        months: duration.months() >= 10 ? duration.months() : '0' + (duration.months() >= 0 ? duration.months() : '0'),
        days: duration.days() >= 10 ? duration.days() : '0' + (duration.days() >= 0 ? duration.days() : '0'),
        hours: duration.hours() >= 10 ? duration.hours() : '0' + (duration.hours() >= 0 ? duration.hours() : '0'),
        minutes: duration.minutes() >= 10 ? duration.minutes() : '0' + (duration.minutes() >= 0 ? duration.minutes() : '0'),
        seconds: duration.seconds() >= 10 ? duration.seconds() : '0' + (duration.seconds() >= 0 ? duration.seconds() : '0')
      }
    }
  },
  premierSponsors (state) {
    let premierSponsorsObject = {}
    let premierSponsors = state.sponsors.filter((sponsor) => sponsor.level && sponsor.level === 'Premier Sponsor')
    premierSponsors.forEach((sponsor) => premierSponsorsObject[sponsor.sponsor] = sponsor)
    return sortObjKeys(premierSponsorsObject)
  },
  sponsors (state) {
    let sponsorsObject = {}
    let sponsors = state.sponsors.filter((sponsor) => sponsor.level && (sponsor.level === 'Major Sponsor' || sponsor.level === 'Sponsor'))
    sponsors.forEach((sponsor) => sponsorsObject[sponsor.sponsor] = sponsor)
    return sortObjKeys(sponsorsObject)
  },
  supporters (state) {
    let supportersObject = {}
    let supporters = state.sponsors.filter((sponsor) => sponsor.level && sponsor.level === 'Contributor')
    supporters.forEach((sponsor) => supportersObject[sponsor.sponsor] = sponsor)
    return sortObjKeys(supportersObject)
  },
  directoryAttendees (state) {
    let attendeesObject = {}
    let attendees = state.attendees.filter((attendee) => attendee.directory_permission && attendee.directory_permission === true)
    attendees.forEach((attendee) => attendeesObject[attendee.name] = attendee)
    return sortObjKeys(attendeesObject)
  },
  attendeeCount (state) {
    return state.attendees.length
  },
  scheduleByTime (state) {
    let scheduleObject = {}
    state.schedule.forEach((scheduleItem) => {
      if (!scheduleObject[scheduleItem['Time']]) {
        scheduleObject[scheduleItem['Time']] = []
      }
      scheduleObject[scheduleItem['Time']].push(scheduleItem)
    })
    return scheduleObject
  }
}

export const actions = {
  async nuxtServerInit ({dispatch}, {query}) {
    await dispatch('loadData')
  },
  async loadData ({dispatch}) {
    return Promise.all([
      dispatch('getSponsors'),
      dispatch('getAttendees'),
      dispatch('getSchedule'),
      dispatch('getPage', 'homepage'),
      dispatch('getPage', 'faqs'),
      dispatch('getPage', 'schedule'),
      dispatch('getPage', 'history'),
      dispatch('getPage', 'attendees'),
      dispatch('getPage', 'sponsors')
    ])
  },
  getPage ({commit, state}, page) {
    return new Promise((resolve, reject) => {
      this.app.api.butter.page.retrieve('*', page).then((res) => {
        if (!state.butterPages[res.data.data.slug]) {
          commit('setPage', {
            key: res.data.data.slug,
            data: res.data.data.fields
          })
        }
        resolve()
      }).catch((res) => {
        console.log(res)
        reject()
      })
    })
  },
  getSponsors({commit}) {

    return new Promise((resolve, reject) => {
      let base = this.app.api.airtable
      base('Sponsors').select({
        fields: [
          'Sponsor',
          'Logo',
          'Url',
          'Write up',
          'Level'
        ],
        maxRecords: 99,
        view: "[be.camp] Sponsors Feed"
      }).eachPage(function page(records, fetchNextPage) {

        records.forEach(function(record) {
          commit('setSponsor', record.fields)
        });
        fetchNextPage();
      }, function done(err) {
        if (err) {
          console.error(err)
          reject()
          return
        }
        resolve()
      });
    })
  },
  getAttendees({commit}) {
    return new Promise((resolve, reject) => {
      let base = this.app.api.airtable
      base('Guests').select({
        fields: [
          'Guest Name',
          'Directory Permission',
          'Email'
        ],
        maxRecords: 999,
        view: "[be.camp] Attendees Feed"
      }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          commit('setAttendee', record.fields)
        });
        fetchNextPage();
      }, function done(err) {
        if (err) {
          console.error(err)
          reject()
          return
        }
        resolve()
      })
    })
  },
  getSchedule({commit}) {
    return new Promise((resolve, reject) => {
      let base = this.app.api.airtable
      base('Saturday Schedule').select({
        maxRecords: 999,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          commit('setScheduleItem', record.fields)
        });
        fetchNextPage();
      }, function done(err) {
        if (err) {
          console.error(err)
          reject()
          return
        }
        resolve()
      })
    })
  },
  setEventTime({state, commit, dispatch}, time) {
    if (!state.eventCountdownStarted) {
      let currentTime = moment().unix()
      let ts = moment(time, 'YYYY-M-D H:mm').unix()
      let diffTime = ts - currentTime
      let duration = moment.duration(diffTime * 1000, 'milliseconds')

      commit('setEventCountdown', duration)

      setInterval(() => {
        dispatch('updateEventCountdown', 1000)
        commit('setEventCountdownFlag', true)
      }, 1000);
    }
  },
  updateEventCountdown ({commit, dispatch, state}, interval) {
    let duration = moment.duration(state.timeToEvent.asMilliseconds() - interval, 'milliseconds');
    commit('setEventCountdown', duration)
  }
}

export const mutations = {
  setViewMode(state, mode) {
    state.viewMode = mode
  },
  setPage(state, {key, data}) {
    state.butterPages = Object.assign({}, state.butterPages ? state.butterPages : {}, {[key]: data})
  },
  setCurrentPageAccentColor(state, payload) {
    state.currentPageAccentColor = payload
  },
  setSponsor(state, payload) {
    state.sponsors.push({
      sponsor: payload['Sponsor'],
      logo: payload['Logo'],
      url: payload['Url'],
      write_up: payload['Write up'],
      level: payload['Level']
    })
  },
  setAttendee(state, payload) {
    state.attendees.push({
      name: payload['Guest Name'],
      directory_permission: payload['Directory Permission'],
      key: (payload['Directory Permission'] && payload['Email']) ? md5(payload['Email'].trim().toLowerCase()) : ''
    })
  },
  setScheduleItem(state, payload) {
    state.schedule.push(payload)
  },
  setEventCountdown(state, duration) {
    state.timeToEvent = duration
  },
  setEventCountdownFlag(state, payload) {
    state.eventCountdownStarted = payload
  },
  youtubeLoaded(state, payload) {
    state.youtubeAPIReady = payload
  }
}
