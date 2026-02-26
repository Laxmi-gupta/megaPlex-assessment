import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: Object,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Content", ContentSchema);