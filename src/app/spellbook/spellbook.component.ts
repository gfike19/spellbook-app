import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  spells: any[] | null = null;
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('https://web-develop-e516.up.railway.app/spellbook')
      .subscribe(data => this.spells = data);
  }
}
