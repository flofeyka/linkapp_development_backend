import {Router} from "express";
import {body} from "express-validator";
import {validationMiddleware} from "../middlewares/validationMiddleware.js";
import appController from "../controllers/appController.js";

export const appRouter = Router();

const validate = [
    body('name').notEmpty().isString(),
    body('connectWay').notEmpty().isString(),
    body('connectType').notEmpty().isString(),
    body('message').notEmpty().isString(),
];

appRouter.post('/', ...validate, validationMiddleware, appController.handleSendMessage)