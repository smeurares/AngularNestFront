import { ChangeDetectorRef, Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add-products-csv',
  templateUrl: './add-products-csv.component.html',
  styleUrls: ['./add-products-csv.component.scss']
})
export class AddProductsCSVComponent {
  JSONData: any = []
  text: any;

  allowedExt = ["csv"];

  constructor(private msg: NzMessageService, private ref: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
      this.convertCSVtoJson(info.file.originFileObj!);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  convertCSVtoJson(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = reader.result as string;
      const lines = contents.split('\n');

      const products: Product[] = [];
      for (let i = 1; i < lines.length-1; i++) {
        const values = lines[i].split(',');

        // Assuming name, description, price, and imageUrl are in order
        const product = {
          name: values[0],
          description: values[1],
          price: parseFloat(values[2]),
          imageUrl: values[3].replace("\r", "")
        };

        products.push(product);
      }

    this.JSONData = products;
    };
    reader.readAsText(file);
  }
}
