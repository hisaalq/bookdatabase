import { Router } from "express";
import {  getAuthors, createAuthor, getAuthorById, updateAuthor, deleteAuthor } from "./authors.controller";

const AuthorsRouter = Router();

AuthorsRouter.get("/", getAuthors);
AuthorsRouter.post("/", createAuthor);
AuthorsRouter.get("/:id", getAuthorById);
AuthorsRouter.put("/:id", updateAuthor);
AuthorsRouter.delete("/:id", deleteAuthor);

export default AuthorsRouter;