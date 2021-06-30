import { Component, OnInit } from '@angular/core';
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

  constructor(private sharedService: SharedService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.postSubscription = this.sharedService.getPosts().subscribe(response => this.postsCount++);
  }

  // Open Modal
  create() {
    this.modalService.open();
  }

  ngOnDestroy() {
    this.postSubscription?.unsubscribe();
  }

}
