const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  let data = {}
  
  for (let { name, value } of form.elements) {
    if (name) {
      data[name] = value
    }
  }

  fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
    if (response.status === 200 || response.status === 201) {
      return response.json()
    } else {
      throw new Error(response.status)
    }
  }).then(data => {
    console.log(data);
  }).catch(error => {
    alert('Fatal Error!!! ' + error.message);
  })
})