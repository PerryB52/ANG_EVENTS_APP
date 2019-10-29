//used to create a token used for the depency injection registry in order to find the instance of the service that we want(toastr)
import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr{
    success(msg: string, title?: string): void
    info(msg: string, title?: string): void
    warning(msg: string, title?: string): void
    error(msg: string, title?: string): void
}