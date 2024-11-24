import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoComponent } from './festivo.component';

describe('FestivoComponent', () => {
  let component: FestivoComponent;
  let fixture: ComponentFixture<FestivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
