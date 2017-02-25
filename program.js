let mymodule = require('./mymodule')
let bl = require('bl')

let http = require('http')

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

// fs.readdir(process.argv[2], (err, files) => {
//   if (err) throw err;
//   let filteredFiles = files.filter((file) => {
//     return file.split('.')[1] == process.argv[3];
//   });
//   console.log(filteredFiles.join('\n'));
// });


// mymodule(process.argv[2], process.argv[3], (err, data) => {
//   if (err) throw err
//   console.log(data.join('\n'))
// })
