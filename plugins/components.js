import Vue from 'vue'

/**
 * Import components
 */
import pageHero from '~/components/pageHero'
import countdownCLock from '~/components/countdownCLock'

/**
 * Register components.
 */
Vue.component('page-hero', pageHero)
Vue.component('countdown-clock', countdownCLock)
