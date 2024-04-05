import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { UsersComponent } from "./users.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "../shared/shared.module";
import { loginGuard } from "../guards/login.guard";

const userRoutes: Routes = [
    {path: 'admin/manage-users',
    canActivate: [loginGuard],
    component: UsersComponent,
    children: [
        {path:'user', component: UserComponent},
        {path:'all', component: UserComponent},
        {path:'premium', component: UserComponent},
        {path:'nonpremium', component: UserComponent}
    ]
},
]

@NgModule({
    declarations: [UsersComponent, UserComponent
],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule, 
        SharedModule,
        TableModule,
        HttpClientModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule, UserComponent, TableModule],
    providers: [],
})
export class UsersModule {

}