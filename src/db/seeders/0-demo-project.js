module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Project", [
      {
        id: "37d4c105-243c-4ca4-a15f-6c98d5849dbb",
        url: "http://example.com/project1",
        status: "IN_PROGRESS",
        country: "Country A",
        createdDate: new Date("2023-02-01T00:00:00Z"),
        updatedDate: new Date("2023-02-01T00:00:00Z"),
      },
      {
        id: "95d039fd-bd45-4e2a-a299-07f16821477a",
        url: "http://example.com/project2",
        status: "COMPLETE",
        country: "Country B",
        createdDate: new Date("2023-02-02T00:00:00Z"),
        updatedDate: new Date("2023-02-02T00:00:00Z"),
      },
      {
        id: "c4a9b773-9192-444a-863c-3c62e6c5f0aa",
        url: "http://example.com/project3",
        status: "PENDING",
        country: "Country C",
        createdDate: new Date("2023-02-03T00:00:00Z"),
        updatedDate: new Date("2023-02-03T00:00:00Z"),
      },
      {
        id: "56784e61-78bc-4e6f-b8e3-92809b2d3671",
        url: "http://example.com/project3",
        status: "PENDING",
        country: null,
        createdDate: new Date("2023-02-03T00:00:00Z"),
        updatedDate: new Date("2023-02-03T00:00:00Z"),
      },
      {
        id: "ab608323-9812-49f7-ba75-c9a35a415517",
        url: "http://example.com/project3",
        status: "PENDING",
        country: "Country C",
        createdDate: new Date("2023-02-03T00:00:00Z"),
        updatedDate: new Date("2023-02-03T00:00:00Z"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Project", null, {});
  },
};
