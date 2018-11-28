import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	
	constructor(private http:HttpClient) {
		console.log("Spotify Service Ready");
	}
	
	getQuery(query:string){
		const url = `https://api.spotify.com/v1/${ query }`;
		
		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQC68HLsoIQQQQor-hQk20mu8JMATtCMkwCLqCFkU66PCclid29XB3cihwJ5iTOR1c-HAi03Lm2dMHzDxdk'	
		});
		return this.http.get(url, {headers});
	}
	
	getNewReleases(){
		return this.getQuery('browse/new-releases')
					.pipe( map(reponse => reponse['albums'].items ));
	}
	getArtists(finished:string){
		return this.getQuery(`search?q=${ finished }&type=artist&limit=15`)
					.pipe( map(response => response['artists'].items ));
	}
	getArtist(id:string){
		return this.getQuery(`artists/${id}`);
					//.pipe( map(response => response['artists'].items ));
	}
	getTopTracks(id:string){
		return this.getQuery(`artists/${id}/top-tracks?country=us`)
					.pipe( map(response => response['tracks'] ));
	}
}
