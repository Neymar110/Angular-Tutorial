import { Directive, OnInit } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector:'[isNegative]',
    providers:[
        {provide : NG_VALIDATORS, useExisting : ProductValidatorDirective, multi : true}
    ]
})
export class ProductValidatorDirective implements Validator{
    validate(control:AbstractControl): ValidationErrors | null{ 
        if (!isNaN(control.value)) {
            let num = parseFloat(control.value)
            if (num >= 0) {
                return null
            }
            else {
                return { "isNegative": true}
            }
        }
        return null
    }
}