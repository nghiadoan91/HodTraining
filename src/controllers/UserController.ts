import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User'
const user1 = new User(1, undefined, undefined, 20, undefined)
const user2 = new User(2, 'Tom', 'Thai', 20, undefined)
const user3 = new User(2, 'Marry', 'America', 20, undefined)
export = {
    readAll: (req: Request, res: Response, next: NextFunction) => {
        const users: Array<User> = [user1, user2, user3];
        var ageUser1NextYear = user1.nextYearAge();
        res.status(200).send({ users });
    },
    read: (req: Request, res: Response, next: NextFunction) => {
        const user = user1;
        res.status(200).send({ user1 });
    },
    create: (req: Request, res: Response, next: NextFunction) => {
        console.log("added");
        const user = new User(4, 'John', 'English', 20, 60);
        res.status(200).send({ user })
    },
    update: (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        console.log(`user ${id} was updated`);
        const user = new User(4, 'John', 'English', 20, 60);
        res.status(200).send({ user });
    },
    delete: (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        console.log(`user ${id} was deleted`);
        res.status(200).send("success");
    }
}