const mongoose = require('mongoose')

const futScheema = new mongoose.Schema({
    titulo: String,
    organizador: String,
    idOrganizador: String,
    modalidade: String,
    vagas: Number,
    quadra: String,
    localizacao: {
        type: {
          type: String,
          enum: ['Point'],
          required: true,
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
      data: String
})

futScheema.index({ localizacao: '2dsphere' });

module.exports = mongoose.model('Fut', futScheema)