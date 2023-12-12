import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { comparePasswords, createJWT, hashPassword } from "../middlewares/auth";
import { validate } from "class-validator";

const userRepository = AppDataSource.getRepository(User);

// Get all
export const allUsers = async (req: Request, res: Response) => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    console.error("Error while getting users from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get one
export const findUser = async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOneBy({
      id: Number(req.params.id),
    });
    res.json(user);
  } catch (error) {
    console.error("Error while getting user from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create one
export const createUser = async (req: Request, res: Response) => {
  try {
    const data = {
      email: req.body.email,
      password: await hashPassword(req.body.password),
      admin: req.body.admin,
    };
    const user = await userRepository.save(data);

    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    console.error("Error while saving new user into database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Sign in
export const signIn = async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOneBy({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      const passwordMatch = await comparePasswords(
        req.body.password,
        user.password
      );
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      } else {
        const token = createJWT(user);
        res.json({ token });
      }
    }
  } catch (error) {
    console.error("Error while signing in user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOneBy({
      id: Number(req.params.id),
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.admin = req.body.admin || user.admin;
      await userRepository.save(user);
      res.json(user);
    }
  } catch (error) {
    console.error("Error while updating user in database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOneBy({
      id: Number(req.params.id),
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      await userRepository.delete(user);
      res.json({ message: "User deleted" });
    }
  } catch (error) {
    console.error("Error while deleting user from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Validate user

export const validateUser = async (req, res, next) => {
  const user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.admin = req.body.admin;

  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).json(errors);
    return;
  } else {
    next();
  }
};
