import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopTracksComponent } from '../top-tracks/top-tracks.component';
import { TopArtistsComponent } from '../top-artists/top-artists.component';
import { AudioFeaturesComponent } from '../audio-features/audio-features.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TopTracksComponent, TopArtistsComponent, AudioFeaturesComponent]
})
export class DashboardComponent {}
