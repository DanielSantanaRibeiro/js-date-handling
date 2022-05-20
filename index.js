const { toBRFormatDate } = require("./date-utils");

const date = new Date();
console.log("Date without BR format: ", date);

const formated_date = toBRFormatDate(date);

console.log("Date with BR format: ", formated_date);
