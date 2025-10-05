function showBooking() {
  document.querySelector('.booking').classList.remove('hidden');
  window.scrollTo({ top: document.querySelector('.booking').offsetTop, behavior: 'smooth' });
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const truck = document.getElementById('truckType').value;
  alert(`Thank you, ${name}! Your ${truck} has been booked successfully.`);
  document.querySelector('form').reset();
}
document.querySelector('form').addEventListener('submit', submitForm);
document.getElementById('bookNowBtn').addEventListener('click', showBooking);

