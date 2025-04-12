const axios = require("axios");

const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message manquant" });
    }

    const response = await axios.post(
      "https://chatgpt-42.p.rapidapi.com/aitohuman",
      { text: message },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com"
        }
      }
    );

    res.json({ response: response.data.result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { askAI };
