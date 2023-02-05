import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['']
  })

  public submitForm() {
    this.isSubmitted = true;
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm);
    }
  }
}
