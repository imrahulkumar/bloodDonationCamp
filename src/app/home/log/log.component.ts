import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.css"]
})
export class LogComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
bloodAplus:number;
bloodBplus:number;
bloodOplus:number;
bloodABplus:number;
bloodAminus:number;
bloodBminus:number;
bloodOminus:number;
bloodABminus:number;
  rForm: FormGroup;
  isformcorrect:boolean =false;
  isAvailable:boolean=false;
  ngOnInit() {
    this.rForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      addressName:["",Validators.required],
      bloodgroup:["",Validators.required],
      bottle:["",Validators.required],
  })
  this.gettingLocalStorageValue();
  }
  bloodgroupAdd(rForm)
  {
    if(!rForm.valid)
    {
       return this.isformcorrect = true;
    }
   if(rForm.value.bloodgroup == "A+")
   {
       if(this.bloodAplus < rForm.value.bottle)
       {
        $("#bresponse").modal('show');
        this.isAvailable = false;
       }
       else{
        $("#bresponse").modal('show');
        this.isAvailable = true;
        this.rForm.reset();
        this.bloodAplus -= rForm.value.bottle; 
       }
   }
   else if(rForm.value.bloodgroup == "B+")
   {
      if(this.bloodBplus < rForm.value.bottle)
      {
       $("#bresponse").modal('show');
       this.isAvailable = false;
      }
      else{
       $("#bresponse").modal('show');
       this.isAvailable = true;
       this.rForm.reset();
       this.bloodBplus -= rForm.value.bottle; 
      }
   }
   else if(rForm.value.bloodgroup == "O+")
   {
    if(this.bloodOplus < rForm.value.bottle)
    {
     $("#bresponse").modal('show');
     this.isAvailable = false;
    }
    else{
     $("#bresponse").modal('show');
     this.isAvailable = true;
     this.rForm.reset();
     this.bloodOplus -= rForm.value.bottle; 
    }
   }
   else if(rForm.value.bloodgroup == "AB+")
   {
    if(this.bloodABplus < rForm.value.bottle)
    {
     $("#bresponse").modal('show');
     this.isAvailable = false;
    }
    else{
     $("#bresponse").modal('show');
     this.isAvailable = true;
     this.rForm.reset();
     this.bloodABplus -= rForm.value.bottle; 
    }
   }
   else if(rForm.value.bloodgroup == "A-")
   {
    if(this.bloodAminus < rForm.value.bottle)
    {
     $("#bresponse").modal('show');
     this.isAvailable = false;
    }
    else{
     $("#bresponse").modal('show');
     this.isAvailable = true;
     this.rForm.reset();
     this.bloodAminus -= rForm.value.bottle; 
    }
   }
   else if(rForm.value.bloodgroup == "B-")
   {
    if(this.bloodBminus < rForm.value.bottle)
    {
     $("#bresponse").modal('show');
     this.isAvailable = false;
    }
    else{
     $("#bresponse").modal('show');
     this.isAvailable = true;
     this.rForm.reset();
     this.bloodBminus -= rForm.value.bottle; 
    }
   }
   else if(rForm.value.bloodgroup == "O-")
   {
    if(this.bloodOminus < rForm.value.bottle)
    {
     $("#bresponse").modal('show');
     this.isAvailable = false;
    }
    else{
     $("#bresponse").modal('show');
     this.isAvailable = true;
     this.rForm.reset();
     this.bloodOminus -= rForm.value.bottle; 
    }
   }
   else if(rForm.value.bloodgroup == "AB-")
   {   
    if(this.bloodABminus < rForm.value.bottle)
    {
     $("#bresponse").modal('show');
     this.isAvailable = false;
    }
    else{
     $("#bresponse").modal('show');
     this.isAvailable = true;
     this.rForm.reset();
     this.bloodABminus -= rForm.value.bottle; 
    }
   }
   this.settingLocalStorageValue();
  }

  gettingLocalStorageValue()
{
  this.bloodAplus = Number(localStorage.getItem("bloodAplus"));
  this.bloodBplus = Number(localStorage.getItem("bloodBplus"));
  this.bloodOplus= Number(localStorage.getItem("bloodOplus"));
  this.bloodABplus= Number(localStorage.getItem("bloodABplus"));
  this.bloodAminus = Number(localStorage.getItem("bloodAminus"));
  this.bloodBminus = Number(localStorage.getItem("bloodBminus"));
  this.bloodOminus = Number(localStorage.getItem("bloodOminus"));
  this.bloodABminus = Number(localStorage.getItem("bloodABminus"));
}
settingLocalStorageValue()
{
  localStorage.setItem("bloodAplus", String(this.bloodAplus));
  localStorage.setItem("bloodBplus", String(this.bloodBplus));
  localStorage.setItem("bloodOplus", String(this.bloodOplus));
  localStorage.setItem("bloodABplus", String(this.bloodABplus));
  localStorage.setItem("bloodAminus", String(this.bloodAminus));
  localStorage.setItem("bloodBminus", String(this.bloodBminus));
  localStorage.setItem("bloodOminus", String(this.bloodOminus));
  localStorage.setItem("bloodABminus", String(this.bloodABminus));
}
}
