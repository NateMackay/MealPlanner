/// <reference path="../jqwidgets.d.ts" />
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxPanelComponent implements OnChanges {
    attrAutoUpdate: boolean;
    attrDisabled: boolean;
    attrRtl: boolean;
    attrSizeMode: string;
    attrScrollBarSize: number | string;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxPanel;
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
    autoUpdate(arg?: boolean): boolean;
    disabled(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    rtl(arg?: boolean): boolean;
    sizeMode(arg?: string): string;
    scrollBarSize(arg?: number | string): number | string;
    theme(arg?: string): string;
    width(arg?: string | number): string | number;
    append(HTMLElement: any): void;
    clearcontent(): void;
    destroy(): void;
    focus(): void;
    getScrollHeight(): number;
    getVScrollPosition(): number;
    getScrollWidth(): number;
    getHScrollPosition(): number;
    prepend(HTMLElement: any): void;
    remove(HTMLElement: any): void;
    scrollTo(left: number | string, top: number | string): void;
    __wireEvents__(): void;
}
