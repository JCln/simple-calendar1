import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: []

})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule,
            providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
        };
    }
}