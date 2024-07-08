import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    { path: "app", component: AppComponent },
    { path: "create", component: CreateComponent },
];
