import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import Book from "../model/book";

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    const categories = await Category.find();
    res.json(categories);
}   

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
   } catch (error) {
            next(error);
   }
}

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const books = await Book.find({ category: req.params.id });
        if (books.length > 0) {
            return res.status(400).json({ message: "Category has books" });
        }
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
}

 export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    } catch (error) {
        next(error);
    }
}

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    } catch (error) {
        next(error);
    }
}
