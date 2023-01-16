import { Component } from '@angular/core';
import { ValueAxisLabels } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-app',
    template: `
        <kendo-chart [zoomable]="true">
          <kendo-chart-category-axis>
          <!-- Definisco colore e numero di steps dell'asse X -->
              <kendo-chart-category-axis-item [categories]="categories">
                  <kendo-chart-category-axis-item-labels color="#0a0">
                  </kendo-chart-category-axis-item-labels>
              </kendo-chart-category-axis-item>
          </kendo-chart-category-axis>

          <kendo-chart-value-axis>
              <!-- Definisco colore e numero di steps dell'asse Y -->
              <kendo-chart-value-axis-item [labels]="valueAxisLabels">
                <kendo-chart-category-axis-item-labels color="#deb456" [step]="3">
                </kendo-chart-category-axis-item-labels>
                <!--                       ^^^^^^^^
                     It is also possible to bind all settings to a field.
                -->
              </kendo-chart-value-axis-item>
          </kendo-chart-value-axis>

          <kendo-chart-series>
            <kendo-chart-series-item [data]="seriesData" type="line">
            </kendo-chart-series-item>
          </kendo-chart-series>
        </kendo-chart>
    `
})
export class AppComponent {
    public seriesData: number[] = [20, 40, 45, 30, 50];
    public categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    public valueAxisLabels: ValueAxisLabels = {
      font: 'bold 16px Arial, sans-serif'
    };
}
