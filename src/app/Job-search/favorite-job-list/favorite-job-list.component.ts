import { Component } from '@angular/core';
import { JobListService } from '../../job-list.service';
import { Router } from '@angular/router';
import { JobDetails } from '../constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-job-list.component.html',
  styleUrl: './favorite-job-list.component.css'
})
export class FavoriteJobListComponent {  
  
  favoriteJobList: JobDetails[] = [];
  isFavorite: boolean = false;
  noFaviorateJob: string | undefined;

  constructor(private service: JobListService, private router: Router) {}

  ngOnInit(): void {    
    if(this.service.favoriteJob.length !== 0) {
      this.isFavorite = true;
      this.favoriteJobList = this.service.favoriteJob;
    } else {
      this.isFavorite = false;
      this.noFaviorateJob = 'No Job Selected'
    }
  }

  jobDetail(selectedJob: JobDetails) {
    this.service.selectedJob = selectedJob;
    this.router.navigate(['/jobDetails']);
  }
}
