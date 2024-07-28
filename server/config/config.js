import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT || 6000,
  databaseUrl: process.env.MONGOURL,
};

export const config = Object.freeze(_config);
