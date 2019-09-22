import { Injectable } from '@angular/core';

//this is how we tell about the compiler that we know about toastr and it is an object on the global scope.
declare let toastr: any;

@Injectable()
export class ToastrService {

    success(message: string, title?: string) {
        toastr.success(message, title)
    }

    info(message: string, title?: string) {
        toastr.success(message, title)
    }

    warning(message: string, title?: string) {
        toastr.success(message, title)
    }

    error(message: string, title?: string) {
        toastr.success(message, title)
    }

}