import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adlist } from './adlist';

describe('Adlist', () => {
  let component: Adlist;
  let fixture: ComponentFixture<Adlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
