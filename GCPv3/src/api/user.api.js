import Axios from 'axios'

export function login(username,password){
    return Axios.post("http://10.0.3.2:3000/login",
    {
        "username":username,
        "password":password
    }
    ).then(res=>{
        console.log('==================result==================');
        console.log(res.data);
        console.log('==========================================');
        return res.data;
    }).catch(err=>{
        console.log(err)
        return err;
    })
}