import {validationResult} from "express-validator";

export const validationMiddleware = async (req, res, next) => {
    try {
        const result = validationResult(req);

        if(!result.isEmpty()) {
            return res.status(400).json(result.array())
        }

        return next();
    } catch(e) {
        res.status(500).send('Internal server error');
    }
};