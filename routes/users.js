import express from 'express';
import {getUsers, createUser, getUserbyID, deleteUserbyID, updateUserbyID} from '../controllers/users.js'

const router = express.Router();

let users = []

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUserbyID);

router.delete('/:id',deleteUserbyID);
// Patch Request vs put - put changes the entire object - path = partial update
router.patch('/:id',updateUserbyID);

export default router;