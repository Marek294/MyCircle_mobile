import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validate(data) {
  let errors = {};
  if(Validator.isEmpty(data.name)) errors.name = "This field is required";

  if(!("isPublic" in data)) errors.isPublic = "This field is required";

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
