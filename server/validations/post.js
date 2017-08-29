import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validate(data) {
  let errors = {};
  if(!("circleId" in data)) errors.circleId = "This field is required";

  if(Validator.isEmpty(data.title)) errors.title = "This field is required";

  if(Validator.isEmpty(data.content)) errors.content = "This field is required";

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
