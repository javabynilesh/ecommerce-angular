import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {

  category:any;
  @Input() selectedSection: any;


  ngOnInit() {
   this.category = navigation;
   console.log("selected section=",this.selectedSection);
  }
  
  constructor(private router:Router){
    //this.category=navigation
  }

  navigateToProducts=(path:String)=>{
    this.router.navigate([path])
    
  }

}
