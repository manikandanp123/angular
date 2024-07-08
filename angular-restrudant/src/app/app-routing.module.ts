import { AddResComponent } from './add-res/add-res.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListResComponent } from './list-res/list-res.component';
import { UpdateResComponent } from './update-res/update-res.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './passing/parent/parent.component';
import { ChildComponent } from './passing/child/child.component';

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "", component: AddResComponent },
  { path: "update/:id", component: UpdateResComponent },
  { path: "list-res", component: ListResComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
