import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculasPares',
})
export class MayusculasParesPipe implements PipeTransform {

  // Daniel -> dAnIeL
  transform(value: string, ...args: unknown[]): string {
    const letras = value.split('')
    return letras.map((letra, index) => index%2==0?letra.toUpperCase():letra.toLowerCase()).join('');
  }

}
