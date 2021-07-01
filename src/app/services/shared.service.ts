import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public posts = new Subject<object[]>();

  setPost(post: any) {
    this.posts.next(post);
  }

  getPosts() {
    return this.posts;
  }

}
