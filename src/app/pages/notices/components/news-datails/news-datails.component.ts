import { Component, OnInit } from '@angular/core';
import Notice from '../../../../models/noticeModel';
import { NoticesService } from '../../../../services/notices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-datails',
  standalone: true,
  imports: [],
  templateUrl: './news-datails.component.html',
  styleUrl: './news-datails.component.css'
})
export class NewsDatailsComponent implements OnInit{
  idNotice:string = '';
  ngOnInit(): void {
    this.idNotice = this.route.snapshot.paramMap.get('id') || '';

    if(this.idNotice) this.getNoticeById();
  }
  constructor(private route: ActivatedRoute, private noticeService: NoticesService){}
  newsDetail: Notice = new Notice();

  getNoticeById(){
    this.noticeService.getNoticeById(this.idNotice).subscribe({
      next: (notice) => this.newsDetail = notice
    });
  }

}
