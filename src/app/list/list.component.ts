import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { MyinfoService } from '../myinfo.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  allInfo: Info[] = [];
  eleteModal: any;
  idTodelete: string = '';
  constructor(private mi: MyinfoService) {}
  get() {
    this.mi.get().subscribe((data) => {
      this.allInfo = data;
    });
  }
  ngOnInit(): void {
    this.get();
  }
  delete(id: string) {
    this.mi.delete(id).subscribe((data) => {
      this.allInfo = this.allInfo.filter((_) => _.id != id);
    });
  }
}
