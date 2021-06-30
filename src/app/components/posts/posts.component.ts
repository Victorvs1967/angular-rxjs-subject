import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: any[] = [];
  public postSubscription?: Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.postSubscription = this.sharedService.getPosts().subscribe(response => {
      this.posts.push(response);
    });
  }

  ngOnDestroy() {
    this.postSubscription?.unsubscribe();
  }

}
