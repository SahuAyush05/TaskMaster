import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./config/InversifyConfig";
import { initializeDatabase } from "./config/DatabaseConfig";
import cors from "cors";
import express from "express";
import { AppConfig } from "./config/AppConfig";
import { logger } from "./config/LoggerConfig";
import { AuthUtil } from "./util/AuthUtil";

const port = process.env.PORT || 3000;
const rootContext: string = "taskmaster";

const server= new InversifyExpressServer(container, null, { rootPath: `/${rootContext}` })

server.setConfig((app) => {
    logger.info("Setting up server config.");
    logger.info(`CORS Origins: ${AppConfig.getCorsOrigins()}`);
    const allowedOrigins = AppConfig.getCorsOrigins().filter((origin) => origin !== undefined);
    app.use(cors({
        origin: allowedOrigins,
        credentials: false
    }));
    app.use(express.json({ limit: "50mb" }));
    logger.info("Setting up authentication config.");
    app.use(AuthUtil);
});

const app =server.build();

const startServer = async() => {
    await initializeDatabase();
    app.listen(port, () => {
      logger.info(`Server is running on http://localhost:${port}/${rootContext}`);
    });
}

startServer().catch(console.error);