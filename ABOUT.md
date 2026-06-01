### Area and Line Chart Demo

This demo showcases various configurations of Area and Line charts using VisuallyJS in an Angular application.

#### How it works

The application imports `VisuallyJsModule` and uses the `vjs-area-chart` and `vjs-line-chart` components. It iterates through a collection of chart configurations defined in `examples.ts` and renders them dynamically.

#### Components Used

- `vjs-area-chart`: Used to display area charts.
- `vjs-line-chart`: Used to display line charts.

#### Component Options

Both components accept an `options` property of type `AreaChartOptions` or `LineChartOptions`. These options control:
- Data series and axes configuration.
- Visual styles like spline smoothing, area opacity, and range displays.
- Inversion of axes.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
