const bcryptjs = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    async validatePassword(passwordToCompare) {
      return await bcryptjs.compare(passwordToCompare, this.password);
    }

    notReturnPassword() {
      const user = this.toObject();
      delete user.password;
      return user;
    }
  }

  User.init(
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
      phone: {
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
      modelName: "user",
    },
  );

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcryptjs.hash(user.password, Number(process.env.HASH_ROUNDS));
    user.password = hashedPassword;
  });

  User.beforeUpdate(async (user, options) => {
    const hashedPassword = await bcryptjs.hash(user.password, Number(process.env.HASH_ROUNDS));
    user.password = hashedPassword;
  });

  User.beforeBulkCreate(async (users, options) => {
    for (const user of users) {
      const hashedPassword = await bcryptjs.hash(user.password, Number(process.env.HASH_ROUNDS));
      user.password = hashedPassword;
    }
  });

  return User;
};
