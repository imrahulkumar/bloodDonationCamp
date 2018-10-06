import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-bulb-activity",
  templateUrl: "./bulb-activity.component.html",
  styleUrls: ["./bulb-activity.component.css"]
})
export class BulbActivityComponent implements OnInit {
  constructor( private formBuilder: FormBuilder) { }
bloodAplus:any=3;
bloodBplus:any=8;
bloodOplus:any= 2;
bloodABplus:any = 5;
bloodAminus:any = 9;
bloodBminus:any = 6;
bloodOminus:any =8;
bloodABminus:any=3;
rForm: FormGroup;
isformcorrect:boolean= false;
  ngOnInit() {
    this.rForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      addressName:["",Validators.required],
      bloodgroup:["",Validators.required],
      bottle:["",Validators.required],
  })
  this.settingLocalStorageValue();
}

  bloodDonateForm()
  {
    $("#bloodDonorForm").modal('show');
  }
  bloodgroupAdd(rForm)
  {
    if(!rForm.valid)
    {
       return this.isformcorrect = true;
    }
   if(rForm.value.bloodgroup == "A+")
   {
    this.bloodAplus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "B+")
   {
    this.bloodBplus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "O+")
   {
    this.bloodOplus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "AB+")
   {
    this.bloodABplus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "A-")
   {
    this.bloodAminus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "B-")
   {
    this.bloodBminus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "O-")
   {
    this.bloodOminus += rForm.value.bottle;
   }
   else if(rForm.value.bloodgroup == "AB-")
   {
    this.bloodABminus += rForm.value.bottle;
   }
   $("#bloodDonorForm").modal('hide');
   this.settingLocalStorageValue();
  }
settingLocalStorageValue()
{
  localStorage.setItem("bloodAplus", this.bloodAplus);
  localStorage.setItem("bloodBplus", this.bloodBplus);
  localStorage.setItem("bloodOplus", this.bloodOplus);
  localStorage.setItem("bloodABplus", this.bloodABplus);
  localStorage.setItem("bloodAminus", this.bloodAminus);
  localStorage.setItem("bloodBminus", this.bloodBminus);
  localStorage.setItem("bloodOminus", this.bloodOminus);
  localStorage.setItem("bloodABminus", this.bloodABminus);
}
 

}
