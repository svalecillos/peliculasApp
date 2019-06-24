import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mostrar-pelicula',
  templateUrl: './mostrar-pelicula.component.html',
  styles: []
})
export class MostrarPeliculaComponent implements OnInit {

  pelicula:any;
  regresar:string = "";
  busqueda:string = "";

  constructor(public _movieService:MovieService,
              public activateRouter:ActivatedRoute) { 

                this.activateRouter.params.subscribe(parametros =>{

                  this.regresar = parametros['pagina'];

                  //Si parametro busqueda viene
                  if( parametros['busqueda'] ){
                    this.busqueda = parametros['busqueda'];
                  }

                  this._movieService.getMovie( parametros['id'] )
                                    .subscribe( pelicula =>{
                                      this.pelicula = pelicula;
                                    });
                });
              }

  ngOnInit() {
  }

}
