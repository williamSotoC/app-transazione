import { Component, Input } from '@angular/core';
import { ITransazione } from '../transazione';

@Component({
    selector: 'app-transazione-detail',
    templateUrl: './transazione-detail.component.html',
    styleUrls: ['./transazione-detail.component.css']
})
export class TransazioneDetailComponent {
    @Input()
    elmentoIessimoOggettoTransazion?: ITransazione;
    // ! "elmentoIessimoOggettoTransazion" .Esso è sia nome di proprietà che nome di parametro



}
