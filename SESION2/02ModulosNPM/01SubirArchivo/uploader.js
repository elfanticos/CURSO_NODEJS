'use strict'

var http       = require('http'),
    util       = require('util'),
    formidable = require('formidable'),
    fse        = require('fs-extra');

function serverUpload(req,res) {
    if(req.method.toLowerCase() == 'get' && req.url == '/') {
        res.writeHead(200,{'content-Type' : 'text/html'});
        res.end(`
            <h1>Uploader de Archivos</h1>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></div>
                <div><input type="submit" value="Subir archivo"></div>
            </form>
        `);
    }
    if(req.method.toLowerCase() == 'post' && req.url == '/upload') {
        let form = new formidable.IncomingForm();
        form
            .parse(req, function(err,fileds,files) {
                res.writeHead(200,{'Content-Type' : 'text/html'});
                res.write(`
                <h1>Archivos Recibidos</h1>
                    <a href="/">Regresar</a>
                    <br>
                    <code>${util.inspect({files : files})}</code>`);
                res.end();
            })
            .on('progress', function(bytesReceived, bytesExcepted) {
                let percentCompleted = (bytesReceived / bytesExcepted) * 100;
                console.log(percentCompleted.toFixed(2));
            })
            .on('error', function(err) {
                console.log(err);
            })
            .on('end', function(fields, files) {
                //Ubicación temporal del archivo que se sube
                let tempPath = this.openedFiles[0].path,
                //El nombre del archivo subido
                    fileName = this.openedFiles[0].name,
                //Nueva ubicación
                    newLocation = './upload/'+fileName;
                fse.copy(tempPath,newLocation, function(err) {
                    return (err) ? console.log(err) : console.log('El archivo se subió con exito');
                });
            });
        return;
    }
}

const port     = 3000;
const hostname = '127.0.0.1';
const server   = http.createServer(serverUpload);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
