import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MostrarPeliculaComponent } from './components/mostrar-pelicula/mostrar-pelicula.component';
import { BuscarPeliculaComponent } from './components/buscar-pelicula/buscar-pelicula.component'

const ROUTES: Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'movie/:id', component:MostrarPeliculaComponent },
    { path: 'movie/:id/:pagina', component:MostrarPeliculaComponent },
    { path: 'movie/:id/:pagina/:busqueda', component:MostrarPeliculaComponent },
    { path: 'buscar', component:BuscarPeliculaComponent },
    { path: 'buscar/:texto', component:BuscarPeliculaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }, //->Cualquier otra ruta redireciona al home
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const app_routing = RouterModule.forRoot(ROUTES);