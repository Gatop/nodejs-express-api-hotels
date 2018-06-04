# Nodejs-express-api-hotels

This is an API built with **NodeJs** using **Express Framework**. Also a **MongoDB** is being used to retrieve information.

### Clone the repo

```sh
git clone https://github.com/Gatop/nodejs-express-api-hotels.git
```

### Node setup

```sh
# Install npm dependencies in project folder
npm install
```

### Run server

```sh
npm run dev
# alias for
nodemon src/server.js
```

## ApiRest requests

You can download these examples and import them with **Postman** to test the API. Examples are stored as a "Collection v2.1" format.

 * <a href="https://github.com/Gatop/nodejs-express-api-hotels/blob/master/documentation/Almundo%20-%20ApiRest.postman_collection.json">**Postman Requests**</a>

 To import request collection you need to follow next steps:

```sh
Open Postman -> File -> Import -> Choose File
```

### Endpoints APIRest (Mappings)

	+---------+-----------------------------------------------+----------------------------------------+
	| Request | URI                                           | Action                                 |
	+---------+-----------------------------------------------+----------------------------------------+
	|GET      | hotels                                        | hotelController@list                   |
	|GET      | hotels/{hotel_id}                             | hotelController@findById               |
	|POST     | hotels/                                       | hotelController@create                 |
	|PUT      | hotels/{hotel_id}                             | hotelController@update                 |
	|DELETE   | hotels/{hotel_id}                             | hotelController@delete                 |
	+---------+-----------------------------------------------+----------------------------------------+

###  Examples Request

	+---------+-----------------------------------------------+----------------------------------------+
	| Request | URI                                           | Action                                 |
	+---------+-----------------------------------------------+----------------------------------------+
	|GET      | localhost:3000/hotels?query                   | hotelController@list                   |
	|GET      | localhost:3000/hotels/249942                  | hotelController@findById               |
	|POST     | localhost:3000/hotels                         | hotelController@create                 |
	|PUT      | localhost:3000/hotels/249942                  | hotelController@update                 |
	|DELETE   | localhost:3000/hotels/249942                  | hotelController@delete                 |
	+---------+-----------------------------------------------+----------------------------------------+

Query exmaples for GET ALL request:

```sh
# Query Examples
localhost:3500/hotels?name=lim&stars=1,2
localhost:3500/hotels?stars=3
localhost:3500/hotels?name=lima
```

## Modules

This modules where used to create this API:

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [morgan](https://www.npmjs.com/package/morgan)
