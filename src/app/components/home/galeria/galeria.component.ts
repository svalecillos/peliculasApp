import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

  //Recibimos informacion de peliculas desde donde llamamos este componente
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit() {
  }

}
