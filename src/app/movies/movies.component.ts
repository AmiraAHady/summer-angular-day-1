import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MoviesServiceService } from '../movies-service.service';
import { IMovie } from './IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  allMovies: IMovie[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  private search_value: string = '';
  lang: string = 'ar-SA'; //ar-SA,en-US
  basepath = 'https://image.tmdb.org/t/p/w780';
  //  myMoviesSer:MoviesServiceService=new MoviesServiceService();
  constructor(public myMoviesSer: MoviesServiceService) {}

  ngOnInit(): void {
    // this.allMovies=
    this.myMoviesSer.getAllMovies(this.lang, this.currentPage).subscribe({
      next: (apiData) => {
        // console.log(apiData);
        this.allMovies = apiData.results;
        this.totalPages = apiData.total_results;
      },
    });
  }
  handelChildMsg(childMsg: string) {
    console.log(childMsg);
  }

  toggleLang() {
    this.lang = this.lang == 'ar-SA' ? 'en-US' : 'ar-SA';
    this.myMoviesSer.getAllMovies(this.lang, this.currentPage).subscribe({
      next: (apiData) => {
        // console.log(apiData);
        this.allMovies = apiData.results;
        this.totalPages = apiData.total_results;
      },
    });
  }

  set searchValue(val: string) {
    this.search_value = val;
    this.getSearchedMovies(val);
  }
  getSearchedMovies(searchData: string) {
    this.myMoviesSer.searchMovies(searchData, this.lang).subscribe({
      next: (searchResults) => {
        this.allMovies = searchResults.results;
      },
    });
  }
  changePage(pageData: PageEvent) {
    console.log(`page changed ${pageData.pageIndex}`);
    this.currentPage = pageData.pageIndex + 1;
    this.myMoviesSer.getAllMovies(this.lang, this.currentPage).subscribe({
      next: (apiData) => {
        // console.log(apiData);
        this.allMovies = apiData.results;
        this.totalPages = apiData.total_results;
      },
    });
  }
}
