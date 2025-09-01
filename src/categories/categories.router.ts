import { Router } from "express";
import {  createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from "./categories.controller";

const CategoriesRouter = Router();

CategoriesRouter.get("/", getCategories);
CategoriesRouter.post("/", createCategory);
CategoriesRouter.get("/:id", getCategoryById);
CategoriesRouter.put("/:id", updateCategory);
CategoriesRouter.delete("/:id", deleteCategory);

export default CategoriesRouter;