const { Router } = require('express');
const path = require('path');

const contactRouter = Router();

contactRouter.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '/contact-me.html')));

module.exports = contactRouter;