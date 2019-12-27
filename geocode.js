const request = require('request')

const geoCode = (place, callback) => {
    geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(place)+'.json?access_token=pk.eyJ1IjoiZGhhcm1pbDEyIiwiYSI6ImNrNGxrNGVpNTE3czkzb3FzMzVxdWR1MzUifQ.T8t0fGFGnaPu4RkFAM8WSg&limit=1'
    request({url: geoCodeUrl, json: true},(error,response1) => {
    if (error) {
        callback('Unable to Connect Server!',undefined)
    } else if (response1.body.features[0]  === undefined) {
        callback('Unable to find the location. Try another search.',undefined)
    } else {
        callback(undefined,{
        longitude : response1.body.features[0].center[1],
        latitude : response1.body.features[0].center[0],
        location : response1.body.features[0].place_name
        })
        
    }
})
}

module.exports = geoCode