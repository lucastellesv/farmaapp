const Client = require('../models/Client')

module.exports = {
    async show(request, response) {
        const clients = await Client.findAll();

        return response.json(clients)
    },

    async create(request, response) {
        const {client_name, client_cpf, client_street, client_zipcode} = request.body;

        const clientExist = await Client.findOne({where:{client_cpf, client_name}}) 
        if(clientExist) {
            return response.status(400).json({message: "Client already registred!"});
        }

        const client = await Client.create({
            client_name, 
            client_cpf, 
            client_street, 
            client_zipcode
        });

        return response.json(client);

    }
};