import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from '../info';
import { MyinfoService } from '../myinfo.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  infoForm: Info = {
    id: '',
    name: '',
    publishedBooks: '',
    famousBook: '',
  };
  ngOnInit(): void {}
  constructor(private mis: MyinfoService, private router: Router) {}
  create() {
    this.mis.create(this.infoForm).subscribe({
      next: (data) => {
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
