import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SkillsComponent } from './views/skills/skills.component';
import { EducationComponent } from './views/education/education.component';
import { ContactComponent } from './views/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { ReactiveFormsComponent } from './views/projects/reactive-forms/reactive-forms.component';
import { CardComponent } from './components/card/card.component';

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
    NavBarComponent,
    DefaultLayoutComponent,
    ReactiveFormsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
