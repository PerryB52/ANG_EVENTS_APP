//used to create a token used for the depency injection registry in order to find the instance of the service that we want(toastr)
import { InjectionToken } from '@angular/core'

export let JQ_TOKEN = new InjectionToken<Object>('jQuery')
