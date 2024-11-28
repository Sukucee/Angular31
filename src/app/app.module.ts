import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { Act31PRODUCTComponent } from "./act31-product/act31-product.component";

const routes: Routes = [

]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
    ],

    exports: [
        RouterModule
    ],

    declarations: [
        AppComponent,
        Act31PRODUCTComponent
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}