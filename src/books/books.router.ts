import { Router } from "express";
import {  createBook, getBooks, getBookById, updateBook, deleteBook } from "./books.controller";

const BooksRouter = Router();

BooksRouter.get("/", getBooks);
BooksRouter.post("/", createBook);
BooksRouter.get("/:id", getBookById);
BooksRouter.put("/:id", updateBook);
BooksRouter.delete("/:id", deleteBook);

export default BooksRouter;