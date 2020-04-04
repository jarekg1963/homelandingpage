import { Component, OnInit, Input } from '@angular/core';
import { SocialMedia } from '../SocialMedia';

@Component({
  selector: 'ces-social-med',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
   @Input() facebook: SocialMedia;
   @Input() linkedIn: SocialMedia;




  // facebookLink:string = "https://www.facebook.com/";

  // linkedInLink:string = "'https://www.linkedin.com/in/jaroslaw-granat-282ab311/'";





  constructor() { }

  ngOnInit(): void {
  }

}
