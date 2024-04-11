import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobDesciption, JobDetails } from './Job-search/constant';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  selectedJobList: JobDetails[] = [];
  mockedSelectedJob : JobDetails[] = [];
  selectedJob!: JobDetails;
  favoriteJob: JobDetails[] = [];
  mockJobList: JobDetails[] = [];

  constructor(private http: HttpClient) { }

  getJobList(){
    const url = '/jobs'
    return this.http.get<JobDetails[]>(url);
  }

  getJObDetails(id:number){
    const url = `${'/jobs'}/${id}`;
    return this.http.get<JobDesciption>(url)
  }
}
