import News from "../models/news.model.js";

// create new news
export const createNews = async (req, res) => {
  try {
    const { publicationDate } = req.body;

    // Set status automatically
    if (publicationDate && new Date(publicationDate) > new Date()) {
      req.body.status = "scheduled";
    } else {
      req.body.status = "published";
    }

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

// Get all news (for admin only)
export const getAllNewsAdmin = async (req, res) => {
  try {
    const news = await News.find().sort({ publicationDate: -1 });
    res.status(200).json({
      success: true,
      count: news.length,
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

// Get single news by ID (for admin only)
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

// Update news (for admin only)
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

// Delete news (for admin only)
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

// Get single published news (for users)
export const getSingleNewsUser = async (req, res) => {
  try {
    const news = await News.findOne({
      _id: req.params.id,
      status: "published",
    });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found or not published yet",
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

// Get all published news (for frontend users)
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find({ status: "published" }).sort({
      publicationDate: -1,
    });

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

// for news schedule 
export const publishScheduledNews = async (req, res) => {
  try {
    const now = new Date();

    const result = await News.updateMany(
      { status: "scheduled", publicationDate: { $lte: now } },
      { $set: { status: "published" } }
    );

    res.status(200).json({
      success: true,
      message: `${result.modifiedCount} news published`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to publish scheduled news",
      error: error.message,
    });
  }
};
