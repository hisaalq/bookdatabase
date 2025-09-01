import { NextFunction, Request, Response } from "express";
import Book from "../model/book";
import Author from "../model/author";
import Category from "../model/category";

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    const books = await Book.find();
    res.json(books);
}   

export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
   } catch (error) {
            next(error);
   }
}

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, author, category } = req.body;
        const book = await Book.create({ title, author, category });
        await Author.findByIdAndUpdate(author, { $push: { books: book._id } });
        await Category.findByIdAndUpdate(category, { $push: { books: book._id } });
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
}

 export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const book = await Book.findByIdAndUpdate(id, { name }, { new: true });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (error) {
        next(error);
    }
}

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (error) {
        next(error);
    }
}
