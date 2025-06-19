import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-crear-alumno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './crear-alumno.component.html'
})
export class CrearAlumnoComponent {
  mensaje: string | null = null;
  alumnoForm!: FormGroup;  
  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      nombrePadre: ['', Validators.required],
      nombreMadre: ['', Validators.required],
      grado: [null, Validators.required],
      seccion: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
    });
  }

  enviar() {
    if (this.alumnoForm.valid) {
      this.alumnoService.crearAlumno(this.alumnoForm.value).subscribe({
        next: (res: any) => {
          this.mensaje = res.message;
          this.alumnoForm.reset();
        },
        error: () => {
          this.mensaje = 'Ocurrió un error al crear el alumno.';
        }
      });
    }
  }
}