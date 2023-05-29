import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'code-blog',
  templateUrl: './code-blog.component.html',
  styleUrls: ['./code-blog.component.css']
})
export class CodeBlogComponent {
codeBlogList !:Observable<any>;
codeBlogList1:any=[];
constructor(private _fireStore:Firestore) {}

ngOnInit():void{
  this.GetAllCodeBlog();
}


GetAllCodeBlog(){
  const instance=collection(this._fireStore,'SkillDocuments');
  collectionData(instance,{idField:'id'}).subscribe((Data:any)=>{
    this.codeBlogList1=Data;
  })
 // this.codeBlogList= collectionData(instance,{idField:'id'});


}

}
