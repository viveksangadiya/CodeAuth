import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    constructor(private eventsService:EventsService){}

    events=[]
    ngOnInit(): void {
        this.eventsService.getEvents().subscribe(
          res=>{console.log(res)},
          err=>{console.log(err)}
        )
    }

}
