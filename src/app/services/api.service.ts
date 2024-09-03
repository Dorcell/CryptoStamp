import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserDTO, UserRow } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private  http : HttpClient) { }

  getData(): Observable<UserRow[]> {
    return this.http.get<UserDTO[]>("http://localhost:3000/data")
      .pipe(
        map(
          (res: UserDTO[]) => res.map((user: UserDTO) => ({
            id: user.id,
            isActive: user.isActive,
            balance: user.balance,
            picture: user.picture,
            age: user.age,
            firstName: user.name?.first ?? '',
            lastName: user.name?.last ?? '',
            company: user.company,
            email: user.email,
            address: user.address,
            tags: user.tags,
            favoriteFruit: user.favoriteFruit,
          }))
        ));
  }
}
