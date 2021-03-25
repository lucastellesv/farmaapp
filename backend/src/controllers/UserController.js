const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
    async show(request, response) {
        const users = await User.findAll();

        return response.json(users)
    },

    async create(request, response) {
        const {name, email, cpf, cnpj, password} = request.body;

        const userExist = await User.findOne({where:{cpf, email}}) 
        if(userExist) {
            return response.status(400).json({message: "User already registred!"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            password: hashedPassword,
            cpf,
            cnpj,
            email
        });

        return response.json(user);

    }
};