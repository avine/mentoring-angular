import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
  pure: false,
})
export class SortListPipe implements PipeTransform {
  transform(value: string[] | null | undefined, suffix = ''): string[] {
    return value ? [...value].map((v) => v + suffix).sort() : [];
  }
}
