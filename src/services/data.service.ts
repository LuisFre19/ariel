import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist, AudioFeatures, SpotifyData, Track } from '../models/data.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  tracks = signal<Track[]>([]);
  artists = signal<Artist[]>([]);
  audioFeatures = signal<AudioFeatures | null>(null);
  loading = signal<boolean>(true);

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    this.loading.set(true);
    this.http.get<SpotifyData>('assets/sample-data.json')
      .pipe(
        tap(data => {
          this.tracks.set(data.tracks);
          this.artists.set(data.artists);
          this.audioFeatures.set(data.audioFeatures);
          this.loading.set(false);
        })
      )
      .subscribe();
  }
}
