module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Trip", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      projectId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project",
          key: "id",
        },
      },
      vehicleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Vehicle",
          key: "id",
        },
      },
      distanceKm: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Trip");
  },
};
