import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SkillsComponent } from './views/skills/skills.component';
import { EducationComponent } from './views/education/education.component';
import { ContactComponent } from './views/contact/contact.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { ReactiveFormsComponent } from './views/projects/reactive-forms/reactive-forms.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GithubComponent } from './views/projects/github/github.component';
import { HomeGithubComponent } from './views/projects/github/home-github/home-github.component';
import { ProfileComponent } from './views/projects/github/profile/profile.component';
import { ProfileCardComponent } from './views/projects/github/profile/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    DefaultLayoutComponent,
    ReactiveFormsComponent,
    CardComponent,
    NavBarComponent,
    GithubComponent,
    HomeGithubComponent,
    ProfileComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
