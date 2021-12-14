const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const { request } = require('http');
const { response } = require('express');
require("./BdFormulario");
const Form = mongoose.model('BdFormulario');

app.use(express.json());

// CONEXÃO COM MEU BANCO DE DADOS MONGO
mongoose.connect('mongodb://localhost/formulario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
    }).then(() => {
    }).catch((erro) => {
      console.log('NÃO CONECTADO!' + erro)
});

app.get("/", (req, res) => {
  Form.find({}).then((form) => {    
    return res.json(form);      
  }).catch((error) =>{
    return res.status(400).json({
      error: true,
      message: "Nada a declarar"

    })  
  })
});


app.post("/newForm",(req,res) => {
  console.log('chegou no post');
    const CForm = Form.create(req.body, (err)=>{
      if(err) return res.status(400).json({
        error: true,
        message: "NÃO FUNFOU"
      })
      return res.status(200).json({
        error: false,
        message: req.body
      })
    })
  });

  app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});