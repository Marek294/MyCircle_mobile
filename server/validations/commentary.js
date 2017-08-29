import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validate(data) {
  let errors = {};

  if(!("postId" in data)) errors.postId = "This field is required";

  if(!("content" in data) || Validator.isEmpty(data.content)) errors.content = "This field is required";

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
