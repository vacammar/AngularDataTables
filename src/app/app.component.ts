import {Component, OnInit} from '@angular/core';
import 'jquery';
import 'datatables.net';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public rowList = [];
    public columnList: string[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.initDtAjaxData();
        this.initDtStaticData();
    }

    private initDtAjaxData(): void {
        // @ts-ignore
        jQuery('#my-table').DataTable({
            processing: true,
            ajax: {
                url: 'https://jsonplaceholder.typicode.com/users',
                headers: {
                    type: 'GET'
                },
                dataSrc: (data) => {
                    return data;
                }
            },
            columns: [{title: 'Name', data: 'name'}, {title: 'Email', data: 'email'}],
        });
    }

    private initDtStaticData(): void {
        this.columnList = ['Name', 'Email'];
        // @ts-ignore
        this.rowList = [['Valerio', 'Cammarota'], ['Marco', 'Rossi'], ['Anna', 'Verdi']];
    }
}
