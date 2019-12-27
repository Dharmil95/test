const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geoCode('ghatlodia',(error,data) => {
    if (error) {
        return console.log(error)
    }
    console.log(data.longitude,data.latitude)
    forecast(data.latitude,data.longitude,(error,data) => {
        if (error) {
            return console.log(error)
        }        console.log(data)
    })
})