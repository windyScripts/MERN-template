import { Router } from "express";

import { controllerOne } from "../controllers/sample";

const router = Router();
router.get('/',controllerOne);

export default router;