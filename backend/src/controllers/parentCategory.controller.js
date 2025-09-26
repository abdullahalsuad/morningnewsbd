import ChildCategory from "../models/childCategory.model.js";
import ParentCategory from "../models/parentCategory.model.js";

// Create new parent category
export const createParent = async (req, res) => {
  try {
    const { name, slug } = req.body;

    // validate name & slug
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug is required",
      });
    }

    // Check if a document with the same name and slug already exists
    const exists = await ParentCategory.findOne({
      $or: [{ name }, { slug }],
    });

    if (exists) {
      let errorMessage = "";

      // Check which field caused the conflict
      if (exists.name === name && exists.slug === slug) {
        errorMessage =
          "Category  and Slug already exist. Please use a different name and slug.";
      } else if (exists.name === name) {
        errorMessage =
          "Category name already exists. Please use a different name.";
      } else if (exists.slug === slug) {
        errorMessage = "Slug already exists. Please use a different slug.";
      }

      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const parent = await ParentCategory.create({ name, slug });
    res.status(201).json({
      success: true,
      message: "Parent category created successfully",
      data: parent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create parent category",
      error: error.message,
    });
  }
};

//  Get all parents
export const getAllParents = async (req, res) => {
  try {
    const parents = await ParentCategory.find().sort({ createdAt: -1 }).lean();

    res.status(200).json({
      success: true,
      count: parents.length,
      data: parents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch parent categories",
      error: error.message,
    });
  }
};

// Get parent by ID (with children)
export const getParentById = async (req, res) => {
  try {
    const parent = await ParentCategory.findById(req.params.id);
    if (!parent) {
      return res.status(404).json({
        success: false,
        message: "Parent category not found",
      });
    }

    const children = await ChildCategory.find({ parentId: req.params.id });

    res.status(200).json({
      success: true,
      data: { parent, children },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch parent category",
      error: error.message,
    });
  }
};

//  Update parent (allow editing slug)
export const updateParent = async (req, res) => {
  try {
    const { name, slug } = req.body;

    // Duplicate  check name slug
    if (name) {
      const nameExists = await ParentCategory.findOne({
        name,
        _id: { $ne: req.params.id },
      });
      if (nameExists) {
        return res.status(400).json({
          success: false,
          message: "Parent category name already exists",
        });
      }
    }

    if (slug) {
      const exists = await ParentCategory.findOne({
        slug,
        _id: { $ne: req.params.id },
      });
      if (exists) {
        return res.status(400).json({
          success: false,
          message: "Slug already in use, please choose another",
        });
      }
    }

    const parent = await ParentCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!parent) {
      return res.status(404).json({
        success: false,
        message: "Parent category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Parent category updated successfully",
      data: parent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update parent category",
      error: error.message,
    });
  }
};

//  Delete parent (and its children)
export const deleteParent = async (req, res) => {
  try {
    const parent = await ParentCategory.findById(req.params.id);
    if (!parent) {
      return res.status(404).json({
        success: false,
        message: "Parent category not found",
      });
    }

    // unlink all children of this parent
    await ChildCategory.updateMany(
      { parentId: req.params.id },
      { $set: { parentId: null } }
    );

    // delete the parent
    await parent.deleteOne();

    res.status(200).json({
      success: true,
      message: "Parent category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete parent category",
      error: error.message,
    });
  }
};
