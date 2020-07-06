import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TeaModel} from '../Models/TeaModel';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  //TeaModel: TeaModel[];
    constructor(private http: HttpClient) { }

  InsertTeaDetails(userdata){
    console.log(userdata);
   return this.http.post<any>(environment.baseApiUrl + "api/Tea/InsertTeaInfo", userdata);
  }

  GetAllTeaInfo(){
    return this.http.get<any>(environment.baseApiUrl + "api/Tea/GetTeaInfo");
  }

  DeleteTeaById(Id :any){
    return this.http.delete<any>(environment.baseApiUrl +"api/Tea/DeleteTeaById?Id="+ Id );
  }

  //Update Section
  EditById(Id :any){
    return this.http.get<any>(environment.baseApiUrl +"api/Tea/Edit?Id="+ Id );
  }

  // UpdateById(Id :any,userdata){
  //   debugger;
  //   return this.http.put<any>(environment.baseApiUrl +"api/Tea/UpdateTeaInfo?Id="+ Id,userdata);
  // }
}
