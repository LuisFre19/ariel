import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class TopArtistsComponent {
  dataService = inject(DataService);
  artists = this.dataService.artists;
}
