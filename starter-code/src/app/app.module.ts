import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CinemaService } from './cinema.service';
import { MyHomeComponent } from './my-home-component/my-home.component';
import { MyMovieComponent } from './my-movie-component/my-movie.component';
import {routes} from './routes';


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
