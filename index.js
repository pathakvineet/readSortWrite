//import dependencies
const fs = require('fs');

// define departments object
let dept = {
    Engineering: 0,
    Testing: 0
}


// try catch block to read file
try {
    // read contents of the file
    const data = fs.readFileSync('./input.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // loop over all lines
    lines.forEach((line) => {
        // removes , from line and convert to array
        line = line.split(', ');
        // if else block to check if employee is eng or tester
        // and insert the salary to object key
        // after iterations final object has the last values of dept.
        if (line[2] == 'Engineering') {
            dept.Engineering = line[3]
        } else {
            dept.Testing = line[3]
        }
    });
    // iterate over object
    Object.keys(dept).forEach(function (key) {
        // create line for appending in file
        let value = key + ':' + dept[key];
        // apend date ot  output file
        fs.appendFile('./output.txt', value + "\n", (err) => {
            if (err) return err;
        })
    });
    console.log('file updated and saved!');
} catch (err) {
    console.error(err);
}