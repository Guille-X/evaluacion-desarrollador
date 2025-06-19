import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-consultar-alumno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultar-alumno.component.html'
})
export class ConsultarAlumnoComponent {
  alumnos: any[] = [];
  gradoSeleccionado!: FormControl;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.gradoSeleccionado = this.fb.control(null);
  }

  consultar() {
    const grado = this.gradoSeleccionado.value;
    if (grado !== null) {
      this.alumnoService.consultarPorGrado(grado).subscribe({
        next: (data: any) => (this.alumnos = data),
        error: () => alert('Error al consultar alumnos'),
      });
    }
  }
}