# Playlist-backend

User creates their music playlist. They fill in a song form to do so.

The project is made of two parts:

- [frontend](https://github.com/Nadieva/playlist-frontend)
- [backend](https://github.com/Nadieva/playlist-backend)

**Note: The database is MongoDB Atlas.You might create your MongoDB Database if you use my code locally**

## How to use it

Please follow the instructions in your terminal to use the application:

- `git clone https://github.com/Nadieva/playlist-backend`
- `cd playlist-backend`
- `npm install` or `yarn install`
- `node index.js`

## Endpoint

- The local endpoint is: http://localhost:5000/api/songs
- The remote endpoint is : https://playlistbackend.herokuapp.com/api/songs

### GET request

An array of objects (JSON) is diplayed, i.e.:
`[{ title: "Double Knot", artist: "Stray Kids", gender: "K-Pop", id:"60eb6e24b84d1a6b7056b751" }, { title: "We will rock you", artist: "Queen", gender: "Rock",id:"60eb6dc6b84d1a6b7056b746" } ]`

**Note: You can access an object with its ID on `<ENDPOINT>/<ID>`**

### POST request

Please enter the title, artist and the gender of the song in the request body(JSON) in the request body (JSON) as it follows:
`{ "title": "We will rock you", "artist": "Queen", "gender": "Rock" }`

### DELETE request

`<ENDPOINT>/<ID>`

### PUT request

Please enter the title, artist and/or the gender of the song to update in the request body (JSON) on `<ENDPOINT>/<ID>`

## Installation

- cors: 2.8.5
- express: 4.17.1
- mongoose: 5.13.2

## Resources

- [MongoDB](https://www.mongodb.com/)
- [Express](http://expressjs.com/)
