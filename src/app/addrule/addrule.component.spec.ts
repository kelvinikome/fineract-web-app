import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddruleComponent } from './addrule.component';

describe('AddruleComponent', () => {
  let component: AddruleComponent;
  let fixture: ComponentFixture<AddruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
