import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from '../info';
import { MyinfoService } from '../myinfo.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  infoForm: Info = {
    id: '',
    name: '',
    publishedBooks: '',
    famousBook: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mis: MyinfoService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }
  getById(id: string) {
    this.mis.getById(id).subscribe((data) => {
      this.infoForm = data;
    });
  }
  update() {
    this.mis.update(this.infoForm).subscribe({
      next: (data) => {
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
