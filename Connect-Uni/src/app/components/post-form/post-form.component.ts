import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() postAdded = new EventEmitter<Post>();
  @Output() postUpdated = new EventEmitter<Post>();

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const title = this.postForm.get('title')?.value || '';

      const post: Post = {
        id: Math.random(),
        title,
        timestamp: new Date(),
      }
    }
  }
}