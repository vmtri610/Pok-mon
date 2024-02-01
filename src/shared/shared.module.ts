import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton,
    MatCardModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
