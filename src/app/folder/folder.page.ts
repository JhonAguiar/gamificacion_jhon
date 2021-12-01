import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  error: any = [];
  loginForm : FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private authService : AuthService , private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      pass : ['', Validators.required]
    })
  }

  onSubmit(){
    this.authService.login(this.loginForm).subscribe((data : any) => {
      if(data.response == 200){
        sessionStorage.setItem('x-auth', JSON.stringify(data.data));
        this.router.navigate(["/inicio"]);
      }else{
        this.error = data.error; 
        this.router.navigate(["/folder/inbox"]);
      }
    });
  }

}
