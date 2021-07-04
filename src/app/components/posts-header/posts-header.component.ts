import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts-header',
  templateUrl: './posts-header.component.html',
  styleUrls: ['./posts-header.component.scss']
})
export class PostsHeaderComponent implements OnInit {

  public postsCount = 0;
  public postSubscription?: Subscription;

  constructor(private sharedService: SharedService, private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.postSubscription = this.sharedService.getPosts().subscribe(() => this.postsCount++);
  }

  // Open Modal
  create() {
    this.router.navigateByUrl('post');
  }

  ngOnDestroy() {
    this.postSubscription?.unsubscribe();
  }

}
