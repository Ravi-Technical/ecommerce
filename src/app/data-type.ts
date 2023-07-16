export interface sellSignUp{
    name:string,
    password:string,
    email:string,
}

export interface sellLogin {
    email:string,
    password:string,
}

export interface addProductInterface {
  name:string,
  size:string,
  color:string,
  price:number;
  category:string,
  brand:string,
  image:string,
  discription:string,
  id:number
}

export interface userSignUp{
   name:string,
   email:string,
   mobile:number,
   password:string
}

export interface userLogin{
  email:string,
  password:string
}

export interface products {
  name:string,
  size:string,
  color:Array<string>,
  price:number;
  category:Array<string>,
  brand:Array<string>,
  image:string,
  discription:string,
  id:number
}







