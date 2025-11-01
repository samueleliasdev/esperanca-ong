function mascaraCPF(input) {
  let value = input.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  input.value = value;
}

function mascaraCEP(input) {
  let value = input.value.replace(/\D/g, '');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  input.value = value;
}

function mascaraTelefone(input) {
  let value = input.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
  input.value = value;
}

document.getElementById('cpf').addEventListener('input', function () {
  mascaraCPF(this);
});