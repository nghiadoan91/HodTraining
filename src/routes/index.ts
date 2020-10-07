import { Router, Request, Response, NextFunction } from 'express';

var router: Router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome');
});

export = router;
