import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlumnoService {
  private apiUrl = 'http://localhost:3000';
  private headers = new HttpHeaders().set('x-api-key', 'miclave123');

  constructor(private http: HttpClient) {}

  crearAlumno(alumno: any) {
    return this.http.post(`${this.apiUrl}/crear-alumno`, alumno, { headers: this.headers });
  }

  consultarPorGrado(grado: number) {
    return this.http.get(`${this.apiUrl}/consultar-alumno/${grado}`, { headers: this.headers });
  }
}