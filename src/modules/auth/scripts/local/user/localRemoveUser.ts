import { NavigationProp } from "@react-navigation/native"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import sleep from "@utils/sleep"
import storage from "@utils/storage"
import resetNavigation from "@utils/resetNavigation"
import { setAuthLogout } from "../../../reducers/authReducer"

export default async function localRemoveUser(dispatch: DispatchType, navigation: NavigationProp<any>){
    try {
        resetNavigation(navigation)

        await sleep(500)

        dispatch(setAuthLogout())
        
        await storage.clear()
    } catch (error) {
        info.error('localRemoveUserData', error)
    }
}  