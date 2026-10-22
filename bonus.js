const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const firstName = "Yadeni";
const recipeName = "Yogurt Parfait";

const ingredients = [
    { name: "Yogurt", amount: 1, unit: "cup" },
    { name: "Granola", amount: 0.5, unit: "cup" },
    { name: "Blueberries", amount: 0.5, unit: "cup" },
    { name: "Honey", amount: 1, unit: "tbsp" }
];

const used = [false, false, false, false];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const allUsed = used.every(status => status === true);

    if (allUsed) {
        res.end(`
            <html>
                <head><title>${firstName} lists an ingredient</title></head>
                <body>
                    <h1>${recipeName} - Ingredient Collection</h1>
                    <p>nothing left</p>
                </body>
            </html>
        `);
        return;
    }

    let startIndex = Math.floor(Math.random() * ingredients.length);
    let foundIndex = -1;
    let currentIndex = startIndex;

    for (let i = 0; i < ingredients.length; i++) {
        if (!used[currentIndex]) {
            foundIndex = currentIndex;
            used[currentIndex] = true; // Mark as used
            break;
        }
        currentIndex = (currentIndex + 1) % ingredients.length;
    }

    if (foundIndex !== -1) {
        const item = ingredients[foundIndex];
        res.end(`
            <html>
                <head><title>${firstName} lists an ingredient</title></head>
                <body>
                    <h1>${recipeName} - Ingredient Collection</h1>
                    <p><strong>Index:</strong> ${foundIndex}</p>
                    <p><strong>Ingredient:</strong> ${item.amount} ${item.unit} of ${item.name}</p>
                </body>
            </html>
        `);
    } else {
        res.end(`
            <html>
                <head><title>${firstName} lists an ingredient</title></head>
                <body>
                    <h1>${recipeName} - Ingredient Collection</h1>
                    <p>nothing left</p>
                </body>
            </html>
        `);
    }
});

server.listen(port, hostname, () => {
    console.log(`Bonus server running at http://${hostname}:${port}/`);
});