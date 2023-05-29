import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Firestore,addDoc,collection,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-docuyment-upload',
  templateUrl: './docuyment-upload.component.html',
  styleUrls: ['./docuyment-upload.component.css']
})
export class DocuymentUploadComponent {
  documentEntry:FormGroup;
  private basePath = '/uploads';
  files:any;
  res:any;
  constructor(private _fb:FormBuilder,private _fireStore:Firestore,private _http:HttpClient) {
   this.documentEntry=_fb.group({
    title:'',
    description:'',
    code:'',
   })
  }

  Save(){
   const instance=collection(this._fireStore,'SkillDocuments');
   addDoc(instance,this.documentEntry.value).then((aData)=>{
    console.log("Save Successfully !!!");
   }).then((error)=>{
     console.log(error);
   })
   this.documentEntry.reset();


  }
  Reset(){
    this.documentEntry.reset();
  }

ngOnInit():void{

}

SelectFile(e:any){
 this.files=e.target.files;
}

OnSave(){

let fromData=new FormData();
for (var file of this.files) {
     fromData.append('files',file);
}


this._http.post("https://localhost:44328/api/Demo/Upload",fromData).subscribe(aData=>{
  console.log(aData);

})
}

}
