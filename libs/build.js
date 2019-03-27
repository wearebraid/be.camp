module.exports = {
  getRemoteImgContentType (url) {
    return fetch(url, { method: 'HEAD' })
      .then(response => response.headers.get('Content-type'))
  }
}
