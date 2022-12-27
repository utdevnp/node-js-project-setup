import express from 'express';

import authorRoute from "./api/v1/author/index.js";

const API_VERSION = process.env.API_VERSION || 1;
const router = express.Router();
router.use(`/api/v${API_VERSION}/author`, authorRoute);

export default router;


