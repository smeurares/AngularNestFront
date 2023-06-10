import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-excel-products-table',
  templateUrl: './excel-products-table.component.html',
  styleUrls: ['./excel-products-table.component.scss']
})
export class ExcelProductsTableComponent {
 @Input() products!: Product[];

 listOfCurrentPageData: readonly Product[] = [];

 onCurrentPageDataChange(listOfCurrentPageData: readonly Product[]): void {
  this.listOfCurrentPageData = listOfCurrentPageData;
}
}
