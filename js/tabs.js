'use strict';

const tabsHandlerElement = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElement = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerElement) {
  btn.addEventListener('click', () => {
    tabsHandlerElement.forEach(item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')

    tabsContentElement.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })
  })
}