import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters: any[] = [];

  constructor(private rickAndMortyService: ApiService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results.slice(0, 10);
    });
  }
  getCharacterById(id: number): void {
    this.rickAndMortyService.getCharacterById(id).subscribe((character: any) => {
      console.log(character);
    });
  }
}
