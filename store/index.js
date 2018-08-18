import moment from 'moment'
import md5 from 'blueimp-md5'
import {sortObjKeys} from '../libs/util'

export const state = () => ({
  butterPages: {},
  sponsors: [],
  attendees: [],
  currentPageAccentColor: 'orange',
  timeToEvent: null,
  youtubeAPIReady: false
})

export const getters = {
  eventTimeObject (state) {
    let duration = state.timeToEvent
    if (duration) {
      return {
        months: duration.months() >= 10 ? duration.months() : '0' + duration.months(),
        days: duration.days() >= 10 ? duration.days() : '0' + duration.days(),
        hours: duration.hours() >= 10 ? duration.hours() : '0' + duration.hours(),
        minutes: duration.minutes() >= 10 ? duration.minutes() : '0' + duration.minutes(),
        seconds: duration.seconds() >= 10 ? duration.seconds() : '0' + duration.seconds()
      }
    }
  },
  premierSponsors (state) {
    let premierSponsorsObject = {}
    let premierSponsors = state.sponsors.filter((sponsor) => sponsor['2018 Sponsorship Level'] && sponsor['2018 Sponsorship Level'] === 'Premier Sponsor')
    premierSponsors.forEach((sponsor) => premierSponsorsObject[sponsor['Sponsor']] = sponsor)
    return sortObjKeys(premierSponsorsObject)
  },
  sponsors (state) {
    let sponsorsObject = {}
    let sponsors = state.sponsors.filter((sponsor) => sponsor['2018 Sponsorship Level'] && (sponsor['2018 Sponsorship Level'] === 'Major Sponsor' || sponsor['2018 Sponsorship Level'] === 'Sponsor'))
    sponsors.forEach((sponsor) => sponsorsObject[sponsor['Sponsor']] = sponsor)
    return sortObjKeys(sponsorsObject)
  },
  supporters (state) {
    let supportersObject = {}
    let supporters = state.sponsors.filter((sponsor) => sponsor['2018 Sponsorship Level'] && sponsor['2018 Sponsorship Level'] === 'Contributor')
    supporters.forEach((sponsor) => supportersObject[sponsor['Sponsor']] = sponsor)
    return sortObjKeys(supportersObject)
  },
  directoryAttendees (state) {
    let attendeesObject = {}
    let attendees = state.attendees.filter((attendee) => attendee['Directory Permission'] && attendee['Directory Permission'] === true)
    attendees.forEach((attendee) => {
      attendeesObject[attendee['Guest Name']] = attendee
      attendeesObject[attendee['Guest Name']].key = md5(attendee['Email'].trim().toLowerCase())
    })
    return sortObjKeys(attendeesObject)
  }
}

export const actions = {
  async nuxtServerInit ({dispatch}) {
    await dispatch('loadData')
  },
  loadData ({dispatch}) {
    return Promise.all([
      dispatch('getSponsors'),
      dispatch('getAttendees')
    ])
  },
  async getPage ({commit, state}, page) {
    let res = await this.app.api.butter.page.retrieve('*', page)
    if (!state.butterPages[res.data.data.slug]) {
      commit('setPage', {
        key: res.data.data.slug,
        data: res.data.data.fields
      })
    }
  },
  getSponsors({commit}) {
    return new Promise((resolve, reject) => {
      let base = this.app.api.airtable
      base('Past & Potential Sponsors').select({
        maxRecords: 99,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          if (record.fields['Commitment confirmed'] && record.fields['Commitment confirmed'] === true) {
            commit('setSponsor', record.fields)
          }
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
        maxRecords: 999,
        view: "Grid view"
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
  setEventTime({commit, dispatch}, time) {
    let currentTime = moment().unix()
    let ts = moment(time, 'YYYY-M-D H:mm').unix()
    let diffTime = ts - currentTime
    let duration = moment.duration(diffTime * 1000, 'milliseconds')

    commit('setEventCountdown', duration)
    setInterval(() => {
      dispatch('updateEventCountdown', 1000)
    }, 1000);
  },
  updateEventCountdown ({commit, dispatch, state}, interval) {
    let duration = moment.duration(state.timeToEvent.asMilliseconds() - interval, 'milliseconds');
    commit('setEventCountdown', duration)
  }
}

export const mutations = {
  setPage(state, {key, data}) {
    state.butterPages = Object.assign({}, state.butterPages, {[key]: data})
  },
  setCurrentPageAccentColor(state, payload) {
    state.currentPageAccentColor = payload
  },
  setSponsor(state, payload) {
    state.sponsors.push(payload)
  },
  setAttendee(state, payload) {
    state.attendees.push(payload)
  },
  setEventCountdown(state, duration) {
    state.timeToEvent = duration
  },
  youtubeLoaded(state, payload) {
    state.youtubeAPIReady = payload
  }
}
