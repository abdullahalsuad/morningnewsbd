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
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ publicationDate: -1 });
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

// Get single news by ID
export const getSingleNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }
    res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
      error: error.message,
    });
  }
};

// Update news
export const updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: news,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update news",
      error: error.message,
    });
  }
};

// Delete news
export const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete news",
      error: error.message,
    });
  }
};
