const validateSignUpForm = function(values, callback) {
  var errors = {};
  var hasErrors = false;

  if (!values.nome || values.nome.trim() === '') {
    errors.name = 'Digite um nome';
    hasErrors = true;
  }
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Digite um username';
    hasErrors = true;
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Digite um email';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Digite uma senha';
    hasErrors = true;
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Confirme a sua senha';
    hasErrors = true;
  }

  if (
    values.confirmPassword &&
    values.confirmPassword.trim() !== '' &&
    values.password &&
    values.password.trim() !== '' &&
    values.password !== values.confirmPassword
  ) {
    errors.password = 'Senha e Confirmar senha não são iguais';
    hasErrors = true;
  }

  if (callback) {
    callback(hasErrors && errors);
  } else {
    return hasErrors && errors;
  }
};

module.exports = {
  validateSignUpForm
};
