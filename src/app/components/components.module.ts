import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSobreComponent } from './section-sobre/section-sobre.component';
import { SectionAtendimentoComponent } from './section-atendimento/section-atendimento.component';

const moduleComponents = [SectionSobreComponent, SectionAtendimentoComponent];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}