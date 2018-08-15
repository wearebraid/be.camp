import Vue from 'vue'

/**
 * Import components
 */
import pageHero from '~/components/pageHero'
import countdownCLock from '~/components/countdownCLock'
import mediaBlock from '~/components/mediaBlock'
import iconGrid from '~/components/iconGrid'

/**
 * Register components.
 */
Vue.component('page-hero', pageHero)
Vue.component('countdown-clock', countdownCLock)
Vue.component('media-block', mediaBlock)
Vue.component('icon-grid', iconGrid)
