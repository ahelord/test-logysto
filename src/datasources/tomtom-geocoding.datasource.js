'use strict';
require('dotenv').config();
const {createFetch} = require('../utils/fetch.util');
const {TOMTOM_GEOCODING_API} = require('../constants')

class TomtomGeocodingDatasource {

	constructor() {
	}

	async getCoordinates(address){
        let headers = {};
		let addressEncoded = encodeURIComponent(address)
		const response = await createFetch(TOMTOM_GEOCODING_API +
			'/'+addressEncoded+'.JSON'+
			'?key='+process.env.TOMTOM_API_KEY, headers, 'get');
		if(response.results.length>0){
			return response.results[0].position
		}else{
			return null
		}
	}
}

module.exports = TomtomGeocodingDatasource;
