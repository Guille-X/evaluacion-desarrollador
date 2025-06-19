import { Routes } from '@angular/router';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnoComponent } from './consultar-alumno/consultar-alumno.component';

export const routes: Routes = [
  { path: 'crear', component: CrearAlumnoComponent },
  { path: 'consultar', component: ConsultarAlumnoComponent },
  { path: '**', redirectTo: 'crear' }
];