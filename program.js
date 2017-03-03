let mymodule = require('./mymodule')
let bl = require('bl')
let fs = require('fs')

let http = require('http')

// let map = require('through2-map')
let url = require('url')

let server = http.createServer((req, res) => {
  if (req.method=='GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let parsedUrl = url.parse(req.url,true);
    var date = new Date(parsedUrl.query['iso']);
    if (parsedUrl.pathname == "/api/parsetime") {
      date = '{"hour":'+ date.getHours() +',"minute":'+ date.getMinutes() +',"second":'+ date.getSeconds() +'}';
    } else if (parsedUrl.pathname == "/api/unixtime") {
      console.log(date.toISOString())
       date = '{"unixtime":'+ Date.parse(date.toISOString()) +'}';
    }
    res.end(date)
  }
})

server.listen(process.argv[2])






// ex12
// let server = http.createServer((req, res) => {
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
//
// server.listen(process.argv[2])

// ex11
// let server = http.createServer((req, res) => {
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(process.argv[2])

// ex10
// let net = require('net');
// let server = net.createServer((socket) => {
//   let date = new Date()
//   socket.write(dateToString(date))
//   socket.end()
// })
// server.listen(process.argv[2])
//
// function dateToString(date) {
//   let string = ""
//   string += date.getFullYear().toString() + '-'
//           + pad((date.getMonth()+1),2).toString() + '-'
//           + date.getDate().toString() + ' '
//           + date.getHours().toString() + ':'
//           + date.getMinutes().toString() + '\n'
//   return string
// }
//
// function pad(n, width, z) {
//   z = z || '0';
//   n = n + '';
//   return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
// }

// ex9
// let urls = process.argv.slice(2,5);
//
// let count = urls.length,
//     results = {};
//
// urls.forEach((url, index) => {
//   httpGet(url, index)
// });
//
// function httpGet(url, index) {
//   http.get(url, (response) => {
//     response.pipe(bl((err, data) => {
//       if (err) return console.error(err);
//
//       results[index] = data.toString()
//
//       count--;
//
//       if (count <= 0) {
//         printResults()
//       }
//     }));
//   });
// }
// //
// // function printResults() {
// //   for(var i=0; i<3; i++) {
// //     console.log(results[i])
// //   }
// // }

// for(var i=0; i<urls.length; i++) {
//   http.get(urls[i], (response) => {
//     response.pipe(bl((err, data) => {
//       if (err) return console.error(err);
//       console.log(data.toString())
//       results[i] = (data.toString())
//       count --
//       console.log(results)
//     }))
//   });
// }



// for(var i=2; i<5; i++) {
//   let count = 3,
//       results = {};
//   http.get(process.argv[i], (response) => {
//     response.pipe(bl((err, data) => {
//       if (err) return console.error(err);
//       console.log(data.toString())
//     }))
//   })
// }


// http.get(process.argv[2], (response) => {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

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
