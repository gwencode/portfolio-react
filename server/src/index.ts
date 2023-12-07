import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});

// Database manipulation

// import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";
// import { Project } from "./entity/Project";
// import { ProjectImage } from "./entity/ProjectImage";

// AppDataSource.initialize()
//   .then(async () => {
// console.log(
//   "Loading users, projects and project images repositories from the database"
// );
// const userRepository = AppDataSource.getRepository(User);
// const projectRepository = AppDataSource.getRepository(Project);
// const projectImageRepository = AppDataSource.getRepository(ProjectImage);

// // const firstProject = await projectRepository.findOneBy({ id: 1 });
// // const firstProjectImage = await projectImageRepository.findOneBy({ id: 1 });

// let users = await userRepository.find();
// // await userRepository.remove(users);
// // const user = userRepository.create({
// //   firstName: "Gwendal",
// //   lastName: "Le Bris",
// //   age: 28,
// // });
// // await userRepository.save(user);
// // users = await userRepository.find();

// const projects = await projectRepository.find();
// const projectImages = await projectImageRepository.find();

// console.log("Loaded users: ", users);
// console.log("Loaded projects: ", projects);
// console.log("Loaded project images: ", projectImages);

// console.log(
//   "Here you can setup and run express / fastify / any other framework."
// );
// })
// .catch((error) => console.log(error));
