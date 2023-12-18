import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private modalService: NgbModal, private offcanvasService: NgbOffcanvas) { }

  loggedIn: boolean = false;
  sendOtpEvent: boolean = false;

  getOtpFun() {
    this.sendOtpEvent = true
  }

  authenticationFun() {
    this.router.navigate(['restaurants/branch']);
    this.offcanvasService.dismiss();
  }

  logoutFun() {
    this.loggedIn = false
    this.router.navigate(['.']);
  }

  openSearchModal(searchModalContent: TemplateRef<any>) {
    this.modalService.open(searchModalContent, {
      ariaLabelledBy: 'modal-basic-title',
      scrollable: true,
      centered: true,
      modalDialogClass: 'tikme-modal'
    })
  }

  openLoginForm(content: any) {
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'tikme-offcanvas rounded-start rounded-start-4 border-0'
    });
  }
}
