const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;export const email = str => {  const result = REGEX.test(str);  return {    result,    message: result ? null : {      en: 'The email is not valid',      es: 'El email no es válido',    },  };};