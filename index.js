const fs = require('node:fs');
const express = require('express');
const appRouter = require('./routes/appRouter.js');
const aboutRouter = require('./routes/aboutRouter.js');
const contactRouter = require('./routes/contactRouter.js');


const app = express();
const PORT = 3000;

app.use('/about', aboutRouter);
app.use('/contact-me', contactRouter);
app.use('/', appRouter);
app.use('/{*splat}', appRouter);

app.listen(PORT, () => {
    console.log(`My Info app - listening on port ${PORT}!`);
});
