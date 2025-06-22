const db = require("../models");

module.exports = async () => {
  //create tables:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  // execute seeders:
  await require("./categorySeeder")();
  console.log("[Database] ¡Los datos de prueba de Categories fueron insertados!");

  await require("./imageSeeder")();
  console.log("[Database] ¡Los datos de prueba de Images fueron insertados!");

  await require("./productSeeder")();
  console.log("[Database] ¡Los datos de prueba de Products fueron insertados!");

  await require("./userSeeder")();
  console.log("[Database] ¡Los datos de prueba de Users fueron insertados!");

  await require("./adminSeeder")();
  console.log("[Database] ¡Los datos de prueba de Admins fueron insertados!");

  await require("./orderStatusSeeder")();
  console.log("[Database] ¡Los datos de prueba de Orderstatuses fueron insertados!");

  await require("./addressSeeder")();
  console.log("[Database] ¡Los datos de prueba de Addresses fueron insertados!");

  await require("./orderSeeder")();
  console.log("[Database] ¡Los datos de prueba de Orders fueron insertados!");
};
