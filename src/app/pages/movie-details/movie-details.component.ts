import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  Details:any;
  Cast:any;
  Trailer:any;
  Vid: any;

  constructor(private apiService: ApiServiceService, private router: ActivatedRoute){}

  ngOnInit(){
    let id = this.router.snapshot.paramMap.get('id');

    this.getDetails(id);
    this.getCast(id);
    this.getVideo(id);
  }

  getDetails(movieId:any){
    
    this.apiService.getMovieDetails(movieId).subscribe((response) =>{
      this.Details = response;
      console.log(this.Details, 'Details');
    });
  }

  getCast(id:any){
    this.apiService.getCast(id).subscribe((val) =>{
      this.Cast = val[1];
      console.log(this.Cast, 'Cast');
      
    })
  }

  getVideo(movieId:any){
    this.apiService.getVideo(movieId).subscribe((result) =>{
      this.Trailer = result[1];
      console.log(this.Trailer, 'Trailer');
      for(let a of this.Trailer){
        if(a.type == 'Trailer'){
          this.Vid = a.key;
        }
      }
      //this.Vid = this.Trailer[this.Trailer.length - 1]
      console.log(this.Vid, 'Key');
      
    })
  }

}
