import { getRoute, postRoute, updateRoute, deleteRoute } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get('/', getRoute);
router.post('/', postRoute);
router.patch('/updateDetails/:id', updateRoute);
router.delete('/deleteDetails/:id', deleteRoute)
export default router;