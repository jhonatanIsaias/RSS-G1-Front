import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../../../services/notices.service';
import Notice from '../../../../models/noticeModel';
import { NgFor } from '@angular/common';
import { FormLoginService } from '../../../../services/form-login.service';
import { Router } from '@angular/router';
import Category from '../../../../models/categoryModel';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-news-view',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './news-view.component.html',
  styleUrl: './news-view.component.css'
})
export class NewsViewComponent implements OnInit {

  noticeData : Notice[] = [];
  filteredNews:Notice[] = [];
  categoryData:Category[] = [];
  selectedCategory:string = '';
  constructor(private noticesService : NoticesService,private loginService: FormLoginService, private router: Router){

  }
  ngOnInit(): void {
    this.getNotices();
    this.getCategories();
  }

  getNotices(){

    this.noticesService.getNotices().subscribe({
      next: (notices) =>{
       this.noticeData = notices;
       this.filteredNews = this.noticeData;
      }

    })
  }

  getCategories(){

    this.noticesService.getCategoryNotices().subscribe({
      next: (categories) =>{
       this.categoryData = categories;
      }

    })
  }
  filterNews(){

     if(this.selectedCategory !== ''){
      this.filteredNews =  this.noticeData.filter((n) => this.selectedCategory == n.category.categoryId);
     }
     else{
      this.filteredNews = this.noticeData;
     }


     this.getCategories();

  }
  goToDetail(newsId:string){
    this.router.navigate(['/news',newsId]);
  }

  buttonLogout(){
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
