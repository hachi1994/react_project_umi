import React, { Suspense } from "react"
import Child from "./child"
import { E } from "./child"
const AsyncComp = React.lazy(() => {
    return import('./child')

})

function TestAsyncComp() {
    return (
        <>
            <div>testAsyncComp</div>
            <E>
                <Suspense fallback={<div>loading...</div>}>
                    <AsyncComp />
                </Suspense>
            </E>
        </>
    )
}

export default TestAsyncComp