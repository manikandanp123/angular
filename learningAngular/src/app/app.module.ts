import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResComponent } from './add-res/add-res.component';
import { UpdateResComponent } from './update-res/update-res.component';
import { ListResComponent } from './list-res/list-res.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './passing/parent/parent.component';
import { ChildComponent } from './passing/child/child.component';
import { CustomDirDirective } from './add-res/custom-dir.directive';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResComponent,
    UpdateResComponent,
    ListResComponent,
    LoginComponent,
    RegisterComponent,
    ParentComponent,
    ChildComponent,
    CustomDirDirective,
    NgcontentComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
