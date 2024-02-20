import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService{
    jobs: Job[] = [
        {
          id: 1,
          workForm: 'Full-time',
          title: 'Software Engineer',
          desc: 'Developing web applications using Angular and Node.js.',
          datePost: new Date('2024-02-20'),
        },
        {
          id: 2,
          workForm: 'Part-time',
          title: 'Graphic Designer',
          desc: 'Creating visual concepts for various projects.',
          datePost: new Date('2024-02-21'),
        },
        {
          id: 3,
          workForm: 'Contract',
          title: 'Marketing Specialist',
          desc: 'Developing marketing campaigns and strategies.',
          datePost: new Date('2024-02-22'),
        },
    ];

    getJobs():Job[]{
        return this.jobs;
    }

    getJobDetail(id: number):Job | undefined{
        return this.jobs.find(job => job.id === id);
    }
}
