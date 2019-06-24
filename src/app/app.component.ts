import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'peliculasApp';

  constructor(public _movieApi:MovieService){
    /*this._movieApi.getMoviesPopulares()
        .subscribe( data => console.log(data) );*/
    /*this._movieApi.searchMovie('batman')
        .subscribe( data => console.log(data) );*/
  }

}
