import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component'; // 🔹 Asegúrate de que la ruta del import es correcta

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'labs', component: LabsComponent }, // 🔹 Asegúrate de que el componente es reconocido
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // 🔹 Redirección por defecto
];
