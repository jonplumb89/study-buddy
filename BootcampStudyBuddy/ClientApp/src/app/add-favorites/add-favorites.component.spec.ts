import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoritesComponent } from './add-favorites.component';

describe('AddFavoritesComponent', () => {
  let component: AddFavoritesComponent;
  let fixture: ComponentFixture<AddFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
