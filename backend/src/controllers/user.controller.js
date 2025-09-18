import News from "../models/news.model.js";

// create new news
export const createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: news,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create news",
      error: error.message,
    });
  }
};

// Get all news
export const getAll = async (req, res) => {
  try {
    const news = await News.find().sort({ publicationDate: -1 }); // newest first
    res.status(200).json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
      error: error.message,
    });
  }
};
