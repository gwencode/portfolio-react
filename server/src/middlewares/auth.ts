import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);

export const comparePasswords = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const createJWT = (user: User) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

export const protect = async (req, res, next) => {
  // export const protect = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "You are not authorized to access this resource" });
    return;
  }

  const token: string = bearer.split(" ")[1];
  if (!token) {
    res.status(401);
    res.json({ message: "You are not authorized to access this resource" });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log("payload: ", payload);
    next();
    return;
  } catch (error) {
    console.error("Error during JWT verification: ", error);
    res.status(401);
    res.json({ message: "Not valid token" });
    return;
  }
};
