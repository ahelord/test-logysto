const httpStatus = require('http-status');
const AuthInteractor = require('../interactors/auth.interactor');

class AuthController{
	constructor(){
	}
	async signUp (req, res, next) {
		try {
			const {email,password} = req.body;
			const interactor = new AuthInteractor();
			const respond = await interactor.signUp(email,password);
			res.json(respond);
		} catch (error) {
			console.error(error);
			res.status(httpStatus.BAD_REQUEST).json({message:error.message});
		}
	};
	async login (req, res, next) {
		try {
			const {email,password} = req.body;
			const interactor = new AuthInteractor();
			const respond = await interactor.login(email,password);
			res.json(respond);
		} catch (error) {
			console.error(error);
			res.status(httpStatus.BAD_REQUEST).json({message:error.message});
		
		}
	};
	async refreshToken (req, res, next) {
		try {
			const {refreshToken} = req.body;
			const interactor = new AuthInteractor();
			const respond = await interactor.refreshToken(refreshToken);
			res.json(respond);
		} catch (error) {
			console.error(error);
			res.status(httpStatus.BAD_REQUEST).json({message:error.message});
		
		}
	};
}
module.exports = new AuthController();