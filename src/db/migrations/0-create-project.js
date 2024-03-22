module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Project", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("IN_PROGRESS", "COMPLETE", "PENDING", "CANCELLED"),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("Project");
  },
};
