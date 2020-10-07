import { Router } from 'express';
import userController from '../controllers/UserController'

const router = Router();
/** @swagger
 * /users:
 *  get:
 *    tags:
 *      - User
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', userController.readAll);

/**
 * @swagger
 * /users/{userId}:
 *    get:
 *      tags:
 *          - User
 *      description: Use to request one user by id
 *      parameters:
 *        - name: userId
 *          in: path
 *          schema:
 *            type: string
 *      responses:
 *        '200':
 *          description: A successful response
 */
router.get('/:id', userController.read);

/**
 * @swagger
 * /users:
 *    post:
 *      tags:
 *          - User
 *      description: Use to create user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              nationality:
 *                type: string
 *              age:
 *                type: number
 *              weight:
 *                type: number
 *      responses:
 *        200:
 *          description: A successful response
 */
router.post('/', userController.create);

/**
 * @swagger
 * /users/{userId}:
 *    put:
 *      tags:
 *          - User
 *      description: Use to update user by id
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: userId
 *          in: path
 *          schema:
 *            type: string
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              nationality:
 *                type: string
 *              age:
 *                type: number
 *              weight:
 *                type: number
 *      responses:
 *        200:
 *          description: A successful response
 */
router.put('/:id', userController.update);

/** @swagger
 * /users/{userId}:
 *  delete:
 *    tags:
 *        - User
 *    description: Use to delete an user by id
 *    parameters:
 *        - name: userId
 *          in: path
 *          schema:
 *            type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', userController.delete);

export = router;