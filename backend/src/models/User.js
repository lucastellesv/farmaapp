const {Model, DataTypes} = require("sequelize");

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.INTEGER,
            cnpj: DataTypes.INTEGER,
            password: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = User;