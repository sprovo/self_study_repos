const axiosDefault = require('axios').default;

// Creates a shared axios instance.
const axios = axiosDefault.create({
	baseURL: "https://animechan.vercel.app/api/quotes",
});

module.exports = axios;
