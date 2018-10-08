function post(url) {
  fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}