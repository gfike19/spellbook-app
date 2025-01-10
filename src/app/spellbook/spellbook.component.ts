import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Spell } from '../models/spell.model';

@Component({
  selector: 'app-spellbook',
  standalone: true,
  template: `
    <div *ngIf="spells">
      <h1>Spellbook</h1>
      <ul>
        <li *ngFor="let spell of spells">{{ spell.name }}</li>
      </ul>
    </div>
  `,
  imports: [CommonModule]
})
export class SpellbookComponent implements OnInit {
  spells: Spell[] | null = null;
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<Spell[]>('https://web-develop-e516.up.railway.app/spellbook')
      .subscribe(data => this.spells = data);
  }
}
