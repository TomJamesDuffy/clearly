module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Cargo", [
      {
        id: "4c1e7713-8dc7-4985-b1c8-7a7edc4e434b",
        description: "Wooden logs",
        weight: 10000,
        payload: "wood",
        createdDate: new Date("2023-02-01T00:00:00Z"),
        updatedDate: new Date("2023-02-01T00:00:00Z"),
      },
      {
        id: "83753a77-5ac5-4550-951f-4ae06fac33f6",
        description: "Crude oil",
        weight: 20000,
        payload: "oil",
        createdDate: new Date("2023-02-02T00:00:00Z"),
        updatedDate: new Date("2023-02-02T00:00:00Z"),
      },
      {
        id: "6b8a7e4d-209e-434a-9db2-8edd05bd7a54",
        description: "Concrete mix",
        weight: 15000,
        payload: "concrete",
        createdDate: new Date("2023-02-03T00:00:00Z"),
        updatedDate: new Date("2023-02-03T00:00:00Z"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cargo", null, {});
  },
};
