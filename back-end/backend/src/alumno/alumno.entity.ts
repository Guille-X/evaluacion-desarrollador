import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column()
  nombrePadre: string;

  @Column()
  nombreMadre: string;

  @Column()
  grado: number;

  @Column()
  seccion: string;

  @Column({ type: 'date' })
  fechaIngreso: Date;
}