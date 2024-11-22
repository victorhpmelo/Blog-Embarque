import { Component } from '@angular/core';
import { Post } from './post.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postFormControl = new FormControl('', [Validators.required]);

  newPostTitle = '';
  posts: Post[] = [];
  showError = false;

  addPost() {
    if (this.newPostTitle.trim() !== '') {
      const newPost: Post = {
        id: this.posts.length + 1,
        title: this.newPostTitle,
        timestamp: new Date()
      };

      this.posts.push(newPost);
      this.newPostTitle = '';
      this.showError = false; // Reset error message
    } else {
      this.showError = true; // Display error message
    }
  }
  editPost(postId: number) {
    const postToEditIndex = this.posts.findIndex(post => post.id === postId);
  
    if (postToEditIndex !== -1) {
      const postToEdit = { ...this.posts[postToEditIndex] }; // Create a copy
      this.newPostTitle = postToEdit.title; // Set the newPostTitle for editing
  
      // Remove the original post from the array
      this.posts.splice(postToEditIndex, 1);
    }
  } 
  
  deletePost(postId: number) {
    this.posts = this.posts.filter(post => post.id !== postId);
  }
}