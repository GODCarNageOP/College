import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../constants/collegedata';

const CollegeDataTable: React.FC = () => {
  return (
 <div className="collegedatatable h-[80%] p-2 bg-[#0c0c0c] text-white mx-10">
  <div className="datatable flex items-center justify-center h-[100vh] mt-52 mb-20">
  <DataGrid
      className="datagrid"
      rows={userRows}
      columns={userColumns}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
      style={{color: "white", backgroundColor: "transparent"}}
    />
 </div>
 </div>
  );
};

export default CollegeDataTable;
