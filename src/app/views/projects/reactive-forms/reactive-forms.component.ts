import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor(private formBuilder: FormBuilder) { }

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: ['']
  })

  public submitForm() {
    console.log(this.cadastroForm);
  }

}
