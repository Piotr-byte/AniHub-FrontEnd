import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumTextValue',
  standalone: true
})
export class EnumTextValuePipe implements PipeTransform {

  insertSpaces(value: string): string {
    if (value) {
      const exceptions = ['TV', 'OVA', 'ONA'];
      if (exceptions.includes(value)) {
        return value;
      }


      return value.replace(/([A-Z])/g, ' $1').trim();
    }
    return '';
  }


  transform(value: number, enumName: Record<number, string>): string {
    const enumValue = enumName[value];
    return this.insertSpaces(enumValue);
  }

}
