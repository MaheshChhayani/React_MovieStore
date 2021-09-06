import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[MovieServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private movieService: MovieServiceService, private route: ActivatedRoute) { }

  newMovie: Movie;


  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.movieService.getSingleMovie(params.movieid);
    })).subscribe((newMovie: Movie) => {
      console.log('Selected Movie', newMovie);
      this.newMovie = newMovie;
    });
  }

  public updateNewMovie():void{
    this.movieService.updateMovie(this.newMovie)
    .then((newMovie:Movie)=>{
      this.newMovie=newMovie;
    })
  }

  public deleteMovie(): void{
    this.movieService.deleteMovie(this.newMovie._id);
  }

}
