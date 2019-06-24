import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //image.tmdb.org/t/p/w300 -> imagenes
  private apiKey:string = "d9b1c10ea2c566fca0604d5ae56f3e81";
  private urlMovieDb:string ="https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor( private http:HttpClient) { }

  getMoviesCartelera(){

    let fechaDesde = new Date();
    let fechaHasta = new Date();

    fechaHasta.setDate( fechaHasta.getDate() + 7);//Le agregamos a la fecha actual 7 dias.

    let desdeStr = `${ fechaDesde.getFullYear()}-${ fechaDesde.getMonth()+1}-${ fechaDesde.getDate() }`;
    let hastaStr = `${ fechaHasta.getFullYear()}-${ fechaHasta.getMonth()+1}-${ fechaHasta.getDate() }`;


    let api = `${ this.urlMovieDb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apiKey }&language=es`;
    return this.http.get( api );
  }

  getMoviesKids(){
    let api = `${ this.urlMovieDb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;
    return this.http.get( api );
  }

  getMoviesPopulares(){
    let api = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;
    return this.http.get( api );
  }

  searchMovie( text:string ){
    let api = `${ this.urlMovieDb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;
    this.http.get( api )
              .subscribe((data:any) => {
                            this.peliculas = data.results;
                            return this.peliculas;
                        });
  }

  getMovie( id:string ){
    let api = `${ this.urlMovieDb }/movie/${ id }?&api_key=${ this.apiKey }&language=es`;
    return this.http.get( api );
  }
}
