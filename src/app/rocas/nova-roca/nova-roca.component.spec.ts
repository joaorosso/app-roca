import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaRocaComponent } from './nova-roca.component';

describe('NovaRocaComponent', () => {
  let component: NovaRocaComponent;
  let fixture: ComponentFixture<NovaRocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaRocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
