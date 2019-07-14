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

//===========================Push Orders=======================================//
export function createOrder(status,userID){
    return Axios.post("http://10.0.3.2:3000/order",{
        "status":status,
        "userUserId":userID,
    }).then(res=>{
        console.log('====================================');
        console.log(res.data.id);
        console.log('====================================');
        return res.data.id
    }).catch(err=>{
        console.log(err)
        return err;
    })
}

export function pushOrder(orderID,productId,amount){
    return Axios.post("http://10.0.3.2:3000/order-detail",{
        "orderId":orderID,
        "productProductId":productId,
        "quantity":amount
    }).then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
    }).catch(err=>{
        console.log(err);
        return err;
    })
}

export function getOrderDetail(id) {
    return Axios.get("http://10.0.3.2:3000/order-detail/" + id).then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}