const db = require('better-sqlite3')(__dirname + '/countries.db');


function getLatLong(nameOrCode){
    if(nameOrCode.length === 2){
        nameOrCode = nameOrCode.uppercase()
        const coordinate = db.prepare(`SELECT Latitude,Longitude FROM countries
        WHERE CountryCode = ?`).get(nameOrCode)
        console.log('code',coordinate)
        return;
    }
    else{
        const coordinate = db.prepare(`SELECT Latitude,Longitude FROM countries
        WHERE Country = ?`).get(nameOrCode)
        console.log('name',coordinate)
        return;
    }
}

getLatLong('chad')
