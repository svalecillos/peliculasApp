import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform( pelicula: any, poster:boolean = false ): any {

    let urlImagen = "https://image.tmdb.org/t/p/w500";

    if( poster ){
      return urlImagen + pelicula.backdrop_path;
    }

    if( pelicula.poster_path ){
      return urlImagen + pelicula.poster_path;
    }else{
      if( pelicula.backdrop_path ){
        return urlImagen + pelicula.backdrop_path;
      }else{
        return "assets/img/no-image.png";
      }
    }
  }

}
