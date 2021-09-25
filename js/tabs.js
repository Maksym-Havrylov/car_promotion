'use strict';

const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElements = document.querySelectorAll('[data-tabs-field]')

// design-list__item_active
for (let btn of tabsHandlerElements) {
  btn.addEventListener('click', () => {
    tabsHandlerElements.forEach(item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')

    tabsContentElements.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        
      }
    })
  })
}