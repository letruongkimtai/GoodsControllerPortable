import Axios from 'axios'

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
        console.log('==================result==================');
        console.log(res.data);
        console.log('==========================================');
        return res.data;
    }).catch(err => {
        console.log(err);
        return err;
    });
}
export function addProduct(name, area, amount,type,brand, ) {
    return Axios.post("http://10.0.3.2:3000/product",
        {
            "product_name":name,
            "area":area,
            "amount":amount,
            "prTypeTypeId":type,
            "prBrandBrandId":brand,
        }
    ).then(res => {
        console.log('==================result==================');
        console.log(res);
        console.log('==========================================');
        return res;
    }).catch(err => {
        console.log(err);
        return err;
    })
}