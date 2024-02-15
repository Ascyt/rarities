import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarityListComponent } from './rarity-list.component';

describe('RarityListComponent', () => {
  let component: RarityListComponent;
  let fixture: ComponentFixture<RarityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RarityListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RarityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
