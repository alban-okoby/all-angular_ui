import { HttpHeaders } from "@angular/common/http";


export const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:8099/api/v1',
    headers : new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
}
