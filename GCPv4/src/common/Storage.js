import AsyncStorage from '@react-native-community/async-storage';

export async function saveData(key, storedData){
    try{
        await AsyncStorage.setItem(key,JSON.stringify(storedData));
        console.log('Save OK')
    }catch(e){
        console.log(e);
    }
}

export async function getData(key){
    try{
        return await AsyncStorage.getItem(key)
        .then(data => {
            const item = JSON.parse(data);
            console.log(item);
            return item
        });
    }catch(e){
        console.log(e);
    }
}
