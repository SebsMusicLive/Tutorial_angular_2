import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  course?:string;

  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.course = params['course'];
    });
  }
}
