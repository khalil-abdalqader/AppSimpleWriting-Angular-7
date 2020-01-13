import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNowServer = false;
  ServerCreationStatus = 'No Server was Created!';
  total = 0;
  yesOrNo="Normal Status";
  nameServer="";
  temp="";
  TrueFalse=false;
  serves=['Test1','Test2'];
  nowClick() {
    if (this.allowNowServer) {
      return 'Click here';
    } else {
      return 'Not click';
    }
  }
  constructor() {
    setTimeout(() => {
      this.allowNowServer = true;
    }, 2000);


  }

  ngOnInit() {
  }

    onCreateServer() {
      this.TrueFalse=true;
      this.serves.push(this.nameServer);
      
      
      this.ServerCreationStatus = 'Server was created ';
      this.ServerCreationStatus = 'Server was created '+this.nameServer;
      setTimeout(() => {
        this.ServerCreationStatus = 'Done';
      }, 500 );
      this.total++;
    }

  onUpdateServerName(event: Event){
    this.nameServer=(<HTMLInputElement>event.target).value;
    //this is writing now
    if(this.nameServer=="")
        this.yesOrNo="Normal Status";
      else
    this.yesOrNo= "is writing now...";
      this.temp=this.nameServer
      setTimeout(()=>{
        if(this.temp==this.nameServer)
          this.yesOrNo="Normal Status";
      }, 2000)
  }
}
