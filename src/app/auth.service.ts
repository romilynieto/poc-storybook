import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { UserInterface } from './user.interface';
import { Observable, from } from 'rxjs';
import { signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  currentUserSig = signal<UserInterface | undefined | null>(undefined);
  user$ = user(this.firebaseAuth);

  register(
    email: string,
    username: string,
    password: string,
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then((response) =>
      updateProfile(response.user, { displayName: 'username' }),
    );

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth, 
      email, 
      password
      ).then(() => {});
    return from(promise);

  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    console.log('logout');
    return from(promise);
  }

}