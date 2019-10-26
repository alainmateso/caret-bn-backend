import Joi from '@hapi/joi';
import models from '../database/models';
import responseError from '../utils/responseError';
import strings from '../utils/stringsUtil';

const validation = (req, res, schema, next) => {
  const { error } = schema.validate(req.body, req.params, { abortEarly: false });
  if (error) {
    const errorMessages = [];
    error.details.forEach(detail => {
      errorMessages.push(detail.message.split('"').join(''));
    });
    return responseError(res, 400, strings.users.error.INVALID_INPUT, errorMessages);
  }
  return next();
};

export default class InputValidation {
  static validateProfile(req, res, next) {
    const schema = Joi.object({
      username: Joi.string().trim().min(10).max(100),
      phone: Joi.string().trim().regex(/^[0-9]{3,10}$/),
      gender: Joi.string().valid('female', 'male'),
      language: Joi.string().min(2).max(15).regex(/^[a-zA-Z]/),
      dob: Joi.date(),
      country: Joi.string(),
      company: Joi.string(),
      department: Joi.string(),
    });
    validation(req, res, schema, next);
  }

  static validateAddNew(req, res, next) {
    const schema = Joi.object({
      name: Joi.string().trim().min(10).max(100)
        .message('Name should be at least 10 character and not more than 100 characters!')
        .required(),
      description: Joi.string().min(10).max(250).required(),
      locationId: Joi.number().integer().min(1).max(20)
        .required(),
      availableSpace: Joi.number().integer().min(1).max(99990)
        .required(),
      cost: Joi.number().integer().min(1).max(99999)
        .required(),
      currency: Joi.string().regex(/^(rwf|RWF|ksh|KSH|ugx|UGX|usd|USD)/).message('Currency should only be RWF, KSH, UGX or USD!')
        .required(),
      highlights: Joi.string().min(10).max(250).required(),
      amenities: Joi.string().min(10).max(250).required()
    });
    validation(req, res, schema, next);
  }

  static validateImage(req, res, next) {
    if (!req.files.image) {
      return responseError(res, 400, strings.images.NO_IMAGE);
    }
    return next();
  }

  static validateLogin(req, res, next) {
    const schema = Joi.object({
      email: Joi.required(),
      password: Joi.required()
    });
    validation(req, res, schema, next);
  }

  static validateRole(req, res, next) {
    const schema = Joi.object({
      Role: Joi.string().required().valid('Super Administrator', 'Travel Administrator', 'Travel Team Member', 'supplier', 'Manager', 'Requester'),
    });
    validation(req, res, schema, next);
  }

  static async validateExistence(req, res, next) {
    let { name } = req.body;
    name = name.toLowerCase();
    const foundAccommodation = await models.accommodations.findOne({ where: { name } });
    if (foundAccommodation) {
      return responseError(res, 409, strings.accommodation.error.EXISTING);
    }
    return next();
  }

  static validateSignup(req, res, next) {
    const schema = Joi.object({
      username: Joi.string().trim().regex(/^[a-zA-Z0-9]{3,20}$/).message('username field should be at least 3 alphanumeric characters long.')
        .required(),
      email: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.').required(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/).message('password field should contain at least 8 characters, at least 1 lowercase, 1 uppercase and 1 number and a special character.').required(),
      confirmPassword: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/).message('confirmPassword field should contain at least 8 characters, at least 1 lowercase, 1 uppercase and 1 number and a special character.').required(),
    });
    validation(req, res, schema, next);
  }

  static validateAccommodationEdit(req, res, next) {
    const schema = Joi.object({
      name: Joi.string().trim().min(10).max(100)
        .message('name should be at least 10 character and not more than 100 characters!'),
      description: Joi.string().min(10).max(250)
        .message('description should be at least 10 character and not more than 250 characters!'),
      locationId: Joi.number().integer().min(1).max(20)
        .message('location should be a number between 1 and 20!'),
      availableSpace: Joi.number().integer().min(1).max(99999)
        .message('availableSpace should be a number between 1 and 99999!'),
      cost: Joi.number().integer().min(1).max(99999)
        .message('cost should be a number between 1 and 99999!'),
      highlights: Joi.string().min(10).max(250)
        .message('highlights should be at least 10 character and not more than 250 characters!'),
      amenities: Joi.string().min(10).max(250)
        .message('amenities should be at least 10 character and not more than 250 characters!'),
    });
    validation(req, res, schema, next);
  }
}