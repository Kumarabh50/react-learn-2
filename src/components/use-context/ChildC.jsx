import { useContext } from "react"
import { UserIdContext } from "./ChildA";

export default function ChildC() {

    const userId = useContext(UserIdContext);

    return (
        <>
            <h4>Child C works</h4>
            <h6>{userId}</h6>
        </>
    )
}