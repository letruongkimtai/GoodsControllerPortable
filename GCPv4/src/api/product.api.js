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
export function addProduct(name, area, amount, type, brand, ) {
    return Axios.post("http://10.0.3.2:3000/product",
        {
            "product_name": name,
            "area": area,
            "amount": amount,
            "prTypeTypeId": type,
            "prBrandBrandId": brand,
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