'use strict';
require('dotenv').config();
const {createFetch} = require('../utils/fetch.util');
const {HERE_GEOCODING_API} = require('../constants')

class HereGeocodingDataSource {

	constructor() {
	}

	async getCoordinates(address){
        let headers = {};
		let addressEncoded = encodeURIComponent(address)
		const response = await createFetch(HERE_GEOCODING_API +
			'?apiKey='+process.env.HERE_API_KEY+
			'&q='+addressEncoded, headers, 'get');
		if(response.items.length>0){
			return response.items[0].position
		}else{
			return null
		}
	}
}

module.exports = HereGeocodingDataSource;
