import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService, ModalState } from 'src/app/services/modal.service';
import { Post, SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  display$: Observable<ModalState>;
  public postForm: FormGroup;

  constructor(private sharedService: SharedService, private modalService: ModalService, private router: Router) { 

    this.display$ = this.modalService.watch();

    this.postForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      post: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const post: Post = {
      name: this.postForm.get('name')?.value,
      post: this.postForm.get('post')?.value
    }
    this.sharedService.setPost(post);
    this.postForm.reset();
    this.close();
  }

  close() {
    this.modalService.close();
  }

}
