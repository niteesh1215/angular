import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',//tag-name
  //selector: '[app-servers]',//attribute
  selector: '.app-servers',//class-name
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName: String = '';
  allowNewServer: boolean = false;
  serverCreationStatus:String = "No server was created";
  

    constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000);
  }

   onCreateServer(){
     this.serverCreationStatus = "server was created" + this.serverName;
   }
 
   onUpdateServer(event:any){
    this.serverName =(<HTMLInputElement> event.target).value;
   }

   

  ngOnInit(): void { 
  }

}
