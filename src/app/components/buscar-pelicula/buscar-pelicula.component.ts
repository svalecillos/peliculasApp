import { Component, OnInit  } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscar-pelicula',
  templateUrl: './buscar-pelicula.component.html',
  styles: []
})
export class BuscarPeliculaComponent implements OnInit {

  buscador:string = "";
  peliculas:any[] = [];

  constructor( public _movieService:MovieService,
               public activateRouter:ActivatedRoute ) { 

    this.activateRouter.params.subscribe(parametros =>{
      if(parametros['texto']){
        this.buscador = parametros['texto'];
        this.buscarPelicula();
      }
    });
  
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscador.length == 0){
      return;
    }
    //llamamos al servicio
    this._movieService.searchMovie(this.buscador);
  }

}
