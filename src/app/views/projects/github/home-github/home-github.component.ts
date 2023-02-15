import { UserGithubService } from './../../../../services/user-github.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-github',
  templateUrl: './home-github.component.html',
  styleUrls: ['./home-github.component.css']
})
export class HomeGithubComponent {
  messageError: string = 'Por favor, digite no mínimo 2 caracteres';

  constructor(
    private formBuilder: FormBuilder,
    private user: UserGithubService,
    private router: Router
  ) { }

  public searchForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]]
  })

  submitForm(): void {
    if (this.searchForm.valid) {
      this.user.getUser(this.searchForm.get('username')?.value)
        .subscribe((user) => {
          this.router.navigateByUrl('projects/perfil-github', {
            state: user
          })
        },
          (err) => {
            if (err.error.message === 'Not Found') {
              this.messageError = 'Usuário não encontrado, favor verificar nome digitado.'
            } else {
              this.messageError = 'Erro na requisição do gitHub.'
            }
            this.searchForm.get('username')?.setErrors({'incorrect': true});
          }
        );
    } else {
      this.searchForm.get('username')?.markAsTouched();
      this.messageError = 'Por favor, digite no mínimo 2 caracteres';
    }
  }

}
