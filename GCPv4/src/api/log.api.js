import Axios from 'axios'

export function getLog(){
    return Axios.get("http://10.0.3.2:3000/log").then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data
    })
}

export function createLog(product_name,amount,user){
    return Axios.post("http://10.0.3.2:3000/log",{
        "product_name":product_name,
        "amount":amount,
        "user":user,
    }).then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data
    })
}