import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotivicationService {

  constructor(public toastr: ToastrService) { }


public successAdd(message,title){
  this.toastr.success(message, title);
}
public successUpdate(message,title){
  this.toastr.success(message, title);
}
public successDelete(message,title){
  this.toastr.success(message, title);
}
public cancleUpdate(message,title){
  this.toastr.warning(message, title);
}


}
