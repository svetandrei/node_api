module.exports = (sequelize, type) => {
    return sequelize.define("user", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        age: {
            type: type.INTEGER,
            allowNull: false
        }
    });
};