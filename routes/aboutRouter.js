const { Router } = require('express');
const path = require('path');

const aboutRouter = Router();

aboutRouter.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '/about.html')));

module.exports = aboutRouter;