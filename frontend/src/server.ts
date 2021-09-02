import express, { Application, Request, Response } from "express";
import next from "next";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import { buildUrl } from "@contentpi/utils";

// Middleware
import { isConnected } from "./shared/lib/middlewares/user";

// Config
import config from "./config";

// Setting up Next App
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Running Next App
nextApp.prepare().then(() => {
  const app: Application = express();

  // Public static assets
  app.use(express.static(path.join(__dirname, "../public")));

  // Middlewares
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: config.security.secretKey,
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser(config.security.secretKey));
  app.use(cors({ credentials: true, origin: true }));

  // Routes
  app.get("/login", (req: Request, res: Response) => {
    return nextApp.render(req, res, "/users/login");
  });

  app.get(`/logout`, (req: Request, res: Response) => {
    const redirect: any = req.query.redirectTo || "/";
    res.clearCookie("at");
    res.redirect(redirect);
  });

  app.use(
    "/dashboard/:appId?/:stage",
    isConnected(
      true,
      ["god", "admin", "editor"],
      `/${config.languages.default}/login?redirectTo=/dashboard`
    ),
    (req: any, res: any) => {
      return nextApp.render(req, res, "/dashboard", req.query);
    }
  );

  app.all("*", (req: any, res: any) => {
    return handle(req, res);
  });

  // Listening port
  app.listen(config.server.port);
});
