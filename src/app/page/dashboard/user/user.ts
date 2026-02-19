import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit{
private cdr = inject(ChangeDetectorRef)
private userService = inject(UserService);
public users: any[] = [];

ngOnInit(): void {
  this.loadUsers();
}
loadUsers(){
  this.userService.getUsers().subscribe({
    next:(data)=>{
      this.users =data;
      console.log('Data recived', this.users)
      this.cdr.detectChanges();
    }
  })
}
}
