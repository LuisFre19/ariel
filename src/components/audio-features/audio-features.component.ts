import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-audio-features',
  templateUrl: './audio-features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioFeaturesComponent {
  dataService = inject(DataService);
  audioFeatures = this.dataService.audioFeatures;

  // Convert signal of object to signal of array for @for loop
  featuresAsArray = computed(() => {
    const features = this.audioFeatures();
    if (!features) {
      return [];
    }
    return Object.entries(features).map(([key, value]) => ({ key, value }));
  });

  getBarWidth(value: number): string {
    return (value * 100) + '%';
  }
}
