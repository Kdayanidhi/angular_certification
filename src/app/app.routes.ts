import { Routes } from '@angular/router';
import { JobListComponent } from './Job-search/job-list/job-list.component';
import { FavoriteJobListComponent } from './Job-search/favorite-job-list/favorite-job-list.component';
import { JobDetailsComponent } from './Job-search/job-details/job-details.component';

export const routes: Routes = [

    {path: "", component: JobListComponent},
    {path: "jobLists", component: JobListComponent},
    {path: "favoritesJob", component: FavoriteJobListComponent},
    {path: "jobDetails", component: JobDetailsComponent}
];
