import mongoose, { Schema } from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    publicationDate: {
      type: Date,
      default: Date.now,
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
        required: true,
      },

      imgCaption: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

export default News;
