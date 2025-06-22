module.exports = (sequelize, Model, DataTypes) => {
  class OrderStatus extends Model {}

  OrderStatus.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "CONFIRMED",
      },
    },
    {
      sequelize,
      modelName: "orderStatus",
    },
  );

  return OrderStatus;
};
