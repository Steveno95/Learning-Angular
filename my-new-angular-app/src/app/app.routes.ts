import { Routes } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { AppConfig } from './app.config';

export const routes: Routes = [
	{
	    path: AppConfig.routes.newComponent,
	    component: MyNewComponentComponent
	},
];