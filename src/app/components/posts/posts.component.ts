import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post, SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  public postSubscription: Subscription;

  constructor(private sharedService: SharedService) { 
    this.posts = [];
    this.postSubscription = this.sharedService.getPosts()
      .subscribe(response => this.posts.push(response));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
