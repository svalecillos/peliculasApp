import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  pupolares:any;
  popularesNinos:any;

  constructor( public _movieService:MovieService ) { 

    this._movieService.getMoviesCartelera() 
        .subscribe( (data:any) => this.cartelera = data.results );
    
    this._movieService.getMoviesPopulares() 
        .subscribe( (data:any) => this.pupolares = data.results);
    
    this._movieService.getMoviesKids() 
        .subscribe( (data:any) => this.popularesNinos = data.results );
        
  }

  ngOnInit() {
  }

}
