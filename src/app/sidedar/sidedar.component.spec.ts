import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidedarComponent } from './sidedar.component';

describe('SidedarComponent', () => {
  let component: SidedarComponent;
  let fixture: ComponentFixture<SidedarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidedarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidedarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
