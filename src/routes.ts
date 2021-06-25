import { Router } from 'express';
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from './controllers/CreateTagController';
import AuthenticateUserController from './controllers/AuthenticateUserController';

import ensureAdmin from './middlewares/ensureAdmin';
import CreateComplimentController from './controllers/CreateComplimentController';
import ensureAuthenticated from './middlewares/ensureAuthenticated';
import ListUserReceiveComplimentsController from './controllers/ListUserReceiveComplimentsController';
import ListUserSendComplimentsController from './controllers/ListUserSendComplimentsController';
import ListUsersController from './controllers/ListUsersController';
import ListTagController from './controllers/ListTagController';


const router = Router();

const createUserController = new CreateUserController();
router.post('/users', createUserController.handle);

const listUsersController = new ListUsersController();
router.get('/users', listUsersController.handle);

const createTagController = new CreateTagController();
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

const listTagController = new ListTagController();
router.get('/tags', ensureAuthenticated, listTagController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post('/login', authenticateUserController.handle);

const createComplimentController = new CreateComplimentController();
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle);

const listUserSendComplimentsController = new ListUserSendComplimentsController();
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle);

export default router;