import {
  Controller, Post, Body, Get, Param, Headers, UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiHeader } from '@nestjs/swagger';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno.entity';

@ApiTags('Alumnos')
@ApiHeader({ name: 'x-api-key', required: true })
@Controller()
export class AlumnoController {
  private readonly validApiKey = process.env.API_KEY;

  constructor(private readonly alumnoService: AlumnoService) {}

  @Post('crear-alumno')
  @ApiOperation({ summary: 'Crear un nuevo alumno' })
  @ApiResponse({ status: 201, description: 'Alumno creado exitosamente' })
  async crear(@Body() body: Partial<Alumno>, @Headers('x-api-key') apiKey: string) {
    if (apiKey !== this.validApiKey) {
      throw new UnauthorizedException('API Key inválida');
    }
    const nuevoAlumno = await this.alumnoService.crearAlumno(body);
    return { message: 'Alumno creado exitosamente', data: nuevoAlumno };
  }

  @Get('consultar-alumno/:grado')
  @ApiOperation({ summary: 'Consultar alumnos por grado' })
  @ApiParam({ name: 'grado', type: Number })
  @ApiResponse({ status: 200, description: 'Lista de alumnos' })
  async consultar(@Param('grado') grado: number, @Headers('x-api-key') apiKey: string) {
    if (apiKey !== this.validApiKey) {
      throw new UnauthorizedException('API Key inválida');
    }
    return this.alumnoService.consultarPorGrado(+grado);
  }
}