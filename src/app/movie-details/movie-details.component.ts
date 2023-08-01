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
  
  constructor(public myRouts: ActivatedRoute,public myMoviesSer:MoviesServiceService) {
    // this.selectedMovieId = this.myRouts.snapshot.paramMap.get('id');
    // for (const element of this.allMovies) {
    //   if (element.id == this.selectedMovieId) {
    //     this.selectedmovie = element;
    //   } 
    // }

    // console.log(this.selectedmovie);
  }
  ngOnInit(): void {
    this.selectedMovieId = this.myRouts.snapshot.paramMap.get('id');
    this.selectedmovie =  this.myMoviesSer.getMovieById(this.selectedMovieId);
   
  }
  
}
