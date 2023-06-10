import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelProductsTableComponent } from './excel-products-table.component';

describe('ExcelProductsTableComponent', () => {
  let component: ExcelProductsTableComponent;
  let fixture: ComponentFixture<ExcelProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelProductsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
