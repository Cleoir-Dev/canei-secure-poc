import { Component } from '@angular/core';
import { CaneiSecureCrypto as SecureCrypto } from 'canei-secure-crypto';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  inputText = '';
  encryptedText = '';
  decryptedText = '';

  constructor(private toastController: ToastController) {}

  async encrypt() {
    const result = await SecureCrypto.encrypt({ value: this.inputText });
    this.encryptedText = result.value;
    this.decryptedText = '';
  }

  async decrypt() {
    const result = await SecureCrypto.decrypt({ value: this.encryptedText });
    this.decryptedText = result.value;
  }

  clearAll() {
    this.inputText = '';
    this.encryptedText = '';
    this.decryptedText = '';
  }

  async copyToClipboard(text: string) {
    await Clipboard.write({string: text});
    const toast = await this.toastController.create({
      message: 'Copiado para a área de transferência!',
      duration: 1500,
      position: 'bottom',
    });
    toast.present();
  }

}