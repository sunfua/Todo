import { PROJECTS, PERSONNEL } from './fakedata';
import { Project, Person } from './mode';
import { Injectable } from '@angular/core';

@Injectable ()
export class ProjectService {
    getProjects(): Project[] {
        return PROJECTS;
    }
    getPersonnel(): Person[] {
        return PERSONNEL;
    }
}