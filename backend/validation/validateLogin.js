// Source:
// https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#React_Redux_Node_MongoDB_JWT_Authentication

const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateLogin = (data) => {
  const errors = {};
  /* eslint-disable no-param-reassign */
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  /* eslint-enable no-param-reassign */

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

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLogin;
