import { Component, OnDestroy, OnInit } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { ITvShow } from './ITvshow';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent  implements OnDestroy,OnInit{
  basepath = 'https://image.tmdb.org/t/p/w780'
 allTvShows:ITvShow[]=[];
  constructor(protected tvService:TvshowService) {}
  ngOnInit(): void {
   this.allTvShows=this.tvService.getAllTvShows();
  }
  ngOnDestroy(): void {
    console.log('component dead!');
    
  }
}
