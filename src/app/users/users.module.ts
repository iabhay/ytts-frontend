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
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from 'primeng/toolbar'; 
import { ConfirmationService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";

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
        RouterModule.forChild(userRoutes),
        ToastModule,
        ToolbarModule,
        DialogModule,
        ButtonModule

    ],
    exports: [RouterModule, UserComponent, TableModule, ToastModule, ToolbarModule, DialogModule],
    providers: [ConfirmationService],
})
export class UsersModule {

}