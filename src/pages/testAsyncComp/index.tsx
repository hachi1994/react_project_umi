import React, { createContext, Suspense } from "react"
import { E } from "./child"
import { context as c } from "./context"
const AsyncComp = React.lazy(() => {
    return import('./child')

})
const Context = c.c1

function TestAsyncComp() {
    return (
        <>
            <div>testAsyncComp</div>
            <Context.Provider value="wade">
                <E></E>
            </Context.Provider>
            <E>
                <Suspense fallback={<div>loading...</div>}>
                    <AsyncComp />
                </Suspense>
            </E>
        </>
    )
}

export default TestAsyncComp