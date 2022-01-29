const path = require('path');
const fs = require('fs');

let files = fs.readdirSync(path.resolve(process.cwd()));

let zipfile_files = [];

let allowedExtensions = [
    'ini',
    'png',
    'jpg',
    'md',
    'wav',
    'mp3'
]

for (let i = 0; i < files.length; i++) {
    for (let x = 0; x < allowedExtensions.length; x++) {
        if (files[i].toLowerCase().endsWith(allowedExtensions[x])) {
            zipfile_files.push(path.join(process.cwd(), files[i]));
        }
    }
}

let zipfile_directory = path.join(process.cwd(), 'dist')
let zipfile_filename = path.join(zipfile_directory, 'skin.osk');

if (fs.existsSync(zipfile_filename)) {
    fs.unlinkSync(zipfile_filename);
}
if (!fs.existsSync(zipfile_directory)) {
    fs.mkdirSync(zipfile_directory);
}

var archiver = require('archiver');
var archive = archiver('zip');
var zipfile_output = fs.createWriteStream(zipfile_filename);

zipfile_output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    console.log('written to ' + zipfile_filename);
});
archive.on('error', function(err){
    throw err;
});
archive.pipe(zipfile_output);

for (let i = 0; i < zipfile_files.length; i++) {
    archive.file(zipfile_files[i], {name: path.basename(zipfile_files[i])});
}
archive.finalize();