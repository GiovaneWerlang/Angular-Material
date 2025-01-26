import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';


@Component({
    selector: "create-course-step-1",
    templateUrl: "create-course-step-1.component.html",
    styleUrls: ["create-course-step-1.component.scss"],
    standalone: false
})
export class CreateCourseStep1Component {

  SAMPLE_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel cursus elit. Nunc vehicula tincidunt sodales. Mauris id lacus elementum, imperdiet justo sed, dignissim tortor. Vestibulum eget felis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis diam vel ligula vulputate mattis id eget mi. Etiam semper volutpat fringilla. Vivamus id congue dui. Phasellus rutrum mi risus, et efficitur erat iaculis sed. Vivamus porta et leo sit amet mattis. Integer dictum tincidunt gravida. Nunc massa dui, varius ac nibh et, suscipit luctus mauris. Proin venenatis enim in nulla imperdiet, nec tempor justo imperdiet. Nullam vestibulum mattis mattis.";

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [this.SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const date = cellDate.getDate();
    if(view === 'month'){
      return (date === 1) ? 'highlight-date' : "";
    }
    return "";
  }

  constructor(private fb: UntypedFormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
