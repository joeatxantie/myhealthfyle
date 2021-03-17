import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activatedUser: User | undefined;

  constructor(http: HttpClient) { 
    http.get('api/users').subscribe(
      (res: any) => {
        res['id'] = res['_id']
        res['_id'] = undefined;
        this.activatedUser = res;
      }
    )
  }


}
