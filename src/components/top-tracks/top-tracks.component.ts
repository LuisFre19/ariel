import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class TopTracksComponent {
  dataService = inject(DataService);
  tracks = this.dataService.tracks;
}
