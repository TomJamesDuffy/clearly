import { Sequelize, Dialect } from "sequelize";
import config from "./src/db/config.json";
// In a live envionment, values would be stored in environment variables

type DBConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  port: number;
};

const environment = process.env.NODE_ENV || "development";
const envConfig = config[environment as keyof typeof config] as DBConfig;

const connectionUri = `postgresql://${envConfig.username}:${envConfig.password}@${envConfig.host}:${envConfig.port}/${envConfig.database}`;

const sequelize = new Sequelize(connectionUri, {
  dialect: "postgres",
  logging: false,
});

export default sequelize;
