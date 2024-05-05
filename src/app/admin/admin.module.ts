import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";
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
        RouterModule.forChild(adminRoutes),
        SharedModule,
        HttpClientModule,
        MessagesModule,
        UsersModule,
        UrlsModule
    ],
    exports: [],
    providers: []
})
export class AdminModule {

}