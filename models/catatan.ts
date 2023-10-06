import mongoose, { Schema } from "mongoose";

const catatanSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Catatan =
  mongoose.models.Catatan || mongoose.model("Catatan", catatanSchema);

export default Catatan;
