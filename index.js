import http from 'node:http';
import fs from 'node:fs/promises';

const hostname = '127.0.0.1';
const port = 3000;

const requestListener = async function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    switch (req.url) {
        case '/':
            try {
                const aboutFile = await fs.readFile('./index.html');
                res.writeHead(200);
                res.end(aboutFile);
                break
            } catch (err) {
                console.error(err);
            }
        case '/about':
            try {
                const aboutFile = await fs.readFile('./about.html');
                res.writeHead(200);
                res.end(aboutFile);
                break
            } catch (err) {
                console.error(err);
            }
        case '/contact-me':
            try {
                const aboutFile = await fs.readFile('./contact-me.html');
                res.writeHead(200);
                res.end(aboutFile);
                break
            } catch (err) {
                console.error(err);
            }
        default:
            try {
                const aboutFile = await fs.readFile('./404.html');
                res.writeHead(200);
                res.end(aboutFile);
                break
            } catch (err) {
                console.error(err);
            }
    }
}

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});