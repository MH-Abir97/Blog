import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollNavDirective } from './scroll-nav.directive';
import { FooterComponent } from './footer/footer.component';
import { CodeBlogComponent } from './code-blog/code-blog.component';
import { HomeComponent } from './home/home.component';
import { provideFirebaseApp,getApp,initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore  } from "@angular/fire/firestore";
import { enviorment } from 'src/enviorment/enviorment';
import { DocuymentUploadComponent } from './docuyment-upload/docuyment-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScrollNavDirective,
    FooterComponent,
    CodeBlogComponent,
    HomeComponent,
    DocuymentUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(enviorment.firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
