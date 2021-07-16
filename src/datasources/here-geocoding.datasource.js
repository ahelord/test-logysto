'use strict';
const {createFetch} = require('../utils/fetch.util');
const {HERE_GEOCODING_API} = require('../constants')
class HereGeocoding {

	constructor() {
	}

	async getCoordinates(address){
        
        const response = await createFetch(HERE_GEOCODING_API + '?q=5+Rue+Daunou%2C+75000+Paris%2C+France', {}, 'get');

	}
}

module.exports = HereGeocoding;
