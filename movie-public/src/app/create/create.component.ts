import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MovieServiceService]
})
export class CreateComponent implements OnInit {

  public newMovie: Movie = {
    _id:'',
    title:'',
    writer:'',
    rating:0,
    date:new Date,
    production:''
  };

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
  }

  public createNewMovie(newMovie: Movie): void{
    this.movieService.createMovie(newMovie);
  }

}
