import Axios from 'axios'


//===========================Show Orders=======================================//
export function showOrders(){
    return Axios.get("http://10.0.3.2:3000/order").then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}