import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app";
import { HeaderComp } from "./header/header";
import { User } from "./user/user";

import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    bootstrap: [App],
    declarations: [App, HeaderComp],
    providers: [provideZonelessChangeDetection(), provideBrowserGlobalErrorListeners()],
    imports: [FormsModule, User, TasksModule, BrowserModule, SharedModule] 
    // User component left as standalone just to show how we import it in "module" style, not in declarations.    
}) 
// BrowserModule contains all pipe modules already, including DatePipe, so no need to import pipes here.
// Note that BrowserModule is to be imported ONLY in root module, not sub-modules.
export class AppModule {}