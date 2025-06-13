import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { ClubComponent } from './components/club/club.component';
import { RecordsComponent } from './components/records/records.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent}, 
    { 
        path: 'home', 
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },  
            { path: 'index', component: IndexComponent },    
            { path: 'clasf', component: ClasificacionComponent },
            { path: 'clubes', component: ClubesComponent },
            { path: 'club/:id', component: ClubComponent },     
            { path: 'record', component: RecordsComponent },
            { path: 'plantilla/:id', component: PlantillaComponent },  
        ]
    },
    
];
