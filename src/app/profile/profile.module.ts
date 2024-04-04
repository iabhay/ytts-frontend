import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile.component";
import { RoleComponent } from "./role-change/role.component";

const profileRoutes: Routes=[
    {path: 'profile', component: ProfileComponent,
    children: [
        {path: 'role-change', component: RoleComponent}
    ]}
]

@NgModule({
    declarations: [ProfileComponent
],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        RouterModule.forChild(profileRoutes),
        SharedModule
        
    ],
    exports: [RouterModule],
    providers: []
})
export class ProfileModule {

}