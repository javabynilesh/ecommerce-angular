import { Component } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    filterData:any;
    singleFilterData:any;
    menPants:any;

    constructor(private router:Router, private activatedRoute:ActivatedRoute){
    }

    ngOnInit(){
      this.filterData = filters;
      this.singleFilterData = singleFilter;
      this.menPants = mensPantsPage1;
      console.log("this.menPants:-",this.menPants);
    }

    //multiple checkbox select
    handleMultipleSelectFilter(value:string, sectionId:string){
      console.log("value:",value," |sectionId:",sectionId);
      const queryParams = {...this.activatedRoute.snapshot.queryParams};
      console.log("query params:",queryParams);
      //this.router.navigate([],{queryParams});

      const filterValues = queryParams[sectionId]?
                                      queryParams[sectionId].split(',')
                                      :[];

      const valueIndex = filterValues.indexOf(value);
      if(valueIndex !== -1){
        filterValues.splice(valueIndex,1); //used for remove and add element

      }else{
        filterValues.push(value);
      }

      if(filterValues.length > 0 ){
        queryParams[sectionId] = filterValues.join(",");
      }else{
        delete queryParams[sectionId];
      }

      this.router.navigate([],{queryParams});
    }

    //single radio button select
    handleSingleSelectFilter(value:string, sectionId:string){
      const queryParams = {...this.activatedRoute.snapshot.queryParams};
      console.log("query params:",queryParams);
      queryParams[sectionId] = value;
      this.router.navigate([],{queryParams});
    }



}
