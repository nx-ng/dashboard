import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform<T>(
    arrayToSort: T[],
    fieldToSortBy: keyof T,
    direction: 'asc' | 'desc' = 'asc'
  ): T[] {
    return arrayToSort.sort((a, b) => {
      if (a[fieldToSortBy] < b[fieldToSortBy]) {
        return direction === 'asc' ? 1 : -1;
      } else if (a[fieldToSortBy] > b[fieldToSortBy]) {
        return direction === 'desc' ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SortByPipe],
  exports: [SortByPipe],
})
export class SortByPipeModule {}
