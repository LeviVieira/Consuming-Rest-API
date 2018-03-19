import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {

  user = { 
    name: '', 
    username: '', 
    email: '',
    phone: '', 
    website: '', 
    address: { street: '', suite: '', city: '', zipcode: '', 
    geo: { lat: '', lng: '' } }, 
    company: { name: '', bs: '', catchPhrase: '' }
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public restProvider: RestProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

  saveUser() {
    this.restProvider.addUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}