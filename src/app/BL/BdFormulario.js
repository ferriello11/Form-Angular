const mongoose = require('mongoose');

const BdFormulario =  mongoose.Schema({ 
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    estadoCivil: {
        type: String,
        require: false
    },
    endereco: {
        type: String,
        require: false
    }
},
{
    timestamps: true
});


mongoose.model('BdFormulario',BdFormulario);