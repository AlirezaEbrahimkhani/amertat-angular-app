import { Component, OnInit, Input } from "@angular/core";
import { element } from 'protractor';

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  parts1 :any[]=[];
  @Input() parts: any[]=[{ title: "Tehran" }, { title: "Zanjan" },{title: "Karaj"}];
  @Input() cities: any[] = ["Tehran" , "Zanjan"];
  @Input() types: any[] = ["Hotel","Restaurant"];

  constructor() {
  }

  ngOnInit() {
    this.parts.forEach(element=>{
      this.parts1.push(element)
    })
  }


  filter(checked,item){
    if(checked.checked){
      this.parts1.forEach(element=>{        
        if(element.title ==item)
{
  this.parts.push(element)
}
      })
    }
    else if(!checked.checked){

      this.parts.forEach((element,index)=>{
        
        if(element.title == item)
          {     
            this.parts.splice(index,1);
          }
      })
    }
        
    
  }
}
