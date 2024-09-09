export default class User {
  name: string | null;
  email: string | null | undefined;
  password: string | null | undefined;
  login:  string | null | undefined;
  phone:  string | null | undefined;
  birth_date:  string | null | undefined;
  status: boolean;
  categories: number[];

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.login = '';
    this.phone = '';
    this.birth_date = '';
    this.status = false;
    this.categories = [];
  }
}
