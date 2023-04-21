import { createContext } from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC';

const UserIdContext = createContext();

export default function ChildA() {

    const userId = '4948JDFJFK'
    return (
        <>
            <h4>Child A works</h4>
            <UserIdContext.Provider value={userId}>
            <ChildB />
            </UserIdContext.Provider>

           
        </>
    )
}

export {UserIdContext};