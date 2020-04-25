import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private user: string;


  public setUser(username: string): void {
    this.user = username;
  }

  public User(): string {
    return this.user;
  }

  constructor() { }
}
