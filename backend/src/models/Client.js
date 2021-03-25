const {Model, DataTypes} = require("sequelize");

class Client extends Model {
    static init(connection) {
        super.init({
            client_name: DataTypes.STRING,
            client_cpf: DataTypes.INTEGER,
            client_street: DataTypes.STRING,
            client_zipcode: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Client;