import { Component, inject, signal } from '@angular/core';
import { FrameComponent } from '../../core/components/frame/frame.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new',
  imports: [
    FrameComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  host: { class: 'w-full block' },
  templateUrl: './new.component.html',
})
export class NewComponent {
  public form: FormGroup;
  public noItemsAdded = signal(false);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor() {
    this.form = this.fb.group({
      items: this.fb.array<FormGroup>([]),
    });

    this.addItem();
  }

  private createItemGroup(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      count: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        Validators.pattern('^[0-9]+$'),
      ]),
      price: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        Validators.pattern('^[0-9]+$'),
      ]),
    });
  }

  public addItem(): void {
    this.noItemsAdded.update(status => status = false)
    this.items.push(this.createItemGroup());
  }

  public removeItem(index: number): void {
    this.items.removeAt(index);
  }

  public addInvoice() {
    if(this.isAnyItemAdded){
      this.noItemsAdded.update(status => status = true)
    }

    if (!this.hasAtLeastOneValidItem()) {
      this.items.controls.forEach((group) => {
        const fg = group as FormGroup;
        Object.values(fg.controls).forEach((ctrl) => ctrl.markAsTouched());
      });
      return;
    }

    this.router.navigate(['/summary'], {
      state: { items: this.form.value.items }
    });
  }

  private hasAtLeastOneValidItem(): boolean {
    return this.items.controls.some((control) => control.valid);
  }

  get items(): FormArray<FormGroup> {
    return this.form.get('items') as FormArray<FormGroup>;
  }

  get isAnyItemAdded(){
    return this.items.controls.length === 0
  }
}
