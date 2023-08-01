import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { IMovie } from './IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  allMovies:IMovie[]=[];
  basepath = 'https://image.tmdb.org/t/p/w780';
  //  myMoviesSer:MoviesServiceService=new MoviesServiceService();
  constructor(public myMoviesSer:MoviesServiceService) {}

  ngOnInit(): void {
    this.allMovies=this.myMoviesSer.getAllMovies();
  }
  handelChildMsg(childMsg:string){
    console.log(childMsg);
    
  }
}
