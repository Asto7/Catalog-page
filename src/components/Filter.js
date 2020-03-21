import React from 'react'

function Filter() {
    return (
        <div style={{ marginTop:"1em",padding:"3em",backgroundColor:"#D9EFF5"}}>
            <div className="row">
                
                <div className="col-lg-4 col-sm-6 col-xs-12">
                    <select className="form-control">
                        <option>Category</option>
                        <option>Home&Furniture</option>
                        <option></option>
                        <option>D</option>
                    </select>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-12">
                    <select className="form-control">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-12">
                    <select className="form-control">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>


            </div>
        </div>
    )
}

export default Filter
