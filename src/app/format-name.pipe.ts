import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: { name: string }[]): string {
    return value.map(({ name }) => name).join();
  }

}
