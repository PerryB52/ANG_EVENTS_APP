import { Component } from '@angular/core';
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a {cursor: pointer}
    `]
})
export class EventDetailsComponent {

    event: IEvent
    addMode: boolean
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false
        })
    }

    addSession() {
        this.addMode = true //am ramas la min 2:25
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.saveEvent(this.event) //saveEvent also updates in server implementation
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}