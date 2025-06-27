import { Router } from 'express';
import { createProject } from '../controllers/ProjectController';

const router = Router();

router.post('/', createProject);

export default router;
