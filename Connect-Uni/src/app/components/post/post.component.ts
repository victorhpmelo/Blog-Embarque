import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  newPostTitle = '';
  posts: Post[] = [];
  showError = false;
  editPostId: number | null = null; // Adicione esta linha

  addPost() {
    if (this.newPostTitle.trim() !== '') {
      if (this.editPostId !== null) {
        // Atualiza o post existente
        const postToEdit = this.posts.find(post => post.id === this.editPostId);
        if (postToEdit) {
          postToEdit.title = this.newPostTitle;
          postToEdit.timestamp = new Date(); // Atualiza o timestamp
        }
        this.editPostId = null; // Reseta o modo de edição
      } else {
        // Cria um novo post
        const newPost: Post = {
          id: this.posts.length + 1,
          title: this.newPostTitle,
          timestamp: new Date()
        };
        this.posts.push(newPost);
      }

      this.newPostTitle = ''; // Reseta o campo de entrada
      this.showError = false; // Oculta mensagem de erro
    } else {
      this.showError = true; // Exibe mensagem de erro
    }
  }

  editPost(postId: number) {
    const postToEdit = this.posts.find(post => post.id === postId);

    if (postToEdit) {
      this.newPostTitle = postToEdit.title; // Preenche o campo de entrada com o título
      this.editPostId = postId; // Define o ID do post em edição
    }
  }

  deletePost(postId: number) {
    this.posts = this.posts.filter(post => post.id !== postId);
  }
}
