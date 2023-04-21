import ChildC from './ChildC'
import { useContext } from 'react'
import { UserIdContext } from './ChildA'

export default function ChildB() {

    const userId = useContext(UserIdContext)

    return (
        <>
            <h4>Child B works</h4>
            <h6>{userId}</h6>
            <ChildC />
        </>
    )
}