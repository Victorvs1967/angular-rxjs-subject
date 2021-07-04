import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService, ModalState } from 'src/app/services/modal.service';
import { Post, SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  display: ModalState;

  constructor(private sharedService: SharedService, private modalService: ModalService, private formBuilder: FormBuilder, private router: Router) { 

    this.display = 'close';

    this.postForm = this.formBuilder.group({
      name: [null, { validators: [Validators.required], updateOn: 'change' }],
      post: [null, { validators: [Validators.required], updateOn: 'change' }]
    });

  }

  ngOnInit(): void {
    this.display = 'open';
  }

  onSubmit() {
    const post: Post = {
      name: this.postForm.controls.name.value,
      post: this.postForm.controls.post.value
    }
    this.sharedService.setPost(post);
    this.router.navigateByUrl('posts');
    this.close();
  }

  close() {
    this.display = 'close';
    this.postForm.reset();
    this.modalService.close();
  }

}
