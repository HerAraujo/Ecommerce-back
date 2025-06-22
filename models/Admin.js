const bcryptjs = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {
    async validatePassword(passwordToCompare) {
      return await bcryptjs.compare(passwordToCompare, this.password);
    }
  }

  Admin.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "admin",
    },
  );

  Admin.beforeCreate(async (admin, options) => {
    const hashedPassword = await bcryptjs.hash(admin.password, Number(process.env.HASH_ROUNDS));
    admin.password = hashedPassword;
  });

  Admin.beforeBulkCreate(async (admins, options) => {
    for (const admin of admins) {
      const hashedPassword = await bcryptjs.hash(admin.password, Number(process.env.HASH_ROUNDS));
      admin.password = hashedPassword;
    }
  });
  return Admin;
};
