const fs= require('fs');
async function readFileExample(){
    try{
        const data= await fs.readFile('myfile.txt','utf8');
        console.log('file Content:',data);
    }catch(err){
        console.error('Error reading file:',err);
    }
}
readFileExample();

const {promisify}= require('util');
const readFileAsync= promisify(require('fs').readFile);
async function readFilePromisify(){
    try{
        const data= await readFileAsync('myfile.txt','utf8');
        console.log(data);
    }catch(err){
        console.error('Error reading file:',err);
    }
}
readFilePromisify();