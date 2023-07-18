import React from "react"
import CollegeDataTable from "../components/CollegeDatatable"

const Colleges: React.FC = () => {
  return (
    <div className="colleges bg-[#0c0c0c] w-full h-[100%]">
      <CollegeDataTable/>
    </div>
  )
}

export default Colleges