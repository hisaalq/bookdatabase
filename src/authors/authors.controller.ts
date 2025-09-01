import { NextFunction, Request, Response } from "express";
import Author from "../model/author";
import Book from "../model/book";

export const getAuthors = async (req: Request, res: Response, next: NextFunction) => {
    const authors = await Author.find();
    res.json(authors);
}   

export const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const author = await Author.findById(id);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.json(author);
   } catch (error) {
            next(error);
   }
}

export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, country } = req.body;
        const books = await Book.find({ author: req.params.id });
        if (books.length > 0) {
            return res.status(400).json({ message: "Author has books" });
        }
        const author = await Author.create({ name, country });
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }
}

 export const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name, country } = req.body;
        const author = await Author.findByIdAndUpdate(id, { name, country }, { new: true });
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.json(author);
    } catch (error) {
        next(error);
    }
}

export const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const author = await Author.findByIdAndDelete(id);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.json(author);
    } catch (error) {
        next(error);
    }
}
