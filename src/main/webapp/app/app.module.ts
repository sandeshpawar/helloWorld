import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { HelloWorldSharedModule, UserRouteAccessService } from './shared';
import { HelloWorldAppRoutingModule} from './app-routing.module';
import { HelloWorldHomeModule } from './home/home.module';
import { HelloWorldAdminModule } from './admin/admin.module';
import { HelloWorldAccountModule } from './account/account.module';
import { HelloWorldEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        HelloWorldAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        HelloWorldSharedModule,
        HelloWorldHomeModule,
        HelloWorldAdminModule,
        HelloWorldAccountModule,
        HelloWorldEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class HelloWorldAppModule {}
