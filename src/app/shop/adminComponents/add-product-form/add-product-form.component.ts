import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  addProductForm!: FormGroup;
  imageUrlPreview: string | ArrayBuffer | null = null;

  constructor(private readonly productsService: ProductsService, private readonly notification: NzNotificationService){}

  ngOnInit(): void {
   this.initializeForm();
  }

  initializeForm(){
    this.addProductForm = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      imageUrl: new FormControl("", Validators.required),
    })
  }

  createNotification(title: string){
    this.notification.create(
      'success',
      `${title} was suscesfully added to the database.`,
      ''
    )
  }

  onSubmit(){
    const formProduct = {
      ...this.addProductForm.value,
      isInStock: true
    }
    console.log(formProduct)
    this.productsService.addProduct(formProduct).subscribe((response) => {
      if(response.name){
        this.createNotification(response.name)
        this.addProductForm.reset()
      }
    })

  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrlPreview = reader.result;
        this.addProductForm.patchValue({ imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  clearImage() {
    this.imageUrlPreview = null;
    this.addProductForm.patchValue({ imageUrl: '' });
  }

}
