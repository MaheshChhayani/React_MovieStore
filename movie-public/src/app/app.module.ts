import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieListComponent,
    AboutComponent,
    HomepageComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component:HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'movies',
        component: MovieListComponent
      },
      {
        path:'create',
        component:CreateComponent
      },
      {
        path:'movies/:movieid',
        component:DetailsPageComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
