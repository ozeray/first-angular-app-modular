import { NgModule } from "@angular/core";

import { Task } from "./task/task";
import { Tasks } from "./tasks";
import { NewTask } from "./new-task/new-task";

import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [Tasks, Task],
    imports: [NewTask, SharedModule, CommonModule], // NewTask component is left as standalone just to show how can import FormsModule in a standalone component..
    exports: [Tasks] // Only Tasks component is imported in AppModule components (App, User, Header), so exporting Tasks is enough.
    // CommonModule is imported for commonly used components, pipes, etc. DatePipe in this case.
})
export class TasksModule {}