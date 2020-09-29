// import { Directive } from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';

export function jdyxPasswordValidator(): ValidatorFn {
  const nameRe = /^(?:(?=.*[a-zA-Z])(?=.*[\d])|(?=.*[!#+,.\\=:=@-])(?=.*[\d])|(?=.*[!#+,.\\=:=@-])(?=.*[a-zA-Z])).+$/g;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const controlValue: string = control.value;
    const forbidden = nameRe.test(control.value);
    const forbidden2 = controlValue.match(nameRe);
    return !forbidden ? {'jdyxPasswordValidator': {value: control.value}} : null;
  };
}


export function jdyxMobileValidator(): ValidatorFn {
  const nameRe = /^((\(\d{2,3}\))|(\d{3}\-))?(13|14|15|18)\d{9}$/;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const controlValue: string = control.value;
    const forbidden = nameRe.test(control.value);
    const forbidden2 = controlValue.match(nameRe);
    return !forbidden ? {'jdyxMobileValidator': {value: control.value}} : null;
  };
}


// @Directive({
//   selector: '[appJdyxPasswordValidator]'
// })
// export class JdyxPasswordValidatorDirective {
//
//   constructor() { }
//
// }
