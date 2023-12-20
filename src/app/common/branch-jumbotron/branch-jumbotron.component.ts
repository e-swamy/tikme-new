import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-branch-jumbotron',
  templateUrl: './branch-jumbotron.component.html',
  styleUrls: ['./branch-jumbotron.component.scss']
})
export class BranchJumbotronComponent implements OnInit {
  @ViewChild('selectBranchLocation', { static: true }) selectBranchLocation!: ElementRef;

  constructor(private modalService: NgbModal) { }
  
  ngOnInit() { }

  selectedBranchLocationModal(selectBranchLocation: any) {
    this.modalService.open(selectBranchLocation, { size: 'md', scrollable: true, centered: true,backdropClass:'bg-blur-4 tikme-backdrop tikme-backdrop-bg', modalDialogClass: 'tikme-modal' })
  }

}
