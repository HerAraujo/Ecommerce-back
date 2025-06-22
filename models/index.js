const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    dialectModule: require("pg"), //enable when cloud
    logging: false,
    port: process.env.DB_PORT,
  },
);

const Category = require("./Category")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const User = require("./User")(sequelize, Model, DataTypes);
const Address = require("./Address")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const OrderStatus = require("./OrderStatus")(sequelize, Model, DataTypes);
const Image = require("./Image")(sequelize, Model, DataTypes);
const Admin = require("./Admin")(sequelize, Model, DataTypes);

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

module.exports = {
  sequelize,
  Category,
  Product,
  Address,
  Order,
  OrderStatus,
  Image,
  Admin,
  User,
};
