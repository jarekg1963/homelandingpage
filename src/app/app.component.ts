import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './components/about/about.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test1';
  belinjahighes: string;
  berlinjalow: string;
  imageLoaded: any;
  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }



ngOnInit(): void {
  this.belinjahighes = "../../assets/marathonBerlinJa.jpg";
  this.berlinjalow = "../../assets/marathonberlinjalow.jpg"
}

  buttonAbout() {

    const modalRef = this.modalService.open(AboutComponent, {  windowClass: 'my-class' });

    modalRef.result.then((result) => {

  }).catch((error) => {
    console.log(error);
  });
  }

  buttonServices() {
    const modalRef = this.modalService.open(ServicesComponent, {  windowClass: 'my-class' });
    modalRef.result.then((result) => {

  }).catch((error) => {
    console.log(error);
  });
  }


  buttonContact() {
    this.modalOptions = {
    //  backdrop : 'static',
      backdropClass: 'customBackdrop',
      windowClass: 'my-class'

    };
    this.modalService.open(ContactComponent, this.modalOptions).result.then((result) => {
     console.log("closed");
    }
    );

  }

  onThumbLoad($event) {}



  onImgLoad($event: { loaded: boolean; event: Event }) {
    this.imageLoaded = $event;
    console.log("Image Loaded", this.imageLoaded.loaded);
  }

}
