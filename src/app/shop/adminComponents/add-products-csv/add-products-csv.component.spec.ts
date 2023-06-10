import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsCSVComponent } from './add-products-csv.component';

describe('AddProductsCSVComponent', () => {
  let component: AddProductsCSVComponent;
  let fixture: ComponentFixture<AddProductsCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsCSVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
