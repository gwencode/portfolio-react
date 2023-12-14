import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProjectImage } from "./ProjectImage";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  category: string;

  @Column()
  stack: string;

  @Column()
  liveSite: string | null;

  @Column()
  github: string;

  @OneToMany(() => ProjectImage, (image) => image.project)
  images: ProjectImage[];
}
