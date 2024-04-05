import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";
import { UsersComponent } from "../users/users.component";
import { Table, TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { MessagesComponent } from "../messages/messages.component";
import { MessagesModule } from "../messages/messages.module";
import { UsersModule } from "../users/users.module";
import { UserComponent } from "../users/user/user.component";
import { loginGuard } from "../guards/login.guard";
import { adminGuard } from "../guards/admin.guard";


const adminRoutes: Routes = [
    {
        path:'admin', component: AdminComponent,
        canActivate: [loginGuard, adminGuard]
    },
]

@NgModule({
    declarations: [AdminComponent
],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        RouterModule.forChild(adminRoutes),
        SharedModule,
        TableModule,
        HttpClientModule,
        MessagesModule,
        UsersModule
        
    ],
    exports: [RouterModule, TableModule],
    providers: []
})
export class AdminModule {

}