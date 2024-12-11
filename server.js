const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Map the URL path to the actual file path
    const filePath = req.url === "/" ? "./index.html" : `.${req.url}`;
    const extname = path.extname(filePath);
    let contentType = "text/html";

    // Determine the content type based on the file extension
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            contentType = "image/jpeg";
            break;
        case ".gif":
            contentType = "image/gif";
            break;
        default:
            contentType = "text/html";
    }

    // Serve the requested file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Not Found</h1>", "utf-8");
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`, "utf-8");
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
