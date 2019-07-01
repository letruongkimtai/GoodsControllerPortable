import Axios from 'axios'


//===========================Add Product=======================================//

export function getBrand() {
    return Axios.get("http://10.0.3.2:3000/brand").then(res => {
        console.log('==================result==================');
        console.log(res.data);
        console.log('==========================================');
        return res.data;
    }).catch(err => {
        console.log(err);
        return err;
    });
}
export function getType() {
    return Axios.get("http://10.0.3.2:3000/product-type").then(res => {
        console.log('==================Api result=======================');
        console.log(res.data);
        console.log('==================Render result====================');
        return res.data;
    }).catch(err => {
        console.log(err);
        return err;
    });
}
export function getStorage(){
    return Axios.get("http://10.0.3.2:3000/storage").then(res=>{
        console.log('===============Api result=====================');
        console.log(res.data);
        console.log('===============Render result=====================');
        return res.data;
    }).catch(err=>{
        console.log(err);
        return err;
    })
}
export function addProduct(name,amount, type, brand, area) {
    return Axios.post("http://10.0.3.2:3000/product",
        {
            "product_name": name,
            "amount": amount,
            "prTypeTypeId": type,
            "prBrandBrandId": brand,
            "storageId":area,
        }
    ).then(res => {
        console.log('==================Api result=======================');
        console.log(res.data);
        console.log('==================Render result====================');
        return res.data;
    }).catch(err => {
        console.log(err);
        return err;
    })
}

//=============================show Product=======================================//

export function showProducts() {
    return Axios.get("http://10.0.3.2:3000/product").then(res => {
        console.log('==================Api result=======================');
        console.log(res.data);
        console.log('==================Render result====================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}

//=============================Show Product by Id================================//
export function productById(id){
    return Axios.get("http://10.0.3.2:3000/product/"+id).then(res=>{
        console.log('================Api result====================');
        console.log(res.data);
        console.log('================Render result====================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}

//=============================Take Product with amount================================//

export function takeProduct(id,taken){
    return Axios.put("http://10.0.3.2:3000/product/"+id,{
        "amount":taken,
    }).then(res=>{
        console.log('===============Api result=====================');
        console.log(res.data);
        console.log('===============Render result=====================');
        return res.data
    }).catch(err=>{
        console.log(err);
    })
}

//=============================Out of stock================================//
export function outOfStockItems(){
    return Axios.get("http://10.0.3.2:3000/product/OutOfStock").then(res=>{
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        return res.data;
    }).catch(err=>{
        console.log(err);
    })
}

////=============================Update product================================//
export function updateProduct(id,amount){
    return Axios.put("http://10.0.3.2:3000/product/"+id,{
        "amount":amount,
    }).then(res=>{
        console.log('===============Api result=====================');
        console.log(res.data);
        console.log('===============Render result=====================');
        return res.data
    }).catch(err=>{
        console.log(err);
    })
}
export function getProductAmount(id){
    return Axios.get("http://10.0.3.2:3000/product/"+id).then(res=>{
        console.log('================Api result====================');
        console.log(res.data.amount);
        console.log('================Render result====================');
        return res.data.amount;
    }).catch(err=>{
        console.log(err);
    })
}