const db = require('better-sqlite3')(__dirname + '/countries.db');


function getLatLong(nameOrCode){
    if(nameOrCode.length === 2){
        nameOrCode = nameOrCode.toUpperCase()
        const coordinate = db.prepare(`SELECT Latitude,Longitude FROM countries
        WHERE CountryCode = ?`).get(nameOrCode)
        console.log('code',nameOrCode,coordinate)
        return coordinate;
    }
    else{
        nameOrCode = nameOrCode.charAt(0).toUpperCase() + nameOrCode.slice(1)
        const coordinate = db.prepare(`SELECT Latitude,Longitude FROM countries
        WHERE Country = ?`).get(nameOrCode)
        console.log('name',nameOrCode,coordinate)
        return coordinate;
    }
}


module.exports = getLatLong
