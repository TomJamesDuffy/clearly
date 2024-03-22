module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cargo", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      payload: {
        type: Sequelize.ENUM("wood", "oil", "concrete"),
        allowNull: false,
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cargo");
  },
};
