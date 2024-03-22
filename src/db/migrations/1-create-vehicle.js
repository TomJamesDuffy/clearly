module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Vehicle", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      type: {
        type: Sequelize.ENUM(
          "light_commercial",
          "heavy_truck",
          "semi_trailer_truck",
          "flatbed_truck"
        ),
        allowNull: false,
      },
      licensePlate: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      capacity: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("Vehicle");
  },
};
