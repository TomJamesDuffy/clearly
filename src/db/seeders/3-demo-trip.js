module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Trip", [
      {
        id: "8788df64-5f04-4966-abc6-e21603c33f98",
        projectId: "37d4c105-243c-4ca4-a15f-6c98d5849dbb",
        vehicleId: "8348fc24-e9f3-406a-bd4e-29e397d18706",
        distanceKm: 200,
        createdDate: new Date("2023-02-01T00:00:00Z"),
        updatedDate: new Date("2023-02-01T00:00:00Z"),
      },
      {
        id: "9ebdbb62-504d-43ad-9ed8-161385aa06b9",
        projectId: "95d039fd-bd45-4e2a-a299-07f16821477a",
        vehicleId: "8348fc24-e9f3-406a-bd4e-29e397d18706",
        distanceKm: 150,
        createdDate: new Date("2023-02-02T00:00:00Z"),
        updatedDate: new Date("2023-02-02T00:00:00Z"),
      },
      {
        id: "8c464388-1a4a-4e27-a6ff-c75676113172",
        projectId: "c4a9b773-9192-444a-863c-3c62e6c5f0aa",
        vehicleId: "814a2a14-7640-4012-b3bb-6821aa0e624b",
        distanceKm: 300,
        createdDate: new Date("2023-02-03T00:00:00Z"),
        updatedDate: new Date("2023-02-03T00:00:00Z"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Trip", null, {});
  },
};
