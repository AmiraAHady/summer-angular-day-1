import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movies/IMovie';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  api_key = '0ab69d58b9382bc390a939b7dbbe713b';
  urlBase = 'https://api.themoviedb.org/3';
  constructor(public http: HttpClient) {}

  getAllMovies(lang:string,pageNamber:number=1): Observable<any> {
    return this.http.get(
      `${this.urlBase}/movie/now_playing?api_key=${this.api_key}&page=${pageNamber}&language=${lang}`
    );
    // return this.http.get(
    //   `${this.urlBase}/discover/movie?api_key=${this.api_key}&page=${pageNamber}&language=${lang}&with_origin_country=US`
    // );
   
  }

  getMovieById(movieId: number): Observable<any> {
    return this.http.get(
      `${this.urlBase}/movie/${movieId}?api_key=${this.api_key}`
    );
  }

  searchMovies(movieName:string,lang:string):Observable<any>{
    if(movieName==''){
      return this.getAllMovies(lang);
    }else{
      return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${movieName}`)
    }
  }

  // getallMoviesGenre():Observable<any>{
  //   return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`)
  // }
}
