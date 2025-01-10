export class Spell {
    id?: number; // Assuming `BaseEntity` includes an `id` field
    name!: string; // Required field
    level!: number; // Required field
    description?: string;
    higherLevel?: string;
    duration?: string;
    concentration!: boolean; // Required field
    castingTime?: string;
    spellRange?: string;
    components?: string;
    damageType?: string;
    damageAtSlotLevel?: string;
    school?: string;
  
    constructor(init?: Partial<Spell>) {
      Object.assign(this, init);
    }
  }
  