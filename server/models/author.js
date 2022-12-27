import mongoose from 'mongoose';
const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      required: false,
      type: String,
    },
  },
  { timestamps: true }
);

AuthorSchema.pre('save', (next) => {
  next();
});

const authorModel = mongoose.model('Author', AuthorSchema);
export default authorModel;
