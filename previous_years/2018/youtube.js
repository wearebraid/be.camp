function onYouTubeIframeAPIReady() {
  // set a breadcrumb
  window.ytReady = true
  // trigger an event
  window.dispatchEvent(new Event('youtubeLoaded'))
}
