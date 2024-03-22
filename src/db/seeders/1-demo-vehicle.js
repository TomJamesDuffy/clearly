module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Vehicle", [
      {
        id: "8348fc24-e9f3-406a-bd4e-29e397d18706",
        type: "semi_trailer_truck",
        licensePlate: "ABC123",
        capacity: 20000,
        createdDate: new Date("2023-01-01T00:00:00Z"),
        updatedDate: new Date("2023-01-01T00:00:00Z"),
      },
      {
        id: "814a2a14-7640-4012-b3bb-6821aa0e624b",
        type: "flatbed_truck",
        licensePlate: "DEF456",
        capacity: 15000,
        createdDate: new Date("2023-01-02T00:00:00Z"),
        updatedDate: new Date("2023-01-02T00:00:00Z"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Vehicle", null, {});
  },
};
