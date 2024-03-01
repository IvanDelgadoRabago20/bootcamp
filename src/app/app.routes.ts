import { Routes } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import path from 'path';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProtectoFinalComponent } from './protecto-final/protecto-final.component';

export const routes: Routes = [
    {
        path:'primer-dia',
        component: PrimerDiaComponent
    },
    {
        path:'segundo-dia',
        component: SegundoDiaComponent
    },
    {
        path:'tercer-dia',
        component: TercerDiaComponent
    },
    {
        path:'protecto-final',
        component: ProtectoFinalComponent
    },
    {
        path: '**',
        component: PrimerDiaComponent
    }
    
];
