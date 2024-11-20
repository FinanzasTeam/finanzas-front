import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from '@angular/material/expansion';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    MatAccordion,
    MatExpansionModule,
    MatExpansionPanelTitle
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
  faqs = [
    { question: '¿Cómo puedo calcular el VAN?', answer: 'Para calcular el Valor Actual Neto (VAN), debes descontar los flujos de caja futuros al presente utilizando una tasa de descuento.' },
    { question: '¿Qué es la TIR?', answer: 'La Tasa Interna de Retorno (TIR) es la tasa de descuento que hace que el VAN de un proyecto sea cero.' },
    { question: '¿Cómo se calcula la TCEA?', answer: 'La Tasa de Costo Efectivo Anual (TCEA) se calcula considerando todos los costos y gastos asociados a un crédito o inversión.' },
    { question: '¿Qué es el COK anual?', answer: 'El Costo de Oportunidad del Capital (COK) anual es la tasa mínima de retorno que un inversor espera recibir por su inversión.' },
    { question: '¿Cómo se realiza un flujo de caja?', answer: 'Un flujo de caja se realiza proyectando todos los ingresos y egresos de un proyecto en un periodo determinado.' },
    { question: '¿Qué es el flujo TEP?', answer: 'El flujo TEP (Tasa Efectiva Periodica) es el flujo de caja ajustado por la tasa efectiva periódica.' },
    { question: '¿Cómo se calcula el valor presente?', answer: 'El valor presente se calcula descontando los flujos de caja futuros a una tasa de descuento específica.' },
    { question: '¿Qué es el periodo de recuperación?', answer: 'El periodo de recuperación es el tiempo que tarda en recuperarse la inversión inicial de un proyecto.' },
    { question: '¿Cómo se calcula el valor terminal?', answer: 'El valor terminal se calcula estimando el valor de un proyecto al final de su vida útil.' },
    { question: '¿Qué es el análisis de sensibilidad?', answer: 'El análisis de sensibilidad evalúa cómo los cambios en las variables clave afectan el resultado de un proyecto.' },
    { question: '¿Cómo se calcula el costo de capital?', answer: 'El costo de capital se calcula ponderando el costo de la deuda y el costo del capital propio.' },
    { question: '¿Qué es el apalancamiento financiero?', answer: 'El apalancamiento financiero es el uso de deuda para aumentar el potencial de retorno de una inversión.' }
  ];
}
