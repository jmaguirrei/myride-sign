const MIN_LENGTH = 5;export const name = str => {  const result = str.trim().length >= MIN_LENGTH;  return {    result,    message: result ? null : {      en: `Name must have at least ${MIN_LENGTH} characters`,      es: `El nombre debe tener al menos ${MIN_LENGTH} caracteres`,    },  };};