import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";

import app from "./server";

// import dayjs from "dayjs";
// const date1 = dayjs();
// const date2 = dayjs().subtract(1, "months");
// const date3 = dayjs().subtract(2, "months");
// console.log(typeof date1);
// console.log(date1.valueOf());
// console.log(date2.valueOf());
// const dates = [date3, date2, date1];
// console.log(dates);
// // Trier les objets Day.js du plus récent au plus ancien
// const sortedDates = dates.sort((a, b) => b.valueOf() - a.valueOf());
// console.log(sortedDates);

// const date = dayjs("2023-09-01").format("MMMM YYYY");
// console.log(date);
// // Convert date in a dayjs object
// const dateObject = dayjs(date);
// console.log(dateObject);
// console.log(dateObject.valueOf());

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});

// Database manipulation

// import { AppDataSource } from "./data-source";
// import { User } from "./entities/User";
// import { Project } from "./entities/Project";
// import { ProjectImage } from "./entities/ProjectImage";

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
