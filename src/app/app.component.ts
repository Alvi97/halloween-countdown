import { Component, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  value: any;

  //913,081 
  date:any;
  
  secondsNow
  countDownSec
  
  constructor() {}



  ngOnInit() {
    console.log("seconds now ", this.secondsNow)



     setInterval(() => {
      let d = new Date();
      this.secondsNow = d.getTime() / 1000;
      this.countDownSec = (new Date("2020-10-31T00:00:00").getTime() / 1000);
      this.date = this.secondsToString(this.countDownSec - this.secondsNow);
      console.log(this.date , "???????????")

    }, 1000);

  

  }

  secondsToString(seconds) {

    var numdays = Math.floor(seconds / 86400);

    var numhours = Math.floor((seconds % 86400) / 3600);

    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

    var numseconds = ((seconds % 86400) % 3600) % 60;
    
    numseconds = Math.round(numseconds);

    const markup = `<div> <span>${numdays}</span>  </div>`

    const timeValues = {
      numdays:  numdays,
      numhours: numhours,
      numminutes: numminutes,
      numseconds:numseconds
    };

    return timeValues;

  }


}
