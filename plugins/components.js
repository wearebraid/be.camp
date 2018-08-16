import Vue from 'vue'

/**
 * Import components
 */
import siteHeader from '~/components/siteHeader'
import siteFooter from '~/components/siteFooter'
import pageHero from '~/components/pageHero'
import countdownCLock from '~/components/countdownCLock'
import mediaBlock from '~/components/mediaBlock'
import easterEgg from '~/components/easterEgg'
import iconGrid from '~/components/iconGrid'
import becampSponsors from '~/components/becampSponsors'
import sponsorCards from '~/components/sponsorCards'
import logoGrid from '~/components/logoGrid'

/**
 * Register components.
 */
Vue.component('site-header', siteHeader)
Vue.component('site-footer', siteFooter)
Vue.component('page-hero', pageHero)
Vue.component('countdown-clock', countdownCLock)
Vue.component('media-block', mediaBlock)
Vue.component('easter-egg', easterEgg)
Vue.component('icon-grid', iconGrid)
Vue.component('becamp-sponsors', becampSponsors)
Vue.component('sponsor-cards', sponsorCards)
Vue.component('logo-grid', logoGrid)
