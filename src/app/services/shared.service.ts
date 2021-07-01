import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type Post = {
  name: string,
  post: string
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public posts = new Subject<Post>();

  setPost(post: Post) {
    this.posts.next(post);
  }

  getPosts(): Observable<Post> {
    return this.posts;
  }

}
