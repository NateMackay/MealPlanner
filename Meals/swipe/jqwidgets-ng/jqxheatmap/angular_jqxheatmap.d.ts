/// <reference path="../jqwidgets.d.ts" />
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxHeatMapComponent implements OnChanges {
    attrXAxis: jqwidgets.HeatMapXAxis;
    attrYAxis: jqwidgets.HeatMapYAxis;
    attrPaletteSettings: jqwidgets.HeatMapPaletteSettings;
    attrLegendSettings: jqwidgets.HeatMapLegendSettings;
    attrSource: any[];
    attrTitle: string;
    attrTooltipRender: (args: jqwidgets.HeatMapTooltipRender) => void;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxHeatMap;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    xAxis(arg?: jqwidgets.HeatMapXAxis): jqwidgets.HeatMapXAxis;
    yAxis(arg?: jqwidgets.HeatMapYAxis): jqwidgets.HeatMapYAxis;
    paletteSettings(arg?: jqwidgets.HeatMapPaletteSettings): jqwidgets.HeatMapPaletteSettings;
    legendSettings(arg?: jqwidgets.HeatMapLegendSettings): jqwidgets.HeatMapLegendSettings;
    source(arg?: any[]): any[];
    title(arg?: string): string;
    width(arg?: number | string): number | string;
    tooltipRender(arg?: (args: jqwidgets.HeatMapTooltipRender) => void): (args: jqwidgets.HeatMapTooltipRender) => void;
    destroy(): void;
    setLegendPosition(position?: string): void;
    setOpposedXAxisPosition(opposedPosition: boolean): void;
    setOpposedYAxisPosition(opposedPosition: boolean): void;
    reverseXAxisPosition(isInversed: boolean): void;
    reverseYAxisPosition(isInversed: boolean): void;
    setPaletteType(type: string): void;
    __wireEvents__(): void;
}
