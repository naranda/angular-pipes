import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    //en angular 14 se debe indicar los argumentos para trabajar con transform en pipes
    transform(value: string, enMayuscula: boolean = true): string {
        console.log(value);
        return (enMayuscula) ? value.toUpperCase() : value.toLowerCase();

    }

}