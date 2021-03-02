const btn = document.querySelector("#find");
const cep = document.querySelector("#cep");
const cepResult = document.querySelector(".cep-result");
const error = document.querySelector('.error');

btn.addEventListener("click", findAddress);
cep.addEventListener("focus", cleanForm);


function findAddress() {
  
  const regexpCEP = /\d{5}[-\s]?\d{3}/g;
  const cep = document.querySelector("#cep").value;

  if (cep != "") {
    if (cep.match(regexpCEP)) {
      
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((cep) => {
          result.elements.address.value = cep.logradouro;
          result.elements.neighborhood.value = cep.bairro;
          result.elements.city.value = cep.localidade;
          result.elements.uf.value = cep.uf;

          cepResult.classList.add('active');
        });
    } else {
      error.innerText = "Dados inválidos";
    }
  } else {
    error.innerText = "É necessário digitar um valor";
  }
}


function cleanForm() {
  result.elements.address.value = "";
  result.elements.neighborhood.value = "";
  result.elements.city.value =  "";
  result.elements.uf.value = "";
  error.innerText = "";
}
