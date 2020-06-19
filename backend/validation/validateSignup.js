// Source:
// https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#React_Redux_Node_MongoDB_JWT_Authentication

const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateSignup = (data) => {
  const errors = {};

  /* eslint-disable no-param-reassign */
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : '';
  /* eslint-enable no-param-reassign */

  if (!validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = 'Le prénom doit avoir entre 2 et 30 caractères';
  }

  if (!validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = 'Le nom de famille doit avoir entre 2 et 30 caractères';
  }

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = 'Prenom obligatoire';
  }

  if (validator.isEmpty(data.lastname)) {
    errors.lastname = 'Nom de famille obligatoire';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email invalide';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email obligatoire';
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Le mot de passe doit avoir entre 6 et 30 caractères';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Mot de passe obligatoire';
  }

  if (!validator.isLength(data.passwordConfirm, { min: 6, max: 30 })) {
    errors.passwordConfirm = 'Le mot de passe doit avoir entre 6 et 30 caractères';
  }

  if (!validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Les 2 mots de passent doivent être identiques';
  }

  if (validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Veuillez confirmer votre mot de passe';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateSignup;
