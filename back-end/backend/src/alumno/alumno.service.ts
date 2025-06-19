import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './alumno.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ) {}

  crearAlumno(data: Partial<Alumno>) {
    const nuevo = this.alumnoRepository.create(data);
    return this.alumnoRepository.save(nuevo);
  }

  consultarPorGrado(grado: number) {
    return this.alumnoRepository.find({
      where: { grado },
    });
  }
}