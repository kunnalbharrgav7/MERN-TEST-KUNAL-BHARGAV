import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true],
    maxlength: [100],
  },
  content: {
    type: String,
    required: [true],
  },
  tags: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
