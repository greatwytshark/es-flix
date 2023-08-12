import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults: any = []

  constructor(private apiService: ApiServiceService){}

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  onSubmit(){
    console.log(this.searchForm.value, 'searchForm#');
    this.apiService.searchMovie(this.searchForm.value).subscribe(result =>{
      this.searchResults = result[1];
      console.log(this.searchResults, 'results');
    });
    
  }

}
