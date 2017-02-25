let fs = require('fs');
let path = require('path');

module.exports = (dirName, extension, callback) => {
  fs.readdir(dirName, (err,files) => {
    if (err) return callback(err);
    let filteredFiles = files.filter((file) => {
      return path.extname(file) === '.' + extension
    });
    callback(null, filteredFiles)
  })
}
