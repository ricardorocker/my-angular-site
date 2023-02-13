import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsComponent } from './views/projects/reactive-forms/reactive-forms.component';
import { GithubComponent } from './views/projects/github/github.component';
import { ContactComponent } from './views/contact/contact.component';
import { EducationComponent } from './views/education/education.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  {
    path: 'projects', component: ProjectsComponent, children: [
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      { path: 'github', component: GithubComponent }
    ]
  },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
