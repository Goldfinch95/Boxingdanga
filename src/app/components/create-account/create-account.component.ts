import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

interface PasswordVisibility {
  password1: boolean;
  password2: boolean;
}
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgbModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.accountData = new Account();
  }

  countries = [
    { name: 'Afganistán' },
    { name: 'Islas Åland' },
    { name: 'Albania' },
    { name: 'Argelia' },
    { name: 'Samoa Americana' },
    { name: 'Andorra' },
    { name: 'Angola' },
    { name: 'Anguila' },
    { name: 'Antártida' },
    { name: 'Antigua y Barbuda' },
    { name: 'Argentina' },
    { name: 'Armenia' },
    { name: 'Aruba' },
    { name: 'Australia' },
    { name: 'Austria' },
    { name: 'Azerbaiyán' },
    { name: 'Bahamas' },
    { name: 'Baréin' },
    { name: 'Bangladés' },
    { name: 'Barbados' },
    { name: 'Bielorrusia' },
    { name: 'Bélgica' },
    { name: 'Belice' },
    { name: 'Benín' },
    { name: 'Bermudas' },
    { name: 'Bután' },
    { name: 'Bolivia' },
    { name: 'Bosnia y Herzegovina' },
    { name: 'Botsuana' },
    { name: 'Isla Bouvet' },
    { name: 'Brasil' },
    { name: 'Territorio Británico del Océano Índico' },
    { name: 'Brunéi' },
    { name: 'Bulgaria' },
    { name: 'Burkina Faso' },
    { name: 'Burundi' },
    { name: 'Camboya' },
    { name: 'Camerún' },
    { name: 'Canadá' },
    { name: 'Cabo Verde' },
    { name: 'Islas Caimán' },
    { name: 'República Centroafricana' },
    { name: 'Chad' },
    { name: 'Chile' },
    { name: 'China' },
    { name: 'Isla de Navidad' },
    { name: 'Islas Cocos (Keeling)' },
    { name: 'Colombia' },
    { name: 'Comoras' },
    { name: 'Congo' },
    { name: 'República Democrática del Congo' },
    { name: 'Islas Cook' },
    { name: 'Costa Rica' },
    { name: 'Costa de Marfil' },
    { name: 'Croacia' },
    { name: 'Cuba' },
    { name: 'Chipre' },
    { name: 'República Checa' },
    { name: 'Dinamarca' },
    { name: 'Yibuti' },
    { name: 'Dominica' },
    { name: 'República Dominicana' },
    { name: 'Ecuador' },
    { name: 'Egipto' },
    { name: 'El Salvador' },
    { name: 'Guinea Ecuatorial' },
    { name: 'Eritrea' },
    { name: 'Estonia' },
    { name: 'Etiopía' },
    { name: 'Islas Malvinas' },
    { name: 'Islas Feroe' },
    { name: 'Fiyi' },
    { name: 'Finlandia' },
    { name: 'Francia' },
    { name: 'Guayana Francesa' },
    { name: 'Polinesia Francesa' },
    { name: 'Territorios Australes Franceses' },
    { name: 'Gabón' },
    { name: 'Gambia' },
    { name: 'Georgia' },
    { name: 'Alemania' },
    { name: 'Ghana' },
    { name: 'Gibraltar' },
    { name: 'Grecia' },
    { name: 'Groenlandia' },
    { name: 'Granada' },
    { name: 'Guadalupe' },
    { name: 'Guam' },
    { name: 'Guatemala' },
    { name: 'Guernsey' },
    { name: 'Guinea' },
    { name: 'Guinea-Bisáu' },
    { name: 'Guyana' },
    { name: 'Haití' },
    { name: 'Islas Heard y McDonald' },
    { name: 'Santa Sede' },
    { name: 'Honduras' },
    { name: 'Hong Kong' },
    { name: 'Hungría' },
    { name: 'Islandia' },
    { name: 'India' },
    { name: 'Indonesia' },
    { name: 'Irán' },
    { name: 'Iraq' },
    { name: 'Irlanda' },
    { name: 'Isla de Man' },
    { name: 'Israel' },
    { name: 'Italia' },
    { name: 'Jamaica' },
    { name: 'Japón' },
    { name: 'Jersey' },
    { name: 'Jordania' },
    { name: 'Kazajistán' },
    { name: 'Kenia' },
    { name: 'Kiribati' },
    { name: 'Corea del Norte' },
    { name: 'Corea del Sur' },
    { name: 'Kuwait' },
    { name: 'Kirguistán' },
    { name: 'Laos' },
    { name: 'Letonia' },
    { name: 'Líbano' },
    { name: 'Lesoto' },
    { name: 'Liberia' },
    { name: 'Libia' },
    { name: 'Liechtenstein' },
    { name: 'Lituania' },
    { name: 'Luxemburgo' },
    { name: 'Macao' },
    { name: 'Macedonia' },
    { name: 'Madagascar' },
    { name: 'Malaui' },
    { name: 'Malasia' },
    { name: 'Maldivas' },
    { name: 'Malí' },
    { name: 'Malta' },
    { name: 'Islas Marshall' },
    { name: 'Martinica' },
    { name: 'Mauritania' },
    { name: 'Mauricio' },
    { name: 'Mayotte' },
    { name: 'México' },
    { name: 'Micronesia' },
    { name: 'Moldavia' },
    { name: 'Mónaco' },
    { name: 'Mongolia' },
    { name: 'Montserrat' },
    { name: 'Marruecos' },
    { name: 'Mozambique' },
    { name: 'Birmania' },
    { name: 'Namibia' },
    { name: 'Nauru' },
    { name: 'Nepal' },
    { name: 'Países Bajos' },
    { name: 'Antillas Neerlandesas' },
    { name: 'Nueva Caledonia' },
    { name: 'Nueva Zelanda' },
    { name: 'Nicaragua' },
    { name: 'Níger' },
    { name: 'Nigeria' },
    { name: 'Niue' },
    { name: 'Islas Norfolk' },
    { name: 'Islas Marianas del Norte' },
    { name: 'Noruega' },
    { name: 'Omán' },
    { name: 'Pakistán' },
    { name: 'Palaos' },
    { name: 'Palestina' },
    { name: 'Panamá' },
    { name: 'Papúa Nueva Guinea' },
    { name: 'Paraguay' },
    { name: 'Perú' },
    { name: 'Filipinas' },
    { name: 'Pitcairn' },
    { name: 'Polonia' },
    { name: 'Portugal' },
    { name: 'Puerto Rico' },
    { name: 'Catar' },
    { name: 'Reunión' },
    { name: 'Rumania' },
    { name: 'Rusia' },
    { name: 'Ruanda' },
    { name: 'Santa Elena' },
    { name: 'San Cristóbal y Nieves' },
    { name: 'Santa Lucía' },
    { name: 'San Pedro y Miquelón' },
    { name: 'San Vicente y las Granadinas' },
    { name: 'Samoa' },
    { name: 'San Marino' },
    { name: 'Santo Tomé y Príncipe' },
    { name: 'Arabia Saudita' },
    { name: 'Senegal' },
    { name: 'Serbia' },
    { name: 'Seychelles' },
    { name: 'Sierra Leona' },
    { name: 'Singapur' },
    { name: 'Eslovaquia' },
    { name: 'Eslovenia' },
    { name: 'Islas Salomón' },
    { name: 'Somalia' },
    { name: 'Sudáfrica' },
    { name: 'Islas Georgias del Sur y Sandwich del Sur' },
    { name: 'España' },
    { name: 'Sri Lanka' },
    { name: 'Sudán' },
    { name: 'Surinam' },
    { name: 'Islas Svalbard y Jan Mayen' },
    { name: 'Suazilandia' },
    { name: 'Suecia' },
    { name: 'Suiza' },
    { name: 'Siria' },
    { name: 'Taiwán' },
    { name: 'Tayikistán' },
    { name: 'Tanzania' },
    { name: 'Tailandia' },
    { name: 'Timor Oriental' },
    { name: 'Togo' },
    { name: 'Tokelau' },
    { name: 'Tonga' },
    { name: 'Trinidad y Tobago' },
    { name: 'Túnez' },
    { name: 'Turquía' },
    { name: 'Turkmenistán' },
    { name: 'Islas Turcas y Caicos' },
    { name: 'Tuvalu' },
    { name: 'Uganda' },
    { name: 'Ucrania' },
    { name: 'Emiratos Árabes Unidos' },
    { name: 'Reino Unido' },
    { name: 'Estados Unidos' },
    { name: 'Islas menores alejadas de los Estados Unidos' },
    { name: 'Uruguay' },
    { name: 'Uzbekistán' },
    { name: 'Vanuatu' },
    { name: 'Venezuela' },
    { name: 'Vietnam' },
    { name: 'Islas Vírgenes Británicas' },
    { name: 'Islas Vírgenes de los Estados Unidos' },
    { name: 'Wallis y Futuna' },
    { name: 'Sahara Occidental' },
    { name: 'Yemen' },
    { name: 'Zambia' },
    { name: 'Zimbabue' },
  ];

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  accountData: Account;
  nameSend: boolean = false;
  lastNameSend: boolean = false;
  dateSend: boolean = false;
  emailSend: boolean = false;
  countrySend: boolean = false;
  passwordSend: boolean = false;
  secondPasswordSend: boolean = false;
  showPassword = false;
  showIcon = false;
  canSend = true;

  passwordVisibility: PasswordVisibility = {
    password1: false,
    password2: false,
  };

  togglePasswordVisibility(passwordType: keyof PasswordVisibility) {
    this.passwordVisibility[passwordType] =
      !this.passwordVisibility[passwordType];
  }

  getPasswordType() {
    return this.showPassword ? 'text' : 'password';
  }

  async sendData() {
    if (this.accountData.Name.length === 0) {
      this.nameSend = true;
    }
    if (this.accountData.Lastname.length === 0) {
      this.lastNameSend = true;
    }
    if (this.accountData.Date.length === 0) {
      this.dateSend = true;
    }
    if (this.accountData.Country.length === 0) {
      this.countrySend = true;
    }
    if (this.accountData.Email.length === 0) {
      this.emailSend = true;
    }
    if (this.accountData.Password.length === 0) {
      this.passwordSend = true;
    }
    if (this.accountData.Secondpassword.length === 0) {
      this.secondPasswordSend = true;
    } else {
      //el email debe existir y contener un "@" o "."
      if (
        this.accountData.Email.length >= 1 &&
        /\S+@\S+\.\S+/.test(this.accountData.Email)
      ) {
        this.emailSend = false;
      } else {
        this.canSend = false;
      }
      //el password debe tener mínimo 6 y máximo 12 caracteres con una letra mayúscula.
      if (
        this.accountData.Password.length >= 6 &&
        this.accountData.Password.length <= 12 &&
        /[A-Z]/.test(this.accountData.Password)
      ) {
        //contiene una mayúscula
        this.passwordSend = false;
      } else {
        this.canSend = false;
        this.passwordSend = true;
      }
      if (this.canSend) {
        const responseGet: any = await lastValueFrom(
          this.http.get('http://localhost:8000/clientes')
        );
        const users = responseGet.data[0];
        const userFound = users.filter(
          (user: any) => user.email === this.accountData.Email
        );
        if (userFound.length > 0) {
          return alert('Este usuario ya existe');
        } else {
          alert('Cuenta creada con exito');
          this.router.navigateByUrl('/login');
        }

        const accountDataToSend = {
          nombre: this.accountData.Name,
          apellido: this.accountData.Lastname,
          fecha_nacimiento: this.accountData.Date,
          pais: this.accountData.Country,
          email: this.accountData.Email,
          password: this.accountData.Password,
        };

        const responsePost: any = await lastValueFrom(this.http
          .post('http://localhost:8000/clientes/', accountDataToSend))
            console.log(responsePost);
            if (responsePost.code != 200) {
              console.log('error');
            } else {
              console.log(responsePost.message);
            }
      }
    }
  }
}

export class Account {
  Name: string;
  Lastname: string;
  Date: string;
  Country: string;
  Email: string;
  Password: string;
  Secondpassword: string;
  constructor() {
    this.Name = '';
    this.Lastname = '';
    this.Date = '';
    this.Country = 'Selecciona un país';
    this.Email = '';
    this.Password = '';
    this.Secondpassword = '';
  }
}
