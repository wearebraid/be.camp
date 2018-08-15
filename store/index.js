import moment from 'moment'
import {sortObjKeys} from '../libs/util'

export const state = () => ({
  butterPages: {},
  sponsors: [],
  timeToEvent: null
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
    let premierSponsors = state.sponsors.filter((sponsor) => {
      return sponsor['2018 Sponsorship Level'] && sponsor['2018 Sponsorship Level'] === 'Premier Sponsor'
    })
    let premierSponsorsObject = {}
    premierSponsors.forEach((sponsor) => {
      premierSponsorsObject[sponsor['Sponsor']] = sponsor
    })
    return sortObjKeys(premierSponsorsObject)
  },
  sponsors (state) {
    let sponsors = state.sponsors.filter((sponsor) => {
      return sponsor['2018 Sponsorship Level'] && (sponsor['2018 Sponsorship Level'] === 'Major Sponsor' || sponsor['2018 Sponsorship Level'] === 'Sponsor')
    })
    let sponsorsObject = {}
    sponsors.forEach((sponsor) => {
      sponsorsObject[sponsor['Sponsor']] = sponsor
    })
    return sortObjKeys(sponsorsObject)
  }
}

export const actions = {
  getPage ({commit, state}, page) {
    this.app.api.butter.page.retrieve('*', page)
      .then((res) => {
        if (!state.butterPages[res.data.data.slug]) {
          commit('setPage', {
            key: res.data.data.slug,
            data: res.data.data.fields
          })
        }
      }).catch((res) => {
        console.log(res)
      })
  },
  getSponsors({commit, state}) {
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
        if (err) { console.error(err); return; }
    });
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
  setSponsor(state, payload) {
    state.sponsors.push(payload)
  },
  setEventCountdown(state, duration) {
    state.timeToEvent = duration
  }
}
