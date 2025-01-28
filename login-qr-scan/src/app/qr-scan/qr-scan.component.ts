import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

// Necessary to solve the problem of losing internet connection
LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

@Component({
  selector: 'app-qr-scan',
  standalone: true,
  imports: [CommonModule, NgxScannerQrcodeModule],
  templateUrl: './qr-scan.component.html',
  styleUrl: './qr-scan.component.scss'
})
export class QrScanComponent implements OnInit {
  scannedResult: string = '';
  qrCodeUrl: string = '';
  scanningStatus: string = '';

  constructor() {}

  ngOnInit(): void {
    this.generateQRCode()
  }

  generateQRCode() {
    fetch('http://localhost:8091/generate-qr?token=' + this.generateToken())
      .then(response => response.blob())
      .then(imageBlob => {
        this.qrCodeUrl = URL.createObjectURL(imageBlob);
      })
      .catch(error => console.error('Erreur lors de la génération du QR Code', error));
  }

  generateToken(): string {
    console.log('QR Code scanné :');return 'some-unique-token';
  }

  onScanSuccess(result: any) {
    this.scannedResult = result;
    this.authenticateUser(result);
    this.scanningStatus = 'QR Code scanné avec succès !';
    console.log('QR Code scanné :', result);

  }

  authenticateUser(token: string) {
    fetch(`/generate-qr?token=${token}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("Authentification réussie !");
          // L'utilisateur est authentifié avec succès, redirigez-le vers la page d'accueil
        } else {
          console.log("QR code invalide ou expiré");
        }
      })
      .catch(error => console.error('Erreur:', error));
  }
}
