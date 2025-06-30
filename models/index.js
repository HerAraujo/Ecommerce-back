const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: require("pg"),
  logging: false
});

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
