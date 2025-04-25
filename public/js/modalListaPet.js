const listPetCard = document.querySelectorAll(".pet-card");
const addAppointmentButton = document.querySelector(".add-appointment");
const modalListaPet = document.querySelector('.modal-dashboard')
const modalCloseButton = document.querySelector(".close");

modalCloseButton.addEventListener('click', () => {
  console.log('click')
  modalListaPet.style.display = 'none';
})


