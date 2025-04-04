const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const pageSize = req.query.pageSize || 9;
    const page = req.query.page || 1;

    const apiUrl = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = app;
