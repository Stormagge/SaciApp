import express from 'express';
import authRoutes from './auth';
import userRoutes from './user';
import dietRoutes from './diet';
import foodRoutes from './food';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/diet', dietRoutes);
router.use('/foods', foodRoutes);

export default router;
