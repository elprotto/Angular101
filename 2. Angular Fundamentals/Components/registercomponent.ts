//Code below could be found in app.module.ts file
import { CoursesComponent } from "./courses.component";
import { BrowseModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from ".app/component";

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [
    // ..
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
