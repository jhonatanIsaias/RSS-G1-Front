import Category from "./categoryModel";

export default class Notice {
  notice_id:string;
  title: string | null;
  description: string | null | undefined;
  url_image: string | null | undefined;
  pub_date:  string | null | undefined;
  category: Category

  constructor() {
    this.notice_id = '',
    this.title = '';
    this.description = '';
    this.url_image = '';
    this.pub_date = '';
    this.category = {
      categoryId:'',
      name:'',
    };

  }
}
