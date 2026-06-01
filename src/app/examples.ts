import BasicLineConfig from "./configs/basic-line"
import LineWithSplineConfig from "./configs/line-with-spline"
import AreaRangeConfig from "./configs/area-range"
import BasicAreaConfig from "./configs/basic-area"
import LineRangeConfig from "./configs/line-range"
import LineRangeInvertedConfig from "./configs/line-range-inverted"
import AreaRangeInvertedConfig from "./configs/area-range-inverted"
import LineInvertedConfig from "./configs/line-inverted"
import AreaInvertedConfig from "./configs/area-inverted"

import {AreaChartOptions, LineChartOptions} from '@visuallyjs/browser-ui';

export interface ChartSpec {
  desc:string
  type:string
  options:AreaChartOptions|LineChartOptions
  comments?:string
}

export const charts:Array<ChartSpec> = [
    {
      desc:"Line chart, multiple series",
        type: "line",
        options: BasicLineConfig
    },
    {
      desc:"Line chart with spline",
        type: "line",
        options: LineWithSplineConfig
    },
    {
        desc: "Basic area chart",
        type: "area",
        options: BasicAreaConfig
    },
    {
        desc: "Area range chart",
        type: "area",
        options: AreaRangeConfig
    },
    {
        desc: "Line range chart",
        type: "line",
        options: LineRangeConfig
    },
    {
        desc: "Line range chart, inverted",
        type: "line",
        options: LineRangeInvertedConfig
    },
    {
        desc: "Area range chart, inverted",
        type: "area",
        options: AreaRangeInvertedConfig
    },
    {
        desc: "Line chart, inverted",
        type: "line",
        options: LineInvertedConfig
    },
    {
        desc: "Area chart, inverted",
        type: "area",
        options: AreaInvertedConfig
    }

];
