import { Routes } from '@angular/router';
import { LaNostraHistoria } from './la-nostra-historia/la-nostra-historia';
import { ElProducte } from './el-producte/el-producte';
import { Compra } from './compra/compra';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'historia',
        component: LaNostraHistoria
    },
    {
        path: 'producte',
        component: ElProducte
    },
    {
        path: 'compra',
        component: Compra
    },
    {
        path: '',
        component: Home
    }


];
