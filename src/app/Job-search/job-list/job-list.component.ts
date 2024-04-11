import { Component } from '@angular/core';
import { JobListService } from '../../job-list.service';
import { JobDetails } from '../constant';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
 
  totalJobAvailable: JobDetails[] = [];
  isSelected: boolean = false;
 
  constructor(private service: JobListService,  private router: Router){}

  ngOnInit(): void{
    if (this.service.selectedJobList.length != 0) {
      this.totalJobAvailable = this.service.mockJobList;
    } else {
      this.getListOfJob();
    }
  }


  getListOfJob(){
    this.service.getJobList().subscribe(data=>{
      this.totalJobAvailable = data;    
      this.service.mockJobList = this.totalJobAvailable;
    })
  }

  onFavoriteClick(event: JobDetails) {
    const data = this.totalJobAvailable.filter(item => item.id === event.id);
      if(data[0].isFavorite){
      data[0].isFavorite = false;
    } else {
      data[0].isFavorite = true;
    }
    this.jobSelect(event);   
  }

  jobSelect(event: JobDetails) {
    if(this.service.selectedJobList.length === 0) {
      this.service.selectedJobList.push(event);
      this.service.mockedSelectedJob = this.service.selectedJobList;
      this.service.favoriteJob = this.service.selectedJobList;
    } 
    else {
      for(let i = 0; i < this.service.selectedJobList.length ; i++){
          if(this.service.selectedJobList.find(item => item.id === event.id) === undefined) {
            this.service.mockedSelectedJob.push(event);
            break;
          } else {
            this.service.mockedSelectedJob.forEach((item, index) => {
              if(item.id === event.id) {
                this.service.mockedSelectedJob.splice(index, 1);
              }
            });
            break;
          }
        }
        this.service.selectedJobList = this.service.mockedSelectedJob;
        this.service.favoriteJob = this.service.selectedJobList;
      }
  }

  jobDetail(favoirateJob: JobDetails) {
    this.service.selectedJob = favoirateJob;
    this.router.navigate(['/jobDetails']);
  }
}
