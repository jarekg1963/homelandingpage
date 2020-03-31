import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  gorzowhighes: string;
  gorzowlow: string;
  contacthighes: string;
  contactlow: string;
pobierowohighes: string;
pobierowolow: string;
  imageLoaded: any;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.gorzowhighes = "../../assets/contactGorzow.jpg";
    this.gorzowlow = "../../assets/contactgorzowlow.jpg"
    this.contacthighes = "../../assets/contactSkypeMailFacebook.JPG";
    this.contactlow = "../../assets/contactpobierowolow.jpg";
    this.pobierowohighes = "../../assets/contactPobierowo.jpg";
    this.pobierowolow = "../../assets/contactgorzowlow.jpg";

  }



  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  onThumbLoad($event) {}

  onImgLoad($event: { loaded: boolean; event: Event }) {
    // this.imageLoaded = $event;
    // console.log("Image Loaded", this.imageLoaded.loaded);
  }


  }






