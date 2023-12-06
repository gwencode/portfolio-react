import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

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
    const user = await userRepository.save(req.body);
    res.json(user);
  } catch (error) {
    console.error("Error while saving new user into database", error);
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
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.age = req.body.age || user.age;
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
