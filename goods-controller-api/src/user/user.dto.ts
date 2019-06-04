export interface UserDTO{
    username:string,
    password:string,
    given_name:string,
    birthday:string,
    tel:string,
    address:string,
    citizen_id:string,
    department:string,
}
export interface UserRO{ //User Response Object
    user_id:string,
    password:string,
    given_name:string,
    birthday:string,
    tel:string,
    address:string,
    citizen_id:string,
    department:string,
    token?: string,
}