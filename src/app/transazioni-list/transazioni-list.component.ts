import { Component } from '@angular/core';
import { ITransazione } from '../transazione';
import { TRANSAZIONI } from '../transazioni-dati';

@Component({
    selector: 'app-transazioni-list',
    templateUrl: './transazioni-list.component.html',
    styleUrls: ['./transazioni-list.component.css']
})
export class TransazioniListComponent {
    arrayDiOggettiTransazioni: ITransazione[] = TRANSAZIONI;
    // ! "arrayDiOggettiTransazioni".Esso è nome di proprietà


}
