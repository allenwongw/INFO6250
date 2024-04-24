export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
};

export const CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession',
  REQUIRED_MESSAGES: 'requiredMessage'
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
  [SERVER.AUTH_INSUFFICIENT]: 'dog is bad, welcome to use cat',
  [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
  default: 'Something went wrong.  Please try again',
};