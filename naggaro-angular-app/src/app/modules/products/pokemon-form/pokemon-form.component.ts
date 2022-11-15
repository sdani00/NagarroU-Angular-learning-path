import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  productForms: FormGroup;
  productForm: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.productForms = new FormGroup({
      product: new FormArray([this.getProductForm()]),
    });
  }

  onSubmit() {
    localStorage.setItem(
      'Products',
      JSON.stringify(this.productForms.value.product)
    );
  }

  getProductForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[-_a-zA-Z0-9]*'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[-_a-zA-Z0-9]*'),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+\\.\\d{2}$'),
      ]),
      category: new FormControl('', Validators.required),
      imageURL: new FormControl('', [Validators.required, this.validUrl()]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      phoneType: new FormControl(),
    });
  }

  addNewForm() {
    if (this.productFormsArray.controls.length > 4) {
      alert('Maximum product count <= 5');
      return;
    }
    (this.productForms.get('product') as FormArray).push(this.getProductForm());
  }

  get productFormsArray() {
    return this.productForms.get('product') as FormArray;
  }

  validUrl(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = <string>control.value;

      if (!value) {
        return null;
      }

      if (value.includes('http') && value.includes('://')) {
        return null;
      }

      return { invalidUrl: true };
    };
  }

  getNameControl(index: number) {
    return (this.productForms.controls.product as FormArray).controls[
      index
    ].get('name');
  }

  onReset() {
    this.productFormsArray.reset();
  }
}
