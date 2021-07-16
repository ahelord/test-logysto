# test-logysto
- Correr con docker 
``` sh docker-run.sh ```
- Persistencia se maneja en memoria, cada vez que se reinicie se borra todo.
- Endpoint signUp

http://localhost:8080/api/auth/sign-up

{"email":"ahelord@gmail.com",
	"password":"asdsd"
}

- Endpoint login

http://localhost:8080/api/auth/login

{"email":"ahelord@gmail.com",
	"password":"asdsd"
}

- Endpoint refresh token

http://localhost:8080/api/auth/refresh-token

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhaGVsb3JkQGdtYWlsLmNvbSIsImlkIjoiYWhlbG9yZEBnbWFpbC5jb20iLCJpYXQiOjE2MjYzMjI1MTYsImV4cCI6MTYyNjMyMzQxNn0.AoJsvIgTi-NIEyY6KYWAPheQqgmQlLV6StP3GdtkMe0"
}


fexivil792@godpeed.com
Q6xfqD86M8BY