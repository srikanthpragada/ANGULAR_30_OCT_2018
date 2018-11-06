import { Component } from '@angular/core';

class Entry {
    num : number;
    count : number;
    result : number;
}

@Component({
    selector: 'st-table',
    templateUrl: './table.component.html'
})
export class TableComponent {
    numTable : Entry[] = [];
    generateTable(num: number, count : number) : void 
    {
         this.numTable = [];
         for(var i = 1; i <= count ; i++)
         {
            var e = new Entry()
            e.num = num;
            e.count = i;
            e.result = num * i;
            this.numTable.push(e)
         }
    }
}


 