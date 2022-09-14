import { IgxHierarchicalGridComponent, IgxPivotGridComponent, IgxRowIslandComponent } from '../../../igniteui-angular/src/public_api';
import { IgxGridComponent } from '../../../igniteui-angular/src/lib/grids/grid/grid.component';
import { IgxGridToolbarAdvancedFilteringComponent } from "../../../igniteui-angular/src/lib/grids/toolbar/grid-toolbar-advanced-filtering.component";
import { IgxGridToolbarExporterComponent } from "../../../igniteui-angular/src/lib/grids/toolbar/grid-toolbar-exporter.component";
import { IgxGridToolbarHidingComponent } from "../../../igniteui-angular/src/lib/grids/toolbar/grid-toolbar-hiding.component";
import { IgxGridToolbarPinningComponent } from "../../../igniteui-angular/src/lib/grids/toolbar/grid-toolbar-pinning.component";
import { IgxGridToolbarComponent } from "../../../igniteui-angular/src/lib/grids/toolbar/grid-toolbar.component";
import { IgxPaginatorComponent } from "../../../igniteui-angular/src/lib/paginator/paginator.component";
import { IgxColumnComponent } from "../../../igniteui-angular/src/lib/grids/columns/column.component";
// this is a comment
export const registerComponents = [
    IgxGridComponent,
    IgxHierarchicalGridComponent,
    IgxRowIslandComponent,
    IgxPivotGridComponent
];
//// WARNING: Code below this line is auto-generated and any modifications will be overwritten
export var registerConfig = [
    { component: IgxColumnComponent, parents: [IgxGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent, IgxRowIslandComponent], contentQueries: [], methods: ["getInitialChildColumnSizes", "getFilledChildColumnSizes", "getResizableColUnderEnd", "pin", "unpin", "move", "autosize"] },
    { component: IgxGridComponent, parents: [], contentQueries: [{ property: "columnList", childType: IgxColumnComponent, isQueryList: true }, { property: "toolbar", childType: IgxGridToolbarComponent, isQueryList: true }, { property: "paginationComponents", childType: IgxPaginatorComponent, isQueryList: true }], methods: ["getCellByColumnVisibleIndex", "groupBy", "clearGrouping", "isExpandedGroup", "toggleGroup", "selectRowsInGroup", "deselectRowsInGroup", "fullyExpandGroup", "toggleAllGroupRows", "getSelectedData", "getRowByIndex", "getRowByKey", "getCellByColumn", "getCellByKey", "pinRow", "unpinRow", "isRecordPinnedByIndex", "toggleColumnVisibility", "expandAll", "collapseAll", "expandRow", "collapseRow", "toggleRow", "getHeaderGroupWidth", "getColumnByName", "getColumnByVisibleIndex", "nextPage", "previousPage", "moveColumn", "paginate", "markForCheck", "addRow", "deleteRow", "updateCell", "updateRow", "getRowData", "sort", "filter", "filterGlobal", "enableSummaries", "disableSummaries", "clearFilter", "clearSort", "pinColumn", "unpinColumn", "reflow", "findNext", "findPrev", "refreshSearch", "clearSearch", "getPinnedWidth", "selectRows", "deselectRows", "selectAllRows", "deselectAllRows", "selectedColumns", "selectColumns", "deselectColumns", "deselectAllColumns", "selectAllColumns", "getSelectedColumnsData", "combineSelectedCellAndColumnData", "navigateTo", "getNextCell", "getPreviousCell", "openAdvancedFilteringDialog", "closeAdvancedFilteringDialog", "endEdit", "beginAddRowById", "beginAddRowByIndex"] },
    { component: IgxHierarchicalGridComponent, parents: [], contentQueries: [{ property: "childLayoutList", childType: IgxRowIslandComponent, isQueryList: true }, { property: "allLayoutList", childType: IgxRowIslandComponent, isQueryList: true }, { property: "paginatorList", childType: IgxPaginatorComponent, isQueryList: true }, { property: "columnList", childType: IgxColumnComponent, isQueryList: true }, { property: "toolbar", childType: IgxGridToolbarComponent, isQueryList: true }, { property: "paginationComponents", childType: IgxPaginatorComponent, isQueryList: true }], methods: ["getCellByColumnVisibleIndex", "getRowByIndex", "getRowByKey", "getCellByColumn", "getCellByKey", "pinRow", "unpinRow", "ngOnDestroy", "getDefaultExpandState", "onContainerScroll", "isRecordPinnedByIndex", "toggleColumnVisibility", "expandAll", "collapseAll", "expandRow", "collapseRow", "toggleRow", "getHeaderGroupWidth", "getColumnByName", "getColumnByVisibleIndex", "nextPage", "previousPage", "moveColumn", "paginate", "markForCheck", "addRow", "deleteRow", "updateCell", "updateRow", "getRowData", "sort", "filter", "filterGlobal", "enableSummaries", "disableSummaries", "clearFilter", "clearSort", "pinColumn", "unpinColumn", "reflow", "findNext", "findPrev", "refreshSearch", "clearSearch", "getPinnedWidth", "selectRows", "deselectRows", "selectAllRows", "deselectAllRows", "getSelectedData", "selectedColumns", "selectColumns", "deselectColumns", "deselectAllColumns", "selectAllColumns", "getSelectedColumnsData", "combineSelectedCellAndColumnData", "navigateTo", "getNextCell", "getPreviousCell", "openAdvancedFilteringDialog", "closeAdvancedFilteringDialog", "endEdit", "beginAddRowById", "beginAddRowByIndex"] },
    { component: IgxRowIslandComponent, parents: [IgxHierarchicalGridComponent, IgxRowIslandComponent], contentQueries: [{ property: "children", childType: IgxRowIslandComponent, isQueryList: true }, { property: "childColumns", childType: IgxColumnComponent, isQueryList: true }, { property: "columnList", childType: IgxColumnComponent, isQueryList: true }], methods: ["isRecordPinnedByIndex", "toggleColumnVisibility", "expandAll", "collapseAll", "expandRow", "collapseRow", "toggleRow", "getHeaderGroupWidth", "getColumnByName", "getColumnByVisibleIndex", "nextPage", "previousPage", "moveColumn", "paginate", "markForCheck", "addRow", "deleteRow", "updateCell", "updateRow", "getRowData", "sort", "filter", "filterGlobal", "enableSummaries", "disableSummaries", "clearFilter", "clearSort", "pinColumn", "unpinColumn", "pinRow", "unpinRow", "findNext", "findPrev", "refreshSearch", "clearSearch", "getPinnedWidth", "selectRows", "deselectRows", "selectAllRows", "deselectAllRows", "getSelectedData", "selectedColumns", "selectColumns", "deselectColumns", "deselectAllColumns", "selectAllColumns", "getSelectedColumnsData", "combineSelectedCellAndColumnData", "navigateTo", "getNextCell", "getPreviousCell", "openAdvancedFilteringDialog", "closeAdvancedFilteringDialog", "endEdit", "beginAddRowById", "beginAddRowByIndex"] },
    { component: IgxPivotGridComponent, parents: [], contentQueries: [{ property: "columnList", childType: IgxColumnComponent, isQueryList: true }, { property: "toolbar", childType: IgxGridToolbarComponent, isQueryList: true }, { property: "paginationComponents", childType: IgxPaginatorComponent, isQueryList: true }], methods: ["notifyDimensionChange", "toggleColumn", "getColumnGroupExpandState", "toggleRowGroup", "autoSizeRowDimension", "insertDimensionAt", "moveDimension", "removeDimension", "toggleDimension", "insertValueAt", "moveValue", "removeValue", "toggleValue", "sortDimension", "toggleRow", "getHeaderGroupWidth", "getColumnByName", "getColumnByVisibleIndex", "markForCheck", "getRowData", "sort", "filter", "filterGlobal", "clearFilter", "clearSort", "reflow", "selectRows", "deselectRows", "selectAllRows", "deselectAllRows", "getSelectedData", "selectedColumns", "selectColumns", "deselectColumns", "deselectAllColumns", "selectAllColumns", "getSelectedColumnsData", "combineSelectedCellAndColumnData", "navigateTo"] },
    { component: IgxGridToolbarAdvancedFilteringComponent, parents: [IgxGridToolbarComponent], contentQueries: [], methods: [] },
    { component: IgxGridToolbarExporterComponent, parents: [IgxGridToolbarComponent], contentQueries: [], methods: ["export", "ngOnDestroy"] },
    { component: IgxGridToolbarHidingComponent, parents: [IgxGridToolbarComponent], contentQueries: [], methods: ["checkAll", "uncheckAll", "ngOnDestroy"] },
    { component: IgxGridToolbarPinningComponent, parents: [IgxGridToolbarComponent], contentQueries: [], methods: ["checkAll", "uncheckAll", "ngOnDestroy"] },
    { component: IgxGridToolbarComponent, parents: [IgxGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent], contentQueries: [], methods: ["ngDoCheck"] },
    { component: IgxPaginatorComponent, parents: [IgxGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent], contentQueries: [], methods: ["nextPage", "previousPage", "paginate", "ngDoCheck"] }
];
