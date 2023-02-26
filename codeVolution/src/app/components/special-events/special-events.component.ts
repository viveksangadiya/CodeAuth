import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
   constructor(private eventsService:EventsService){}

   specialEvents=[]
   ngOnInit(): void {
       this.eventsService.getSpecialEvents().subscribe(
        res=>{console.log(res)},
        err=>{console.log(err)}
       )
   }

}
