import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  posts: Post[];

  isEdit: boolean = false;
  isShowingPosts: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = "John Doe";
    this.age = 50;
    this.email = "john@gmail.com"
    this.address = {
      street: 'Lincoln Rd',
      city: 'NYC',
      state: 'NY'
    }
    this.hobbies = ['play guitar', 'play piano', 'play violin'];

    this.dataService.getPosts().subscribe((posts) => {

        this.posts = posts;

    });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  togglePosts() {
    this.isShowingPosts = !this.isShowingPosts;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(hobby: string) {

    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

}


interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}