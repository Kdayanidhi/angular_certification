import { Component } from '@angular/core';
import { JobListService } from '../../job-list.service';
import { Router } from '@angular/router';
import { JobDesciption } from '../constant';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  constructor(private service: JobListService, private router: Router, private http: HttpClient){}
  jobDetails! :JobDesciption;

  ngOnInit(): void {
    const id = this.service.selectedJob.id;
    this.getJobDetails(id);
  }

  goBack() {
    this.router.navigate(['/jobLists']);
  }

  getJobDetails(id: number) {  
     this.service.getJObDetails(id).subscribe((data => {
      this.jobDetails = data;
    }))
  }

}
