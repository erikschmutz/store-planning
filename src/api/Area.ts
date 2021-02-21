export interface Event {
    id: string;
    name: string;
    startWeek?: number;
    endWeek?: number;
    areasId?: string[];
}

interface IArea {
    id: string;
    events: Event[];
}

export class Area {
    static storeSelectedAreas(areasId: string[]) {
        localStorage.setItem('selected-areas', JSON.stringify(areasId));
    }

    static getSelectedAreas(): string[] | null {
        const areas = localStorage.getItem('selected-areas');
        if (areas === null) return null;

        return JSON.parse(areas) as string[];
    }

    static getEvents(): Event[] {
        const events = localStorage.getItem('dates');
        if (events === null) return [];

        return JSON.parse(events) as Event[];
    }

    static addEvent(event: Event): void {
        const dates = this.getEvents();
        localStorage.setItem('dates', JSON.stringify([...dates, event]));
    }

    static deleteEvent(id: string) {
        const dates = this.getEvents();
        localStorage.setItem(
            'dates',
            JSON.stringify([...dates].filter((v) => v.id !== id)),
        );
    }

    static getEventId(): string {
        return Date.now().toString();
    }
}
