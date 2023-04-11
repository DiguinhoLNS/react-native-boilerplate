import AsyncStorage from "@react-native-async-storage/async-storage"
import info from "../info"

async function getItem<T>(key: string){
    try {
        const local = await AsyncStorage.getItem(key)
        if(!!local) return JSON.parse(local) as T
        else throw new Error(`No data found with key: ${key}`)
    } catch (error) {
        info.error('storage getItem', error)
        return null
    }
}

async function setItem<T>(key: string, value: T){
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        info.error('storage setItem', error)
    }
}

async function removeItem(key: string){
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        info.error('storage removeItem', error)
    }
}

async function clear(){
    try {
        await AsyncStorage.clear()
    } catch (error) {
        info.error('storage clear', error)
    }
}

const storage = {
    getItem, setItem, removeItem, clear
}

export default storage