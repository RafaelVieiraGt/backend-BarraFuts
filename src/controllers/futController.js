const Fut = require('../models/futModel')

module.exports = {


    async getAllFuts(request,response){
        const futs = await Fut.find()

        return response.json(futs)
    },

    async createFut(request, response){
        const {titulo, organizador, idOrganizador, modalidade,vagas, quadra, longitude, latitude, data} = request.body;

        if(!titulo || !organizador || !idOrganizador || !modalidade || !vagas || !quadra || !longitude || !latitude || !data){
            return response.status(400).json({error: "Por favor, não deixe campos em branco"})
        }

        const futRegister = await Fut.create({
            titulo,
            organizador,
            idOrganizador,
            modalidade,
            vagas,
            quadra,
            localizacao: {
                type: 'Point',
                coordinates: [longitude, latitude], 
              }, 
            data
        })

        return response.json(futRegister)
    },

    async deleteFut(request, response){

        const { id } = request.params;

        const deleted = await Fut.findByIdAndDelete(id)

        if(deleted){
            return response.status(200).json(deleted)
        }

        return response.status(400).json({ error: "Não encontrado"})
        
    },
    async updateVagas(request, response){
        const {id} = request.params
        const {confirmado} = request.body

        const fut = await Fut.findOne({_id: id})

        if(confirmado === "confirmado"){
            fut.vagas = fut.vagas - 1
        }else{
            fut.vagas = fut.vagas + 1
        }

        await fut.save();

        return response.json(fut.vagas)
    }
}