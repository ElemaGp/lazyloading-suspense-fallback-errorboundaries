import "./home.css"
import React, { lazy, Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../ErrorFallback";
// import LargeImages from "../../components/largeImages/LargeImages"
const LargeImages = lazy(()=>import("../../components/largeImages/LargeImages"));

const Home = () => {
  return (
    <div className="homeContainer">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
        <Suspense fallback={<div>Loading...</div>}>
            <LargeImages />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Home