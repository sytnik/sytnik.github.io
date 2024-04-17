import {Routes} from '@angular/router';
import {PrimaryComponent} from "./primary/primary.component";

export const routes: Routes = [
  {path: '', component: PrimaryComponent, pathMatch: 'full', data: {animation: ''}},
  {
    path: 'technical',
    loadComponent: () => import('./technical/technical.component')
      .then(component => component.TechnicalComponent),
    data: {animation: 'technical'}
  },
  {
    path: 'certifications',
    loadComponent: () => import('./certifications/certifications.component')
      .then(component => component.CertificationsComponent),
    data: {animation: 'certifications'}
  },
  {
    path: 'soft',
    loadComponent: () => import('./soft/soft.component')
      .then(component => component.SoftComponent),
    data: {animation: 'soft'}
  },
  {
    path: 'experience',
    loadComponent: () => import('./experience/experience.component')
      .then(component => component.ExperienceComponent),
    data: {animation: 'experience'}
  },
  {
    path: '404',
    loadComponent: () => import('./not-found/not-found.component')
      .then(component => component.NotFoundComponent),
    data: {animation: '404'}
  },
  {path: '**', redirectTo: '/404', data: {animation: '**'}}
];
