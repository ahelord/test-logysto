const httpStatus = require('http-status');
const CoordinatesInteractor = require('../interactors/coordinates.interactor');

class CoordinatesController{
	constructor(){
	}
	async searchCoordinates (req, res, next) {
		try {
			const {address} = req.body;
			const interactor = new CoordinatesInteractor();
			let respond = await interactor.searchCoordinates(address);
			if(!respond) respond = {message:'Coordinates not found'}
			res.json(respond);
		} catch (error) {
			console.error(error);
			res.status(httpStatus.BAD_REQUEST).json({message:error.message});
		}
	};
}
module.exports = new CoordinatesController();