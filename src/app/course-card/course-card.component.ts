import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input()
  index: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Card component - button clicked ... ");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    // if (this.course.category == "BEGINNER") {
    //   return "beginner";
    // }

    return {
      beginner: this.course.category == "BEGINNER",
    };
  }
}
