import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'tvshow',component:TvshowComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'moviesDetails/:id',component:MovieDetailsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
