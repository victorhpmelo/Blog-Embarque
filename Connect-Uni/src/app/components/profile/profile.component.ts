import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MenuComponent } from '../menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [
      CommonModule,
      MenuComponent,
      MatCardModule,
      MatLabel
      ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  usernames: string[] = [];
  postCount: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile() {
    try {
      const username = await this.userService.getUsername();
      this.usernames = [username];
      const posts = await this.userService.getPosts();
      this.postCount = posts.length;
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  }
}