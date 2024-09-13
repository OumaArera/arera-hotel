import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNumber, Min, Max } from 'class-validator';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })  
  @IsString()
  name: string;

  @Column()
  @IsString()
  location: string;

  @Column('decimal', { precision: 2, scale: 1 }) 
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @Column()
  @IsString()
  description: string;
}
