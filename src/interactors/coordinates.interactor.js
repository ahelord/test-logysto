'use strict';
class CoordinatesInteractor {

	constructor() {
	}

	async searchCoordinates(address){
		try{
			if(!address) throw new Error('insert valid address');
		}catch(error){
			throw new Error(error)
		}
	}
}

module.exports = CoordinatesInteractor;
