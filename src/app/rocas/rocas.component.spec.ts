import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocasComponent } from './rocas.component';

describe('RocasComponent', () => {
  let component: RocasComponent;
  let fixture: ComponentFixture<RocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
