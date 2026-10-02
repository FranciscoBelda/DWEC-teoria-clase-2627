import { Component, signal } from '@angular/core';
import { UserProfile } from '../../../common/interfaces';

@Component({
  imports: [],
  selector: 'app-user-profile-component',
  styleUrl: './user-profile-component.css',
  templateUrl: './user-profile-component.html',
})
export class UserProfileComponent {
  user = signal<UserProfile>({
    name: 'Francisco Belda',
    city: 'Valencia',
    isPremium: false,
  })

  changeCity() {
    this.user.update(miUser => ({
      ...miUser,
      city: 'Madrid',
    }))
  }

  changePremium() {
    this.user.update(miUser => ({
      ...miUser,
      isPremium: !miUser.isPremium,
    }))
  }
}
