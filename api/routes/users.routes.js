import express from 'express';
import { register, login, logout, getIdFromToken, getUserId} from '../controllers/users.controllers.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/getIdFromToken/:token', getIdFromToken);
router.get('/getUserId', getUserId);

export default router;
