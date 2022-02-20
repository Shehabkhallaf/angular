import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeData'
})
export class PipeDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
