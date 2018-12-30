import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NationalTaskForceComponent } from './national-task-force/national-task-force.component';
import { HomeComponent } from './home/home.component';
import { AdvocatesComponent } from './advocates/advocates.component';
import { HomeNationalComponent } from './home-national/home-national.component';
import { HomeAdvocatesComponent } from './home-advocates/home-advocates.component';

const appRoutes: Routes = [
  { path: 'NationalTaskForce', component: NationalTaskForceComponent },
  { path: 'Advocates', component: AdvocatesComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    NationalTaskForceComponent,
    HomeComponent,
    AdvocatesComponent,
    HomeNationalComponent,
    HomeAdvocatesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AboutComponent, FooterComponent, HomeComponent]
})
export class AppModule { }
