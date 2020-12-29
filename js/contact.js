document.querySelector('#contact').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('phone').value,
        message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || message === '' ) {
      
     showAlert('Please Fill All Fields in Form', 'error')

    } else {
      showAlert('Info Submitted !!', 'success')
      // clear field
      clearField();
    }

    e.preventDefault();
})


function showAlert (message, className) {
  // create div element for alert
  const div = document.createElement('div')
  div.className = `alert ${className}`
  div.innerHTML = `<p>${message}</p>`

  // get parent elements
  const contact = document.getElementById('contact')
  const content = document.querySelector('.contact-content')

  // insert div
  contact.insertBefore(div, content)
  // set timeout for 3secs
  setTimeout(function() {
    document.querySelector('.alert').remove()
   }, 3000)
   
}

// CLEAR FIELD
function clearField() {
   document.getElementById('name').value = '';
   document.getElementById('email').value = '';
   document.getElementById('phone').value = '';
   document.getElementById('message').value = '';

}