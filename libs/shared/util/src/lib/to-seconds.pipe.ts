import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { secondsToMinutes, secondsToMilliseconds } from 'date-fns';

@Pipe({
  name: 'toSeconds',
})
export class ToSecondsPipe implements PipeTransform {
  transform(time: number) {
    if (time > 60) {
      return `${secondsToMinutes(time)}m ${Math.floor(time % 60)}s`;
    } else if (time < 1) {
      return `${secondsToMilliseconds(time).toFixed(2)}ms`;
    } else {
      return `${time.toFixed(2)}s`;
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ToSecondsPipe],
  exports: [ToSecondsPipe],
})
export class ToSecondsPipeModule {}
