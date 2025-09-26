import mongoose from "mongoose";

const ParentCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [1, "Name cannot be empty"],
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
    required: [true, "Slug is required"],
    trim: true,
    minlength: [1, "Slug cannot be empty"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ParentCategory = mongoose.model("ParentCategory", ParentCategorySchema);
export default ParentCategory;
