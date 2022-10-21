// const isEmpty = require("./isEmpty");
// const validator = require("validator");

// module.exports = function ValidateDemande(data) {
//   let errors = {};
//   data.typeAnalyse = !isEmpty(data.typeAnalyse) ? datatypeAnalyse : "";
//   data.DateCreation = !isEmpty(data.DateCreation ) ? data.DateCreation  : "";
//   data.nomPatient = !isEmpty(data.nomPatient ) ? data.nomPatient  : "";
//   data.prenomPatient = !isEmpty(data.prenomPatient) ? data.prenomPatient : "";
 
//   if (validator.isEmpty(data.typeAnalyse)) {
//     errorstypeAnalyse = "Required type d'analyse";
//   }
//   if (validator.isEmpty(data.DateCreation )) {
//     errors.DateCreation  = "Required DateCreation ";
//   }
//   if (validator.isEmpty(data.nomPatient )) {
//     errors.nomPatient  = "Required nomPatient ";
//   }
//   if (validator.isEmpty(data.prenomPatient)) {
//     errors.prenomPatient = "Required prenom de patient";
//   }

//   return {
//       errors,
//       isValid: isEmpty(errors)
//   }
// };