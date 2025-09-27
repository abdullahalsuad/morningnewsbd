import mongoose, { Schema } from "mongoose";

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Relations
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ParentCategory",
      required: true,
    },

    childCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChildCategory",
      default: null,
    },

    publicationDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["scheduled", "published"],
    },

    author: {
      userId: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        trim: true,
      },
    },

    coverImage: {
      url: {
        type: String,
        required: [true, "Cover image URL is required"],
      },
      imgCaption: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);
export default News;
