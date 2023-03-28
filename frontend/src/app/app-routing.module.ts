import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {  
    path: '',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
  },
  {
    path: 'users/register',
    loadChildren: () => import('./pages/users/users.module').then(m=>m.UsersPageModule)
  },

  {
    path: 'users/login',
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginPageModule)
  },  
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

  },
  {
    path: 'Details/:id',
    loadChildren: () => import('./pages/detalles-analitica/detalles-analitica.module').then( m => m.DetallesAnaliticaPageModule)
  },
  {
    path: 'seccion-fisica',
    loadChildren: () => import('./pages/seccion-fisica/seccion-fisica.module').then( m => m.SeccionFisicaPageModule)

  },
  {
    path: 'analytics',
    loadChildren: () => import('./pages/analiticas/analiticas.module').then( m => m.AnaliticasPageModule)

  },
  {
    path: 'Diario Emocional',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'nueva-entrada-fisica',
    loadChildren: () => import('./pages/nueva-entrada-fisica/nueva-entrada-fisica.module').then( m => m.NuevaEntradaFisicaPageModule)
  },
 


  {
    path: 'nueva-entrada-mental',
    loadChildren: () => import('./pages/nueva-entrada-mental/nueva-entrada-mental.module').then( m => m.NuevaEntradaMentalPageModule)
  },
  {
    path: 'añadir-detalles-analiticas',
    loadChildren: () => import('./pages/añadir-detalles-analiticas/añadir-detalles-analiticas.module').then( m => m.AñadirDetallesAnaliticasPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modificar-analitica',
    loadChildren: () => import('./pages/modificar-analitica/modificar-analitica.module').then( m => m.ModificarAnaliticaPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
