import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {


  //component must be public, since Angular only binds to public component properties
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
