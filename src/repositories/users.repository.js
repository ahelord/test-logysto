'use strict';
let {mockUsers} = require('../mocks')
class UsersRepository {

	constructor() {
        this.mockUsers = mockUsers
    }

	async findByEmail(email) {
        console.log(this.mockUsers)
		return this.mockUsers.find(user=>user.email==email);
	}

    async create(email,password,refreshToken) {
        console.log(this.mockUsers)
		return this.mockUsers.push({email,password,refreshToken})
	}
    async updateRefreshToken(email,refreshToken) {
        console.log(this.mockUsers)
        let index  = this.mockUsers.findIndex((user => user.email == email));
        this.mockUsers[index].refreshToken = refreshToken;
	}


}

module.exports = UsersRepository;
