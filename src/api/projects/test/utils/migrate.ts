const { exec } = require("child_process");
const util = require("util");
const execAsync = util.promisify(exec);

async function runMigrations() {
  try {
    await execAsync("npx sequelize-cli db:migrate");
    await execAsync("npx sequelize-cli db:seed:all");
  } catch (error) {
    throw error;
  }
}

async function rollbackMigrations() {
  try {
    await execAsync("npx sequelize-cli db:migrate:undo:all");
  } catch (error) {
    throw error;
  }
}

export { runMigrations, rollbackMigrations };
