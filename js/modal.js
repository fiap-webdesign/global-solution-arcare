// MODAL DO USUÁRIO (LOGOUT)
const btnManu = document.getElementById("btn-manu");
const modalLogout = document.getElementById("modal-manu");

if (btnManu) {
  btnManu.onclick = () => modalLogout.style.display = "block";
}

function closeModal() {
  modalLogout.style.display = "none";
}

function logout() {
  window.location.href = "login.html";
}

// MODAL DE CADASTRO SUCESSO
const form = document.querySelector("form");
const modalSuccess = document.getElementById("modal-sucesso");

if (form && modalSuccess) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede envio real
    modalSuccess.style.display = "block";
  });
}

function closeSuccessModal() {
  modalSuccess.style.display = "none";
}

// Fecha modais ao clicar fora
window.onclick = function (event) {
  if (event.target === modalLogout) closeModal();
  if (event.target === modalSuccess) closeSuccessModal();
};


