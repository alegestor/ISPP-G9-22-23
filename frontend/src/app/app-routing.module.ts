import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

  },
  {
    path: 'detalles-analitica',
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

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}