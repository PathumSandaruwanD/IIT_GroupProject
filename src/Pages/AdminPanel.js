import React from 'react';
import topBar from '../Components/AdminPanel/topBar';

function AdminPanel(){

    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                   <topBar />
                </div>
            </div>
        </div>
    );
}
export default AdminPanel;