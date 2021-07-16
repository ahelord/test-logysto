'use strict';
const HereGeocodingDataSource = require('../datasources/here-geocoding.datasource')
const TomTomGeocodingDataSource = require('../datasources/tomtom-geocoding.datasource')
class CoordinatesInteractor {

	constructor() {
		this.hereGeocodingDataSource = new HereGeocodingDataSource();
		this.tomTomGeocodingDataSource = new TomTomGeocodingDataSource();
	}

	async searchCoordinates(address){
		try{
			if(!address) throw new Error('insert valid address');
			let coordinates;
			coordinates = await this.hereGeocodingDataSource.getCoordinates(address);
			if(!coordinates) coordinates = await this.tomTomGeocodingDataSource.getCoordinates(address);
			return coordinates
		}catch(error){
			throw new Error(error)
		}
	}
}

module.exports = CoordinatesInteractor;
