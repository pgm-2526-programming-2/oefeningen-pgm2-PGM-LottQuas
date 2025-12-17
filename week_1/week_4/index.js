const express = require('express');
const myServer = express();


const PORT = 3000;
const HOST = 'localhost';

myServer.get('/api', (request, response) => {
    console.log('Verzoek op de server!', request.body);
    response.status(200);
    // response.send('Antwoord van de server');
    response.json({
        name: "Adriaan"
    })
});

myServer.listen(PORT, HOST, () => {
    console.log(`Server staat aan op http://${HOST}:${PORT} !`); // ${} om deze te gebruiken moet je backticks gebruiken (`` ipv '')
}) // Server afsluiten door ctrl + c 

console.log('server bestand'); 
