import { Injectable } from '@angular/core';
import { Post } from '../components/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user';

  constructor() { }

  async setUsername(username: string): Promise<void> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      data.username = username;

      await fetch(this.apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Error setting username:', error);
    }
  }

  async getUsername(): Promise<string> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      return data.username;
    } catch (error) {
      console.error('Error fetching username:', error);
      return '';
    }
  }

  async addPost(post: Post): Promise<void> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      const posts = data.posts || [];
      posts.push(post);

      await fetch(this.apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, posts })
      });
    } catch (error) {
      console.error('Error adding post:', error);
    }
  }

  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      return data.posts || [];
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  async deletePost(postId: number): Promise<void> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      const posts: Post[] = data.posts || [];
      const updatedPosts = posts.filter((post: Post) => post.id !== postId);

      await fetch(this.apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, posts: updatedPosts })
      });
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
}