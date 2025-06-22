module.exports = (sequelize, Model, DataTypes) => {
  class Address extends Model {}

  Address.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      portNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apartmentNumber: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "address",
    },
  );

  return Address;
};
