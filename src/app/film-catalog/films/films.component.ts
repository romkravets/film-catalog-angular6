import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
import { Films} from '../../models/Films';

@Component({
  selector: '.films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: object[];

  description: string = 'Middle card description';

  constructor(public filmsService: FilmService) {

  }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    console.log(this.films);
  }
  
}
