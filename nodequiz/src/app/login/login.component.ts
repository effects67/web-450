import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="jumbotron">
    <mat-card>
          <div class="wrapper">
                  <div class="frm-login">
                    <mat-card class="login-panel frm-login-panel">
                      <mat-card-header class="frm-login-header">
                        <mat-toolbar class="frm-login-toolbar">
                          NodeQuiz Login
                        </mat-toolbar>
                      </mat-card-header>
                
                      <mat-card-content class="frm-login-body">
                        <div class="login1">
                            <mat-form-field>
                                <input type="text" matInput placeholder="Employee ID">
                              </mat-form-field> <br>

                        </div>
                      </mat-card-content>
                
                      <mat-card-actions class="frm-login-actions">
                        <button mat-flat-button color="warn">Sign In</button>
                      </mat-card-actions>
                    </mat-card>
                  </div>
                </div>
    </mat-card>
  </div>
  `,
  styles: [`
  /* Form Styles */
.frm-login { width: 50%;  margin: 0 auto; }
.frm-login-panel { border: 1px solid black; }
.frm-login-header { background-color: rgb(209, 8, 68); }
.frm-login-toolbar { background-color: rgb(209, 8, 68); color: white; }
.frm-login-body { display: flex; flex-direction: column; margin-top: 15px; }
.btn-login { background-color: gray; color: white; }
.frm-login-actions { text-align: right; }
/* Global */



.login1 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
