import { Routes } from '@angular/router';
import { VideosComponent } from './videos/videos'; // Asegúrate de que apunte al archivo correcto de videos

export const routes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: '**', redirectTo: 'videos' }
];