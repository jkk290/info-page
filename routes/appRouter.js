const { Router } = require('express');
const path = require('path');

const appRouter = Router();

appRouter.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '/index.html')));
appRouter.get('/*splat', (req, res) => res.sendFile(path.join(__dirname, '..', '/404.html')));

module.exports = appRouter;