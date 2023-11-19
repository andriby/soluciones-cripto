import { Routes } from '@angular/router';
import { ConfigurarComponent } from 'src/app/pages/configurar/configurar.component';
import { BuscadorComponent } from 'src/app/pages/generico/buscador/buscador.component';
import { PerfilComponent } from 'src/app/pages/generico/perfil/perfil.component';
import { ReportesComponent } from 'src/app/pages/reportes/reportes.component';

import { StakingComponent } from 'src/app/pages/servicios/staking/staking.component';
import { GridComponent } from 'src/app/pages/servicios/grid/grid.component';
import { CriptoBolsoComponent } from 'src/app/pages/servicios/cripto-bolso/cripto-bolso.component';
import { PlanDeCarreraComponent } from 'src/app/pages/servicios/plan-de-carrera/plan-de-carrera.component';

import { ReferidosComponent } from 'src/app/pages/servicios/referidos/referidos/referidos.component';
import { ReferirComponent } from 'src/app/pages/servicios/referidos/referir/referir.component';
import { BonosComponent } from 'src/app/pages/bonos/bonos.component';

import { PagoComponent } from 'src/app/pages/trade/pago/pago.component';
import { RetiroComponent } from 'src/app/pages/trade/retiro/retiro.component';


import { AuthGuardGuard } from 'src/app/services/seguridad/auth-guard.guard';

import { PrincipalComponent } from '../../pages/principal/principal.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'principal',
        component: PrincipalComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'buscador',
        component: BuscadorComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'configurar',
        component: ConfigurarComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'reportes',
        component: ReportesComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'staking',
        component: StakingComponent,
         canActivate: [AuthGuardGuard]
    }, {
        path: 'grid',
        component: GridComponent,
         canActivate: [AuthGuardGuard]
    }, {
        path: 'cripto bolso',
        component: CriptoBolsoComponent,
         canActivate: [AuthGuardGuard]
    }, {
        path: 'plan-de-carrera',
        component: PlanDeCarreraComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'referidos',
        component: ReferidosComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'referir',
        component: ReferirComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'bonos',
        component: BonosComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'pago',
        component: PagoComponent,
        canActivate: [AuthGuardGuard]
    },{
        path: 'retiro',
        component: RetiroComponent,
        canActivate: [AuthGuardGuard]
    },


];
