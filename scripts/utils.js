const addEventListenerAll = (selector, type, fn) => {
  const targets = document.querySelectorAll(selector)

  targets.forEach(target => target.addEventListener(type, fn))
}

module.exports = {
  addEventListenerAll
}