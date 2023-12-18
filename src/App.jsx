
// import React from 'react'
// import Dashboard from './Dashboard'
// import Login from './Loging'

// const App = () => {
//   return (
//     <>
//     <Login/>
//     {/* <Dashboard/> */}
//     </>
//   )
// }

// export default App



import React from 'react'
import Dashboard from './Dashboard'
import Login from './Loging'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>
   
  )
}

export default App






















