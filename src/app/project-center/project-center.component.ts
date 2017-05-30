import { Component, OnInit } from '@angular/core';
import { Project, Person } from './mode';
import { ProjectService } from './project.service';
import { ColumnSetting } from './../shared/layout.model';

@Component({
    selector: 'app-project-center',
    templateUrl: './project-center.component.html'
})
export class ProjectCenterComponent implements OnInit{
    title: string ='Project Center';
    projects: Project[];
    people: Person[];
    projectSettings: ColumnSetting[]=[
        {
            primaryKey: 'name',
            header: 'Name'
        },
        {
            primaryKey: 'first_launch',
            header: 'First launch',
            alternativeKeys:['launch', 'first_flight']
        },
        {
            primaryKey: 'cost',
            header: 'Cost',
            format: 'currency',
            alternativeKeys: ['total_cost']
        }
    ];

    personnelSettings: ColumnSetting[] = [
//            {  primaryKey: 'id' },
            {  primaryKey: 'name' },
            {  primaryKey: 'year_joined', header: 'Joined' },
            {  primaryKey: 'missions' },
            {  primaryKey: 'manager'  },
            {  primaryKey: 'crewWith', header: 'Crew mates'}
    ];
    
    constructor(private projectService: ProjectService){}
    ngOnInit(){
        this.projects=this.projectService.getProjects();
        this.people=this.projectService.getPersonnel();
        // console.log(this.projects);
        // console.log(this.people);
    }
}