import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turncate',
  standalone: false,
})
export class PipePipe implements PipeTransform {
  transform(value: string, len:number): unknown {
    const turncateedValue = value.slice(0, len)
    return turncateedValue + "..."
  }
}
