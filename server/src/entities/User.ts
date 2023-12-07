import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MinLength, IsEmail } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  password: string;

  @Column({ default: false })
  admin: boolean;
}
