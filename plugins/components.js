import Vue from 'vue'

/**
 * Import components
 */
import siteHeader from '~/components/siteHeader'
import siteFooter from '~/components/siteFooter'
import pageHero from '~/components/pageHero'
import countdownClock from '~/components/countdownClock'
import mediaBlock from '~/components/mediaBlock'
import easterEgg from '~/components/easterEgg'
import iconGrid from '~/components/iconGrid'
import becampSponsors from '~/components/becampSponsors'
import sponsorCards from '~/components/sponsorCards'
import logoGrid from '~/components/logoGrid'
import htmlLightbox from '~/components/htmlLightbox'
import attendeesGrid from '~/components/attendeesGrid'
import offCanvasNav from '~/components/offCanvasNav'
import hamburgerMenu from '~/components/hamburgerMenu'
import becampSchedule from '~/components/becampSchedule'
import sitePrompt from '~/components/sitePrompt'
import newsletterSignup from '~/components/newsletterSignup'

/**
 * Register components.
 */
Vue.component('site-header', siteHeader)
Vue.component('site-footer', siteFooter)
Vue.component('page-hero', pageHero)
Vue.component('countdown-clock', countdownClock)
Vue.component('media-block', mediaBlock)
Vue.component('easter-egg', easterEgg)
Vue.component('icon-grid', iconGrid)
Vue.component('becamp-sponsors', becampSponsors)
Vue.component('sponsor-cards', sponsorCards)
Vue.component('logo-grid', logoGrid)
Vue.component('html-lightbox', htmlLightbox)
Vue.component('attendees-grid', attendeesGrid)
Vue.component('off-canvas-nav', offCanvasNav)
Vue.component('hamburger-menu', hamburgerMenu)
Vue.component('becamp-schedule', becampSchedule)
Vue.component('site-prompt', sitePrompt)
Vue.component('newsletter-signup', newsletterSignup)
