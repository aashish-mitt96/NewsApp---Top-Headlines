const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const pageSize = req.query.pageSize || 9;
    const page = req.query.page || 1;

    const apiUrl = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};
