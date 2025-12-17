
const fileSystem = require('fs/promises');
const pathmodule = require('path');
const { getContentFromFile } = require('../utils/files.utils');
const filePath = pathmodule.join(__dirname, '..', 'models', 'location.json');

function getLocations(req, res) {
    console.log('Get locations!');
    res.send("Data verstuurd naar gebruiker!");
}

async function addLocation(req, res) {
    const locations = await getContentFromFile('locations.json');
    locations.push(req.body);
    await fileSystem.writeFile(filePath, JSON.stringify(locations, null, 2), 'utf-8');
    console.log('Post a new location', req.body);
    res.status(201);
    res.send("Data is succelsvol toegevoegd!");
}

module.exports = {
    getLocations,
    addLocation
}