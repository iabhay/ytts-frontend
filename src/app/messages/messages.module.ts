import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "./messages.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { SharedModule } from "../shared/shared.module";
import { UserMessageComponent } from "./user-message/user-message.component";
import { loginGuard } from "../guards/login.guard";

const messageRoutes: Routes = [
    {
        path: 'admin/manage-messages',canActivate: [loginGuard], component: MessagesComponent,
        children: [

            {path:'user', component: UserMessageComponent},
            {path:'all', component: UserMessageComponent},
            {path:'premium', component: UserMessageComponent},
            {path:'nonpremium', component: UserMessageComponent}
        ]
    }
]

@NgModule({
    declarations: [MessagesComponent,
        UserMessageComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(messageRoutes),
        SharedModule,
        TableModule,
        HttpClientModule
    ],
    exports: [RouterModule, UserMessageComponent, TableModule],
})
export class MessagesModule {

}