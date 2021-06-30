import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  display$: Observable<boolean>;
  public postForm: FormGroup;

  constructor(private sharedService: SharedService, private modalService: ModalService, private router: Router) { 

    this.display$ = this.modalService.watch()

    this.postForm = new FormGroup({
      name: new FormControl(''),
      post: new FormControl('')
    });
  }

  ngOnInit(): void { 
  }

  onSubmit() {
    const post = {
      name: this.postForm?.get('name')?.value,
      post: this.postForm?.get('post')?.value
    }
    this.sharedService.setPost(post);
    this.postForm.reset();
    this.close();
  }

  close() {
    this.modalService.close()
  }

}
