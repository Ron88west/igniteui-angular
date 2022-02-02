/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { noUndefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { FilteringLogic, IForOfState, SortingDirection, FilteringExpressionsTree, IgxColumnComponent, IFilteringExpressionsTree } from 'igniteui-angular';
import { BehaviorSubject, Observable } from 'rxjs';

const DATA_URL = 'https://cors-anywhere.herokuapp.com/services.odata.org/V4/Northwind/Northwind.svc/Products_by_Categories';
const EMPTY_STRING = '';
const NULL_VALUE = null;
// eslint-disable-next-line no-shadow
export enum FILTER_OPERATION {
    CONTAINS = 'contains',
    STARTS_WITH = 'startswith',
    ENDS_WITH = 'endswith',
    EQUALS = 'eq',
    DOES_NOT_EQUAL = 'ne',
    DOES_NOT_CONTAIN = 'not contains',
    GREATER_THAN = 'gt',
    LESS_THAN = 'lt',
    LESS_THAN_EQUAL = 'le',
    GREATER_THAN_EQUAL = 'ge'
}

@Injectable()
export class RemoteFilteringService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private _http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(
        filteringArgs?: any,
        sortingArgs?: any, cb?: (any) => void, shouldEmit: any = true): any {
        return this._http.get(this.buildDataUrl(
            filteringArgs, sortingArgs)).subscribe((data: any) => {
                if(shouldEmit) {
                    this._remoteData.next(data.value);
                }
                if (cb) {
                    cb(data);
                }
            });
    }

    public getColumnData(column: IgxColumnComponent,
        columnExprTree: IFilteringExpressionsTree,
        done: (colVals: any[]) => void) {
        this.getData(undefined, undefined, (data) => {
            console.log(columnExprTree);
            const d = data.value;
            const values = d.map(record => record[column.field]);
            done(values)
        }, false);
    }

    private buildDataUrl(filteringArgs: any, sortingArgs: any): string {
        let baseQueryString = `${DATA_URL}?`;
        let scrollingQuery = EMPTY_STRING;
        let orderQuery = EMPTY_STRING;
        let filterQuery = EMPTY_STRING;
        let query = EMPTY_STRING;
        let filter = EMPTY_STRING;

        if (sortingArgs) {
            orderQuery = this._buildSortExpression(sortingArgs);
        }

        if (filteringArgs && filteringArgs.length > 0) {
            filteringArgs.forEach((columnFilter) => {
                if (filter !== EMPTY_STRING) {
                    filter += ` ${FilteringLogic[columnFilter.operator].toLowerCase()} `;
                }

                filter += this._buildAdvancedFilterExpression(
                    columnFilter.filteringOperands,
                    columnFilter.operator);
            });

            filterQuery = `$filter=${filter}`;
        }


        query += (orderQuery !== EMPTY_STRING) ? `&${orderQuery}` : EMPTY_STRING;
        query += (filterQuery !== EMPTY_STRING) ? `&${filterQuery}` : EMPTY_STRING;
        query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

        baseQueryString += query;

        return baseQueryString;
    }

    private _buildAdvancedFilterExpression(operands, operator): string {
        let filterExpression = EMPTY_STRING;
        operands.forEach((operand, index) => {
            if (operand instanceof FilteringExpressionsTree) {
                if (index > 0) {
                    filterExpression += ` ${FilteringLogic[operator].toLowerCase()} `;
                }
                filterExpression += this._buildAdvancedFilterExpression(
                    operand.filteringOperands,
                    operand.operator
                );
                return filterExpression;
            }

            const value = operand.searchVal;
            const isNumberValue = (typeof (value) === 'number') ? true : false;
            const filterValue = (isNumberValue) ? value : `'${value}'`;
            const fieldName = operand.fieldName;
            let filterString;

            if (filterExpression !== EMPTY_STRING) {
                filterExpression += ` ${FilteringLogic[operator].toLowerCase()} `;
            }

            switch (operand.condition.name) {
                case 'contains': {
                    filterString = `${FILTER_OPERATION.CONTAINS}(${fieldName}, ${filterValue})`;
                    break;
                }
                case 'startsWith': {
                    filterString = `${FILTER_OPERATION.STARTS_WITH}(${fieldName},${filterValue})`;
                    break;
                }
                case 'endsWith': {
                    filterString = `${FILTER_OPERATION.ENDS_WITH}(${fieldName},${filterValue})`;
                    break;
                }
                case 'equals': {
                    filterString = `${fieldName} ${FILTER_OPERATION.EQUALS} ${filterValue} `;
                    break;
                }
                case 'doesNotEqual': {
                    filterString = `${fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} ${filterValue} `;
                    break;
                }
                case 'doesNotContain': {
                    filterString = `${FILTER_OPERATION.DOES_NOT_CONTAIN}(${fieldName},${filterValue})`;
                    break;
                }
                case 'greaterThan': {
                    filterString = `${fieldName} ${FILTER_OPERATION.GREATER_THAN} ${filterValue} `;
                    break;
                }
                case 'greaterThanOrEqualTo': {
                    filterString = `${fieldName} ${FILTER_OPERATION.GREATER_THAN_EQUAL} ${filterValue} `;
                    break;
                }
                case 'lessThan': {
                    filterString = `${fieldName} ${FILTER_OPERATION.LESS_THAN} ${filterValue} `;
                    break;
                }
                case 'lessThanOrEqualTo': {
                    filterString = `${fieldName} ${FILTER_OPERATION.LESS_THAN_EQUAL} ${filterValue} `;
                    break;
                }
                case 'empty': {
                    filterString = `length(${fieldName}) ${FILTER_OPERATION.EQUALS} 0`;
                    break;
                }
                case 'notEmpty': {
                    filterString = `length(${fieldName}) ${FILTER_OPERATION.GREATER_THAN} 0`;
                    break;
                }
                case 'null': {
                    filterString = `${fieldName} ${FILTER_OPERATION.EQUALS} ${NULL_VALUE}`;
                    break;
                }
                case 'notNull': {
                    filterString = `${fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} ${NULL_VALUE}`;
                    break;
                }
            }

            filterExpression += filterString;
        });

        return filterExpression;
    }

    private _buildSortExpression(sortingArgs): string {
        let sortingDirection: string;
        switch (sortingArgs.dir) {
            case SortingDirection.None: {
                sortingDirection = EMPTY_STRING;
                break;
            }
            default: {
                sortingDirection = SortingDirection[sortingArgs.dir].toLowerCase();
                break;
            }
        }

        return `$orderby=${sortingArgs.fieldName} ${sortingDirection}`;
    }
}
