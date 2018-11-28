import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
	
	newSongs: any[] = [];
	loading:boolean;
	messageError: string;
	error:boolean;
	
	constructor(private spotify:SpotifyService) {
		this.loading = true;
		this.error = false;
		this.spotify.getNewReleases().subscribe((response:any) =>{
			this.newSongs = response;
			this.loading = false;
		}, (errorService) =>{
			this.loading = false;
			this.error = true;
			this.messageError = errorService.error.error.message;
		})
	}

}
