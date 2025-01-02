import { Component } from '@angular/core';
import { SpellbookComponent } from './spellbook/spellbook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-spellbook></app-spellbook>
  `,
  imports: [SpellbookComponent]
})
export class AppComponent {}
