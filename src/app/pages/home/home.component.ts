import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trending!: any;
  banner: any;
  upcoming:any;
  topRated:any;

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void{
    let O;
    this.apiService.getTrending().subscribe((result) =>{

      this.trending  = result[1];
      console.log(this.trending, 'trending');
      console.log(typeof (this.trending));
      
      
    })

    this.posterMovies();
    this.upcomingMovies();
    this.topRatedMovies();
  }

  posterMovies(){
    this.apiService.getPosterMovies().subscribe((val) =>{
      this.banner = val[1];
      console.log(this.banner, 'Banner Images');
      
    })
  }

  upcomingMovies(){
    this.apiService.getUpcoming().subscribe((val) => {
      this.upcoming = val[2];
      console.log(this.upcoming, 'Upcoming Movies');

    })
  }

  topRatedMovies(){
    this.apiService.getTopRated().subscribe((val) => {
      this.topRated = val[1];
      console.log(this.topRated, 'Top Rated Movies');

    })
  }

  slideRight(){
    document.getElementById('rowposter')!.scrollLeft += 500;
  }

  slideRight1() {
    document.getElementById('rowposter1')!.scrollLeft += 500;
  }

  slideRight2() {
    document.getElementById('rowposter2')!.scrollLeft += 500;
  }

  slideLeft() {
    document.getElementById('rowposter')!.scrollLeft -= 500;
  }

  slideLeft1() {
    document.getElementById('rowposter1')!.scrollLeft -= 500;
  }

  slideLeft2() {
    document.getElementById('rowposter2')!.scrollLeft -= 500;
  }

}
