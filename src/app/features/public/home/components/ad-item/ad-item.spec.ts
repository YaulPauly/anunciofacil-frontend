import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdItem } from './ad-item';

describe('AdItem', () => {
  let component: AdItem;
  let fixture: ComponentFixture<AdItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
