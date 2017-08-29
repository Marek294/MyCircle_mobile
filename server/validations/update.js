import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validate(data) {
  let errors = {};

  if(data.email) if(!Validator.isEmail(data.email)) errors.email = "Email is invalid";

  if(data.password || data.confirmPassword) if(!Validator.equals(data.password,data.confirmPassword)) errors.confirmPassword = "Password must match";

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
