import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  isResetButtonEnabled : boolean = false;
  username: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    if((<HTMLInputElement>event.target).value.length == 0){
      this.isResetButtonEnabled =false;
    }else{
      
    }
  }

}
