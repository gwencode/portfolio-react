import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Project } from "./Project";

@Entity()
export class ProjectImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Project, (project) => project.images, {
    eager: true,
  })
  project: Project;
}
