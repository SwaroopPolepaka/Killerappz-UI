import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppConfig } from './app.config';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import {ConnectionService} from './services/connection.service';
import {StatsService} from './services/stats.service';
import {AppComponent} from './app.component';
// Import containers
import {FullLayoutComponent, SimpleLayoutComponent} from './containers';
// Import components
import {
  APP_SIDEBAR_NAV,
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent
} from './components';
// Import directives
import {AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES} from './directives';
// Import routing module
import {AppRoutingModule} from './app.routing';
// Import 3rd party components
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule, PaginationModule, ModalDirective} from 'ngx-bootstrap';
import {TabsModule} from 'ngx-bootstrap/tabs';


const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]


const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]


const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    ArchwizardModule,
    AppRoutingModule,
    ChartsModule,
    PaginationModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    APP_COMPONENTS,
    APP_DIRECTIVES,
    
  ],
  providers: [AppConfig,
    HttpClient,
    ConnectionService,
    StatsService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
