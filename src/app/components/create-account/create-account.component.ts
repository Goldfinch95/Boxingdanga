import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {

  countries = [
    {name: "Afganistán"},
    {name: "Islas Åland"},
    {name: "Albania"},
    {name: "Argelia"},
    {name: "Samoa Americana"},
    {name: "Andorra"},
    {name: "Angola"},
    {name: "Anguila"},
    {name: "Antártida"},
    {name: "Antigua y Barbuda"},
    {name: "Argentina"},
    {name: "Armenia"},
    {name: "Aruba"},
    {name: "Australia"},
    {name: "Austria"},
    {name: "Azerbaiyán"},
    {name: "Bahamas"},
    {name: "Baréin"},
    {name: "Bangladés"},
    {name: "Barbados"},
    {name: "Bielorrusia"},
    {name: "Bélgica"},
    {name: "Belice"},
    {name: "Benín"},
    {name: "Bermudas"},
    {name: "Bután"},
    {name: "Bolivia"},
    {name: "Bosnia y Herzegovina"},
    {name: "Botsuana"},
    {name: "Isla Bouvet"},
    {name: "Brasil"},
    {name: "Territorio Británico del Océano Índico"},
    {name: "Brunéi"},
    {name: "Bulgaria"},
    {name: "Burkina Faso"},
    {name: "Burundi"},
    {name: "Camboya"},
    {name: "Camerún"},
    {name: "Canadá"},
    {name: "Cabo Verde"},
    {name: "Islas Caimán"},
    {name: "República Centroafricana"},
    {name: "Chad"},
    {name: "Chile"},
    {name: "China"},
    {name: "Isla de Navidad"},
    {name: "Islas Cocos (Keeling)"},
    {name: "Colombia"},
    {name: "Comoras"},
    {name: "Congo"},
    {name: "República Democrática del Congo"},
    {name: "Islas Cook"},
    {name: "Costa Rica"},
    {name: "Costa de Marfil"},
    {name: "Croacia"},
    {name: "Cuba"},
    {name: "Chipre"},
    {name: "República Checa"},
    {name: "Dinamarca"},
    {name: "Yibuti"},
    {name: "Dominica"},
    {name: "República Dominicana"},
    {name: "Ecuador"},
    {name: "Egipto"},
    {name: "El Salvador"},
    {name: "Guinea Ecuatorial"},
    {name: "Eritrea"},
    {name: "Estonia"},
    {name: "Etiopía"},
    {name: "Islas Malvinas"},
    {name: "Islas Feroe"},
    {name: "Fiyi"},
    {name: "Finlandia"},
    {name: "Francia"},
    {name: "Guayana Francesa"},
    {name: "Polinesia Francesa"},
    {name: "Territorios Australes Franceses"},
    {name: "Gabón"},
    {name: "Gambia"},
    {name: "Georgia"},
    {name: "Alemania"},
    {name: "Ghana"},
    {name: "Gibraltar"},
    {name: "Grecia"},
    {name: "Groenlandia"},
    {name: "Granada"},
    {name: "Guadalupe"},
    {name: "Guam"},
    {name: "Guatemala"},
    {name: "Guernsey"},
    {name: "Guinea"},
    {name: "Guinea-Bisáu"},
    {name: "Guyana"},
    {name: "Haití"},
    {name: "Islas Heard y McDonald"},
    {name: "Santa Sede"},
    {name: "Honduras"},
    {name: "Hong Kong"},
    {name: "Hungría"},
    {name: "Islandia"},
    {name: "India"},
    {name: "Indonesia"},
    {name: "Irán"},
    {name: "Iraq"},
    {name: "Irlanda"},
    {name: "Isla de Man"},
    {name: "Israel"},
    {name: "Italia"},
    {name: "Jamaica"},
    {name: "Japón"},
    {name: "Jersey"},
    {name: "Jordania"},
    {name: "Kazajistán"},
    {name: "Kenia"},
    {name: "Kiribati"},
    {name: "Corea del Norte"},
    {name: "Corea del Sur"},
    {name: "Kuwait"},
    {name: "Kirguistán"},
    {name: "Laos"},
    {name: "Letonia"},
    {name: "Líbano"},
    {name: "Lesoto"},
    {name: "Liberia"},
    {name: "Libia"},
    {name: "Liechtenstein"},
    {name: "Lituania"},
    {name: "Luxemburgo"},
    {name: "Macao"},
    {name: "Macedonia"},
    {name: "Madagascar"},
    {name: "Malaui"},
    {name: "Malasia"},
    {name: "Maldivas"},
    {name: "Malí"},
    {name: "Malta"},
    {name: "Islas Marshall"},
    {name: "Martinica"},
    {name: "Mauritania"},
    {name: "Mauricio"},
    {name: "Mayotte"},
    {name: "México"},
    {name: "Micronesia"},
    {name: "Moldavia"},
    {name: "Mónaco"},
    {name: "Mongolia"},
    {name: "Montserrat"},
    {name: "Marruecos"},
    {name: "Mozambique"},
    {name: "Birmania"},
    {name: "Namibia"},
    {name: "Nauru"},
    {name: "Nepal"},
    {name: "Países Bajos"},
    {name: "Antillas Neerlandesas"},
    {name: "Nueva Caledonia"},
    {name: "Nueva Zelanda"},
    {name: "Nicaragua"},
    {name: "Níger"},
    {name: "Nigeria"},
    {name: "Niue"},
    {name: "Islas Norfolk"},
    {name: "Islas Marianas del Norte"},
    {name: "Noruega"},
    {name: "Omán"},
    {name: "Pakistán"},
    {name: "Palaos"},
    {name: "Palestina"},
    {name: "Panamá"},
    {name: "Papúa Nueva Guinea"},
    {name: "Paraguay"},
    {name: "Perú"},
    {name: "Filipinas"},
    {name: "Pitcairn"},
    {name: "Polonia"},
    {name: "Portugal"},
    {name: "Puerto Rico"},
    {name: "Catar"},
    {name: "Reunión"},
    {name: "Rumania"},
    {name: "Rusia"},
    {name: "Ruanda"},
    {name: "Santa Elena"},
    {name: "San Cristóbal y Nieves"},
    {name: "Santa Lucía"},
    {name: "San Pedro y Miquelón"},
    {name: "San Vicente y las Granadinas"},
    {name: "Samoa"},
    {name: "San Marino"},
    {name: "Santo Tomé y Príncipe"},
    {name: "Arabia Saudita"},
    {name: "Senegal"},
    {name: "Serbia"},
    {name: "Seychelles"},
    {name: "Sierra Leona"},
    {name: "Singapur"},
    {name: "Eslovaquia"},
    {name: "Eslovenia"},
    {name: "Islas Salomón"},
    {name: "Somalia"},
    {name: "Sudáfrica"},
    {name: "Islas Georgias del Sur y Sandwich del Sur"},
    {name: "España"},
    {name: "Sri Lanka"},
    {name: "Sudán"},
    {name: "Surinam"},
    {name: "Islas Svalbard y Jan Mayen"},
    {name: "Suazilandia"},
    {name: "Suecia"},
    {name: "Suiza"},
    {name: "Siria"},
    {name: "Taiwán"},
    {name: "Tayikistán"},
    {name: "Tanzania"},
    {name: "Tailandia"},
    {name: "Timor Oriental"},
    {name: "Togo"},
    {name: "Tokelau"},
    {name: "Tonga"},
    {name: "Trinidad y Tobago"},
    {name: "Túnez"},
    {name: "Turquía"},
    {name: "Turkmenistán"},
    {name: "Islas Turcas y Caicos"},
    {name: "Tuvalu"},
    {name: "Uganda"},
    {name: "Ucrania"},
    {name: "Emiratos Árabes Unidos"},
    {name: "Reino Unido"},
    {name: "Estados Unidos"},
    {name: "Islas menores alejadas de los Estados Unidos"},
    {name: "Uruguay"},
    {name: "Uzbekistán"},
    {name: "Vanuatu"},
    {name: "Venezuela"},
    {name: "Vietnam"},
    {name: "Islas Vírgenes Británicas"},
    {name: "Islas Vírgenes de los Estados Unidos"},
    {name: "Wallis y Futuna"},
    {name: "Sahara Occidental"},
    {name: "Yemen"},
    {name: "Zambia"},
    {name: "Zimbabue"}
  ]


  nameInput: string = '';
  lastNameInput: string = '';
  dateInput: string = '';
  countryInput: string = 'Selecciona un país';
  EmailInput: string = '';
  PasswordInput: string = '';
  secondPasswordInput: string = '';
  nameSend: boolean = false;
  lastNameSend: boolean = false;
  dateSend: boolean = false;
  countrySend: boolean = false;
  EmailSend: boolean = false;
  PasswordSend: boolean = false;
  secondPasswordSend: boolean = false;
  dataSend:boolean = false;

  data: { name: string; lastName: string; date: string; country: string; email: string; password: string } = {
    name: '',
    lastName: '',
    date: '',
    country: '',
    email: '',
    password: '',
  };

  sendData() {

    if(this.nameInput.length === 0){
      this.nameSend = true;
    }
    if(this.lastNameInput.length === 0){
      this.lastNameSend = true;
    }
    if(this.dateInput.length === 0){
      this.dateSend = true;
    }
    if(this.countryInput.length === 0){
      this.countrySend = true;
    }
    if (this.EmailInput.length === 0) {
      this.EmailSend = true;
    }
    if (this.PasswordInput.length === 0) {
      this.PasswordSend = true;
    }
    if (this.secondPasswordInput.length === 0) {
      this.secondPasswordSend = true;
    }
    if (this.EmailInput.length > 1 || this.PasswordInput.length > 1) {
      this.data.name = this.nameInput;
      this.data.lastName = this.lastNameInput;
      this.data.date = this.dateInput;
      this.data.country = this.countryInput;
      this.data.email = this.EmailInput;
      if(this.PasswordInput === this.secondPasswordInput){
        this.data.password = this.PasswordInput;
      }
      this.dataSend = true;
      console.log(this.data);
      console.log('cuenta creada con éxito')
    }
  }
}
