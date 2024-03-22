module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TripCargo", {
      tripId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Trip",
          key: "id",
        },
        primaryKey: true,
      },
      cargoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Cargo",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("TripCargo");
  },
};
