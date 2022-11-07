import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

productForm: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.initForm();
    this.productForm.controls.name;
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      imageURL: new FormControl(),
      phone: new FormControl(),
      select: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.productForm);
    localStorage.setItem("Product1", JSON.stringify(this.productForm.value));
  }
}
