import Axios from 'axios'

export function getDeliveryOrder() {
    return Axios.get("http://10.0.3.2:3000/delivery").then(res => {
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

export function getDeliveryDetail(id) {
    return Axios.get("http://10.0.3.2:3000/delivery-detail/" + id).then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}

export function updateDelivery(id,note,status){
    return Axios.put("http://10.0.3.2:3000/delivery/" + id,{
        "note":note,
        "status":status
    }).then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}

export function updateDeliveryDetail(id,status){
    return Axios.put("http://10.0.3.2:3000/delivery-detail/" + id,{
        "quality":status
    }).then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}