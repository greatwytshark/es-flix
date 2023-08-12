import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  searchMovie(title: any){
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')
      
    return this.http.get('https://api.themoviedb.org/3/search/movie?query=' + title.movieName + '&include_adult=false&language=en-US&page=1', { headers }).pipe(map((res: any) => Object.values(res)));
  }

  getTrending(){
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/trending/all/day', { headers }).pipe(map((res: any) =>Object.values(res)))
  }

  getPosterMovies() {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/trending/movie/day', { headers }).pipe(map((res: any) => Object.values(res)))
  }

  getMovieDetails(movieId: any) {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId, { headers })//.pipe(map((res: any) => Object.values(res)))
  }

  getCast(movieId: any) {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/credits', { headers }).pipe(map((res: any) => Object.values(res)))
  }

  getVideo(movieId: any) {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos', { headers }).pipe(map((res: any) => Object.values(res)))
  }

  getUpcoming() {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', { headers }).pipe(map((res: any) => Object.values(res)))
  }

  getTopRated() {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiYTkyZTdmYzQ5OTAxMTRjOTY4N2ViYzM1YTc2MCIsInN1YiI6IjY0YzU3NDYwNjNhNjk1MDEzZDZlODlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hx1YBaC5U47hrJj2Q-kYFYZrALyfbRBnj2iAJfTP6e0')

    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', { headers }).pipe(map((res: any) => Object.values(res)))
  }
}


