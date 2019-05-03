import express from 'express';
import path from 'path';
import fs from 'fs';
import cron = require('node-cron');
import env from 'dotenv';
env.config();

import app from './config/dbconfig';
const PORT = 3300;

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
