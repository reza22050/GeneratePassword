import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: String='';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;

  constructor(){
  }

  onButtonClick(){
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopq';
    const symbols = '!@#$%^&*()';
    let validChar='';

    if(this.includeNumbers) {
      validChar += numbers;
    }
    if(this.includeLetters) {
      validChar += letters;
    }
    if(this.includeSymbols) {
      validChar += symbols;
    }

    let generatedPassword = '';
    for (let index = 0; index<this.length; index++){
      let index = Math.floor(Math.random()* validChar.length);
      generatedPassword += validChar[index];
    }

    this.password = generatedPassword;
    //console.log('button clicked');
    //console.log('includeLetters = ' + this.includeLetters);
    //console.log('includeNumbers = ' + this.includeNumbers);
    //console.log('includeSymbols = ' + this.includeSymbols);
  }

  getPassword(){
    return this.password;
  }
  
  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: string) {
    const parsedValue = parseInt(event);  
    if(!isNaN(parsedValue))
    {
      this.length = parsedValue;
    }
  }

}
