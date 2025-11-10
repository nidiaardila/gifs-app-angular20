import { Component } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';

@Component({
  selector: 'app-trending',
  imports: [
    GifsList
  ],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export default class Trending {

}
