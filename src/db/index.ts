import sequelize from "../../sequelize.config";

export const setupDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
