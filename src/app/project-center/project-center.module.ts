import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectCenterComponent } from './project-center.component';
import { ProjectService } from './project.service';

@NgModule ({
    imports: [SharedModule,
    RouterModule.forChild([
            {
                path: 'projects',
                component: ProjectCenterComponent
            }
        ])
    ],
    declarations: [ProjectCenterComponent],
    providers: [ProjectService],
    exports: [ProjectCenterComponent]
})
export class ProjectCenterModule { }