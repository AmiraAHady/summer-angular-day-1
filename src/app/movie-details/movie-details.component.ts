import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  // myMoviesSer:MoviesServiceService=new MoviesServiceService();
  basepath = 'https://image.tmdb.org/t/p/w780';
  selectedmovie!:any;
  selectedMovieId: any = '';
  moviesGenres:any[]=[];
  
  constructor(public myRouts: ActivatedRoute,public myMoviesSer:MoviesServiceService) {
  }
  ngOnInit(): void {
    this.selectedMovieId = this.myRouts.snapshot.paramMap.get('id');
    this.myMoviesSer.getMovieById(this.selectedMovieId).subscribe({
      next:(singleMovie)=>{
        this.selectedmovie=singleMovie;
        this.moviesGenres=singleMovie.genres;
        console.log(singleMovie.genres);
        
      }
    });
   
   
  }
  
}
