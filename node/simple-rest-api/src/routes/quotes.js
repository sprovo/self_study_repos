const express = require("express");
const axios = require("../config/axiosInstance");
require("dotenv").config();
const router = express.Router();

router.get("/character/:character", async (req, res) => {
  try {
    const response = await axios({
      headers: { Accept: "text/html, application/json, text/plain, */*" },
      proxy: undefined,
      url: `/character?name=${req.params.character}`, // Uses axios instance baseURL
      method: "get",
    });

    const data = response.data || [];

    res.status(200).send({ data });
  } catch (error) {
    res.status(error.status || 400).send({ error: error, data: [] });
  }
});

module.exports = router;
