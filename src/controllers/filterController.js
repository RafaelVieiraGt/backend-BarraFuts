const Fut = require('../models/futModel')

module.exports = {

    async filter(request, response){
        
        const idOrganizador = request.query.idOrganizador;

        

        const myFut = await Fut.find({ idOrganizador })

        if(myFut){
            return response.status(200).json(myFut)
        }
        
        return response.status(400).json({ erro: "Você não possui nenhum futebol marcado!"})

    }

}