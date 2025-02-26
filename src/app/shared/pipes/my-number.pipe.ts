import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNumberPipe',
  standalone: true,
})
export class MyNumberPipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return value.toLocaleString('de-DE');
  }
}
