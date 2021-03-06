import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class UsersRoutes extends CommonRoutesConfig{
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        // We'll add the actual route configuration here
        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of users')
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Post to users')
            });
        
        this.app.route('/users/:userId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // This middleware function runs before any request to /users/:userId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`)
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.userId}`)
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`patch requested for id ${req.params.userId}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`delete requested for id ${req.params.userId}`)
            })
            
        return this.app;
    }
}