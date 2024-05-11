import { Injectable, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Post {
  id: string, // Assuming the ID is a string
  body: string,
  imageUrl: string[],
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  post$!: Observable<any[]>;

  constructor(private fire: Firestore) { }

  async getData() {
    const itemCollection = await collection(this.fire, 'notes');
    this.post$ = collectionData(itemCollection);
    this.post$.subscribe((item: any) => {
      console.log('ie', item)
      return item;
    })
  }
}