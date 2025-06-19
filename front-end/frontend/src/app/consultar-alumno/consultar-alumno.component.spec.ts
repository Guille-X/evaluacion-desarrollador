import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlumnoComponent } from './consultar-alumno.component';

describe('ConsultarAlumnoComponent', () => {
  let component: ConsultarAlumnoComponent;
  let fixture: ComponentFixture<ConsultarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarAlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
