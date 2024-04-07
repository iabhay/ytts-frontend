import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { MessagesModule } from "../messages/messages.module";
import { UsersModule } from "../users/users.module";
import { loginGuard } from "../guards/login.guard";
import { adminGuard } from "../guards/admin.guard";
import { UrlsModule } from "../urls/urls.module";


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
        UsersModule,
        UrlsModule
    ],
    exports: [RouterModule, TableModule],
    providers: []
})
export class AdminModule {

}