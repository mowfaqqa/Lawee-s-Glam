document.querySelector('#bookings').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value,
        phone = document.getElementById('phone').value,
        location = document.getElementById('location').value,
        casual = document.getElementById('casual'),
        bridal = document.getElementById('bridal'),
        birthday = document.getElementById('birthday'),
        headscarf = document.getElementById('headscarf'),
        consultation = document.getElementById('consultation');

    if (name === '' || phone === '' || location === '') {
     showAlert('Please Fill All Fields in Form', 'error')
    } else if (casual.checked === false && birthday.checked=== false && bridal.checked === false && headscarf.checked === false && consultation.checked === false) {
     showAlert('TICK AT LEAST ONE BOX IN THE SERVICE SECTION', 'error') 
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
  const bookings = document.getElementById('bookings')
  const container = document.querySelector('.booking-form');

  // insert div
  bookings.insertBefore(div, container)
  // set timeout for 3secs
  setTimeout(function() {
    document.querySelector('.alert').remove()
   }, 3000)
   
}

// CLEAR FIELD
function clearField() {
   document.getElementById('name').value = '';
   document.getElementById('phone').value = '';
   document.getElementById('location').value = '';
   document.getElementById('casual').checked = false;
   document.getElementById('bridal').checked = false;
   document.getElementById('birthday').checked= false;
   document.getElementById('headscarf').checked = false;
   document.getElementById('consultation').checked = false;

}