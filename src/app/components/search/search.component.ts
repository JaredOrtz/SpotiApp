import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

	artists:any[] = [];
	loading:boolean;
	
	constructor(private spotify:SpotifyService) {}
	search(finished:string){
		// console.log(finished);
		this.loading = true;
		this.spotify.getArtists(finished).subscribe((response:any) =>{
			this.artists = response;
			this.loading = false;
			// console.log(response);	
		})
	}
}
