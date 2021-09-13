import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  alert: boolean = false;
  constructor(private commonService: CommonService, private router: Router) { }
  personalDetails: any;
  professionalDetails: any;
  ngOnInit(): void {
    if (this.commonService.personalDetails) {
      this.personalDetails = this.commonService.personalDetails;
    }
    if (this.commonService.professionalDetails) {
      this.professionalDetails = this.commonService.professionalDetails;
    }
  }
  onFormSubmit() {
    // debugger;
    this.commonService.postForm().subscribe(data => {
      this.alert = true;
      alert(`Form submitted successfully 🙂`);
    })

  }
  goToProfessional() {
    this.router.navigate(['/two']);
  }
  closeAlert() {
    this.alert = false;
  }

}
