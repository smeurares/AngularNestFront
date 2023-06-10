import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  addProductForm!: FormGroup;
  imageUrlPreview: string | ArrayBuffer | null = null;

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

  onSubmit(){
    console.log(this.addProductForm.value)
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
