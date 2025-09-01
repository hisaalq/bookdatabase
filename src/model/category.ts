import { Schema, model } from "mongoose";
// Change file name to Category.ts

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book",
    }],
});

export default model("Category", categorySchema);