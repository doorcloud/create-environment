# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/81523810-1c24-4cbd-9b13-b2962308b25d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/81523810-1c24-4cbd-9b13-b2962308b25d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Angular Integration Guide

To integrate the Environment Creator dialog into an Angular application:

1. **Component Structure**
```typescript
// environment-dialog.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-environment-dialog',
  templateUrl: './environment-dialog.component.html'
})
export class EnvironmentDialogComponent {
  @Input() isOpen = false;
  @Output() closeDialog = new EventEmitter<void>();
  
  environmentForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.environmentForm = this.fb.group({
      name: ['', Validators.required],
      zone: ['', Validators.required],
      memory: [0],
      cpu: [0],
      storage: [0],
      isProduction: [false]
    });
  }

  onSubmit() {
    if (this.environmentForm.valid) {
      console.log('Form submitted:', this.environmentForm.value);
      this.closeDialog.emit();
    }
  }
}
```

2. **Template Structure**
```html
<!-- environment-dialog.component.html -->
<div *ngIf="isOpen" class="dialog-overlay fixed inset-0 bg-black/80 z-50">
  <div class="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
    <div class="max-w-[480px] p-0 border-[rgba(206,212,218,1)] border-2 max-h-[90vh] overflow-hidden bg-white rounded-lg">
      <div class="max-h-[80vh] overflow-y-auto">
        <div class="bg-gray-50 w-full pt-4 pb-6 px-4">
          <!-- Header -->
          <div class="flex w-full max-w-[358px] items-center gap-[40px_45px] justify-between mx-auto">
            <div class="flex min-w-60 items-center gap-3">
              <div class="bg-blue-900 flex items-center w-10 h-10 px-3 py-2.5 rounded-full">
                <!-- Environment Icon -->
              </div>
              <h1 class="text-blue-900 text-xl font-normal leading-none w-[232px]">
                Create new environment
              </h1>
            </div>
            <button (click)="closeDialog.emit()" class="flex items-center justify-center w-[29px]">
              <span class="w-4 h-4 text-gray-600">×</span>
            </button>
          </div>

          <!-- Form -->
          <form [formGroup]="environmentForm" (ngSubmit)="onSubmit()" class="w-full max-w-[358px] mt-8 mx-auto">
            <!-- Name Input -->
            <div class="w-full">
              <div class="flex gap-[3px] text-base font-normal whitespace-nowrap pt-0.5 pb-2.5">
                <span class="text-blue-600">Name</span>
                <span class="text-red-500 leading-none">*</span>
              </div>
              <input 
                type="text" 
                formControlName="name"
                class="bg-white border-blue-200 border w-full h-[50px] mt-4 rounded-lg border-solid px-4"
                placeholder="Enter environment name"
              >
            </div>

            <!-- Zone Select -->
            <div class="mt-6">
              <div class="flex gap-[3px] text-base font-normal whitespace-nowrap pt-0.5 pb-2.5">
                <span class="text-blue-600">Zone</span>
                <span class="text-red-500 leading-none">*</span>
              </div>
              <select 
                formControlName="zone"
                class="w-full bg-white border-blue-200 border mt-2 px-4 py-3 rounded-lg"
              >
                <option value="">Select Zone</option>
                <option value="us-east">US East</option>
                <option value="us-west">US West</option>
                <option value="eu-central">EU Central</option>
              </select>
            </div>

            <!-- Resource Sliders -->
            <div class="mt-6" *ngFor="let resource of ['memory', 'cpu', 'storage']">
              <label [for]="resource" class="block text-blue-600 mb-2 capitalize">{{resource}}</label>
              <input 
                [id]="resource"
                type="range" 
                [formControlName]="resource"
                [max]="resource === 'storage' ? 100 : (resource === 'memory' ? 16 : 4)"
                class="w-full"
              >
            </div>

            <button
              type="submit"
              class="w-full bg-emerald-500 text-base text-white font-normal text-center mt-6 px-[153px] py-3.5 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
```

3. **Usage in Parent Component**
```typescript
// app.component.ts
import { Component } from '@angular/core';
import { EnvironmentDialogComponent } from './environment-dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="openDialog()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
      Create New Environment
    </button>
    
    <app-environment-dialog
      [isOpen]="isDialogOpen"
      (closeDialog)="closeDialog()"
    ></app-environment-dialog>
  `
})
export class AppComponent {
  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
}
```

4. **Required Modules**
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EnvironmentDialogComponent } from './environment-dialog.component';

@NgModule({
  declarations: [
    EnvironmentDialogComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  // ... other module configurations
})
export class AppModule { }
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/81523810-1c24-4cbd-9b13-b2962308b25d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
