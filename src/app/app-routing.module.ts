import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshow', component: TvshowComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'moviesDetails/:id', component: MovieDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
