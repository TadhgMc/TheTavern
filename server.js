import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
const app = express();
const PORT = process.env.PORT || 3001;