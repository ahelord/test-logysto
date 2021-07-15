'use strict';
const UsersRepository = require('../repositories/users.repository');
const {generateJwt,decodeJwt} = require('../utils/jwt.util')
const {isEmailValid} = require('../utils/validate.util');
class AuthController {

	constructor() {
		this.usersRepository = new UsersRepository();
	}

	async signUp (email,password){
		try{
			if(!email || !isEmailValid(email)) throw new Error('insert valid email');
			if(!password) throw new Error('insert valid password');
			let user = await this.usersRepository.findByEmail(email);
			if(user){
				throw new Error('user already exist.')
			}else{
				const token = generateJwt(email);
				const refreshToken = generateJwt(email);
				user = await this.usersRepository.create(email,password,refreshToken);
				console.log(this.usersRepository.mockUsers)
				return {token,refreshToken};
			}
		}catch(error){
			throw new Error(error)
		}
	}
	async login (email,password){
		try{
			if(!email || !isEmailValid(email)) throw new Error('insert valid email');
			if(!password) throw new Error('insert valid password');
			let user = await this.usersRepository.findByEmail(email);
			if(user){
				const token = generateJwt(email);
				const refreshToken = generateJwt(email);
				console.log(this.usersRepository.mockUsers)
				return {token,refreshToken};
			}else{
			 throw new Error('user does not exist')
			}
		}catch(error){
			throw new Error(error)
		}
	}

	async refreshToken(refreshToken){
		try{
			if(!refreshToken) throw new Error('insert valid refreshToken');

			let decodedToken = await decodeJwt(refreshToken);
			let user  = await this.usersRepository.findByEmail(decodedToken.id)
		
			if(user.refreshToken == refreshToken){
				const token = generateJwt(user.email);
				const refreshToken = generateJwt(user.email);
				user = await this.usersRepository.updateRefreshToken(user.email,refreshToken);
				console.log(this.usersRepository.mockUsers)
				return {token,refreshToken};
			}else{
				throw new Error('insert valid refreshToken');
			}
		}catch(error){
			throw new Error(error)
		}
	}
}

module.exports = AuthController;
