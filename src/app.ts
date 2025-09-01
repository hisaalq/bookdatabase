import express from "express";
import categoriesRouter from "./categories/categories.router";
import connectDB from "./server";
import authorsRouter from "./authors/authors.router";
import booksRouter from "./books/books.router";


const app = express();
connectDB();

app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
