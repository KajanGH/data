const csvToJson = require('convert-csv-to-json');
 
const input = './prepared_ctry.csv'; 
const output = './public/gundata.json';
 
csvToJson.fieldDelimiter(',')
         .formatValueByType()
         .generateJsonFileFromCsv(input, output);