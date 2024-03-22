module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("TripCargo", [
      {
        tripId: "8788df64-5f04-4966-abc6-e21603c33f98",
        cargoId: "4c1e7713-8dc7-4985-b1c8-7a7edc4e434b",
        quantity: 1,
        status: "loaded",
        createdDate: new Date("2023-02-01T00:00:00Z"),
        updatedDate: new Date("2023-02-01T00:00:00Z"),
      },
      {
        tripId: "9ebdbb62-504d-43ad-9ed8-161385aa06b9",
        cargoId: "83753a77-5ac5-4550-951f-4ae06fac33f6",
        quantity: 1,
        status: "delivered",
        createdDate: new Date("2023-02-02T00:00:00Z"),
        updatedDate: new Date("2023-02-02T00:00:00Z"),
      },
      {
        tripId: "8c464388-1a4a-4e27-a6ff-c75676113172",
        cargoId: "6b8a7e4d-209e-434a-9db2-8edd05bd7a54",
        quantity: 1,
        status: "in-transit",
        createdDate: new Date("2023-02-03T00:00:00Z"),
        updatedDate: new Date("2023-02-03T00:00:00Z"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TripCargo", null, {});
  },
};
