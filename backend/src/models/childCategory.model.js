import mongoose from "mongoose";

const ChildCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [1, "Name cannot be empty"],
    unique: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParentCategory",
    default: null,
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

const ChildCategory = mongoose.model("ChildCategory", ChildCategorySchema);
export default ChildCategory;
