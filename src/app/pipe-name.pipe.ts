import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecount'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      return "available"
    }
    else {
      return "not available";
    }

  }
}