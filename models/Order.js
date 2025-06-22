module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      products: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};
