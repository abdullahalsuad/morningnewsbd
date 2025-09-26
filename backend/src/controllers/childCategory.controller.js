import ParentCategory from "../models/parentCategory.model.js";
import ChildCategory from "../models/childCategory.model.js";

// Create new child category (with or without parent)
export const createChild = async (req, res) => {
  try {
    const { name, parentId, slug } = req.body;

    // validate name & slug
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name are required",
      });
    }

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug are required",
      });
    }

    // check if a document with same name OR slug exists
    const exists = await ChildCategory.findOne({
      $or: [{ name }, { slug }],
    });

    if (exists) {
      let errorMessage = "";

      if (exists.name === name && exists.slug === slug) {
        errorMessage =
          "Child category name and slug already exist. Please use a different name and slug.";
      } else if (exists.name === name) {
        errorMessage =
          "Child category name already exists. Please use a different name.";
      } else if (exists.slug === slug) {
        errorMessage =
          "Child category slug already exists. Please use a different slug.";
      }

      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    let finalParentId = null;

    // If parentId is provided, validate it
    if (parentId) {
      const parent = await ParentCategory.findById(parentId);
      if (!parent) {
        return res.status(404).json({
          success: false,
          message: "Parent category not found",
        });
      }
      finalParentId = parentId;
    }

    // Create child with or without parent
    const child = await ChildCategory.create({
      name,
      slug,
      parentId: finalParentId,
    });

    res.status(201).json({
      success: true,
      message: finalParentId
        ? "Subcategory created under parent successfully"
        : "Subcategory created without parent successfully",
      data: child,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create Subcategory",
      error: error.message,
    });
  }
};

// Get all child categories
export const getAllChildren = async (req, res) => {
  try {
    const children = await ChildCategory.find().populate("parentId", "name");
    res.status(200).json({
      success: true,
      count: children.length,
      data: children,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch child categories",
      error: error.message,
    });
  }
};

// Get child by ID (with parent)
export const getChildById = async (req, res) => {
  try {
    const child = await ChildCategory.findById(req.params.id).populate(
      "parentId",
      "name"
    );
    if (!child) {
      return res.status(404).json({
        success: false,
        message: "Child category not found",
      });
    }

    res.status(200).json({
      success: true,
      data: child,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch child category",
      error: error.message,
    });
  }
};

// Update child category (allow editing slug)
export const updateChild = async (req, res) => {
  try {
    const { name, parentId, slug } = req.body;

    // Check duplicate name slug
    if (name) {
      const nameExists = await ChildCategory.findOne({
        name,
        _id: { $ne: req.params.id },
      });
      if (nameExists) {
        return res.status(400).json({
          success: false,
          message:
            "Child category name already exists. Please use a different name.",
        });
      }
    }
    if (slug) {
      const slugExists = await ChildCategory.findOne({
        slug,
        _id: { $ne: req.params.id }, 
      });
      if (slugExists) {
        return res.status(400).json({
          success: false,
          message: "Slug already exists. Please use a different slug.",
        });
      }
    }

    // If parentId is changing, validate new parent exists
    if (parentId) {
      const parent = await ParentCategory.findById(parentId);
      if (!parent) {
        return res.status(404).json({
          success: false,
          message: "Parent category not found",
        });
      }
    }

    // Update the child
    const child = await ChildCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("parentId", "name slug");

    if (!child) {
      return res.status(404).json({
        success: false,
        message: "Child category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Child category updated successfully",
      data: child,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update child category",
      error: error.message,
    });
  }
};

// Delete child category
export const deleteChild = async (req, res) => {
  try {
    const child = await ChildCategory.findById(req.params.id);
    if (!child) {
      return res.status(404).json({
        success: false,
        message: "Child category not found",
      });
    }

    await child.deleteOne();

    res.status(200).json({
      success: true,
      message: "Child category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete child category",
      error: error.message,
    });
  }
};
