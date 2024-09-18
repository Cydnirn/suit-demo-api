import Suit from "#controllers/suit.controller";
import {NextFunction, Request, Response, Router} from "express";
import Respond from "#utils/Respond";

const SuitInstance = Suit.initiate("Player");

export default function RPSRoutes(){
    const router = Router();
    router.route("/").get((req, res, next) => {
        (async (req: Request, res: Response, next: NextFunction) => {
            try{
                return Respond.OK(res, "Welcome to Rock Paper Scissor", null);
            } catch (err) {
                next(err)
            }
        })(req, res, next)
    }).post((req, res, next) => {
        (async(req: Request, res: Response, next: NextFunction) => {
            try{
                const { RPS } = req.body;
                if (!RPS) {
                    return Respond.BAD_REQ(res, "Choice is required", null);
                }
                if(!SuitInstance.validChoice(RPS)){
                    return Respond.BAD_REQ(res, "Invalid choice", null);
                }
                const result = SuitInstance.play(RPS);
                const Body = {
                    message: `Bot declared ${result.bot}, the result is ${result.result ? "You win" : "You lose"}`
                }
                return Respond.OK(res, "Result of playing", Body);
            } catch (err) {
                next(err)
            }
        })(req, res, next)
    });
    return router;
}