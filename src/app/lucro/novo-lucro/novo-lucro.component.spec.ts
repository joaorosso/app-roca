import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLucroComponent } from './novo-lucro.component';

describe('NovoLucroComponent', () => {
  let component: NovoLucroComponent;
  let fixture: ComponentFixture<NovoLucroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLucroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLucroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
