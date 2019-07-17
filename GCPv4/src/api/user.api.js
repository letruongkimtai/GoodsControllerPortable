import Axios from 'axios'

export function login(username, password) {
    return Axios.post("http://10.0.3.2:3000/login",
        {
            "username": username,
            "password": password
        }
    ).then(res => {
        // console.log('==================result==================');
        // console.log(res.data);
        // console.log('==========================================');
        return res.data;
    }).catch(err => {
        return err;
    })
}

export function signUp(username, password, givenName, birthday, tel, address, ctzID, dpm) {
    return Axios.post("http://10.0.3.2:3000/SignUp",
        {
            "username": username,
            "password": password,
            "given_name": givenName,
            "birthday": birthday,
            "tel": tel,
            "address": address,
            "citizen_id": ctzID,
            "department": dpm,
        }
    ).then(res=>{
        // console.log('==================result==================');
        // console.log(res.data);
        // console.log('==========================================');
    }).catch(err=>{
        console.log(err);
        return err;
    })
}

export function getUser(id){
    return Axios.get("http://10.0.3.2:3000/User/"+id).then(result=>{
        // console.log('====================================');
        // console.log(result.data);
        // console.log('====================================');
        return result.data
    })
}