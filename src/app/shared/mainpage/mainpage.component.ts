import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"Tamil",value:"tamil"},
    {name:"Telugu",value:"telugu"},
    {name:"Hindi",value:"hindi"}

  ]

  constructor(private router:Router,private route:ActivatedRoute,public userService: UserService,private ts:TranslateService){
    this.ts.use(this.lang)
}

  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate([url],{relativeTo:this.route})
    }
  }
  logout(){
    this.router.navigateByUrl('/login')
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }


  changeLang():void{
     this.ts.use(this.lang)
  }
}

