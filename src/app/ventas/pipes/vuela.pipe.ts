import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {

    transform(value: Boolean): string {

        return (value) ? 'vuela' : 'no Vuela';
    }
}