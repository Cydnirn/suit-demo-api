import { NextFunction, Request, Response, Router } from "express";

import Respond from "#utils/Respond";
import RPSRoutes from "#routes/rps.routes";

export default function rootRoutes() {
    const router = Router();
    router.get("/", (_: Request, res: Response, _next: NextFunction) => {
        try {
            console.log("Hello");
            return Respond.OK(res, "Test", null);
        } catch (err) {
            console.log(err);
        }
    });
    router.use("/suit", RPSRoutes())
    
    return router;
}
