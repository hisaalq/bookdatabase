import { Router } from "express";
import {  createBook, getBooks, getBookById, updateBook, deleteBook } from "./books.controller";
import upload from "../middleware/Multer";

const BooksRouter = Router();

BooksRouter.get("/", getBooks);
BooksRouter.post("/", upload.single("image"),createBook);
BooksRouter.get("/:id", getBookById);
BooksRouter.put("/:id", upload.single("image"), updateBook);
BooksRouter.delete("/:id", deleteBook);


export default BooksRouter;