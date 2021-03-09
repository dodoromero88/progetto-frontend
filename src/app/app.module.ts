import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { InfoComponent } from './info/info.component';
import { UtenteService } from './service/utente.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { IsLoggedGuard } from './guard/is-logged.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from "@angular/platform-browser";
import { IgxDatePickerModule, IgxDateTimeEditorModule, IgxInputGroupModule, IgxTextSelectionModule } from "igniteui-angular";
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PrenotazioneService } from './service/prenotazione.service';
import { DataService } from './service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PrenotazioneComponent,
    InfoComponent,
    ProfileComponent,
    SignupComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxDatePickerModule,
    HammerModule,
    IgxInputGroupModule,
  	IgxDateTimeEditorModule,
	  IgxTextSelectionModule
  ],
  providers: [UtenteService, IsLoggedGuard,PrenotazioneService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
