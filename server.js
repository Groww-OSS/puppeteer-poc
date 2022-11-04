import express from 'express';
import path from 'path';
import cors from 'cors';
import {fileURLToPath} from 'url';


const app = express();
app.use(cors());

const PORT_NUMBER = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, './html_files','index.html'))
})

app.get('*', function(request, response) {
  // response.sendFile(path.join(__dirname, './html_files','index.html'))
})


app.listen(PORT_NUMBER, function(){
  console.log('app listening on port:', PORT_NUMBER)
})
