import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  postForm: FormGroup;

  constructor(private sharedService: SharedService, private modalService: ModalService, private formBuilder: FormBuilder, private router: Router) { 
    this.display$ = this.modalService.watch();

    this.postForm = this.formBuilder.group({
      name: [null, { validators: [Validators.required], updateOn: 'change' }],
      post: [null, { validators: [Validators.required], updateOn: 'change' }]
    });

  }

  ngOnInit(): void { 
  }

  onSubmit() {
    const post: Post = {
      name: this.postForm.controls.name.value,
      post: this.postForm.controls.post.value
    }
    this.sharedService.setPost(post);
    this.close();
  }

  close() {
    this.postForm.reset();
    this.modalService.close();
  }

}
