# test-logysto
- Correr local

``` cd src```
  
``` npm i```

``` npm run start:dev```  
- Correr con docker 


``` sh docker-run.sh ```
  
- Persistencia se maneja en memoria, cada vez que se reinicie se borra todo.

  
- Endpoint signUp

URL: http://localhost:8080/api/auth/sign-up
Method: POST

Body: 
{"email":"ahelord@gmail.com",
	"password":"asdsd"
}

- Endpoint login

URL: http://localhost:8080/api/auth/login
Method: POST

Body: {"email":"ahelord@gmail.com",
	"password":"asdsd"
}

- Endpoint refresh token

URL: http://localhost:8080/api/auth/refresh-token
Method: POST

Body:
{
  "refreshToken": "myrefreshtoken"
}

- Endpoint coordinates
 
URL: http://localhost:8080/api/coordinates/search
Method: GET  
Headers:
- x-auth-token: token

Body:

{
"address":"Cll 100 96 04"
}

