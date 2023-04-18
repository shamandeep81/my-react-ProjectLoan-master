import React from 'react'
import './Industype.css'
const Industype = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1 ">
                <form
                    id="frmreport1"
                    name="frmreport1"
                    encType="multipart/form-data"
                    method="POST"
                    acceptCharset="utf-8"
                    action="https://loandpr.com/auth_project/index.php/ReportCont/industrytype_submit"
                >
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className="" style={{ display: "block" }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1" id='startText'>
                                Industry Type
                            </h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Select Industry Type *
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <select
                                        className="col-md-9 align-self-center form-control"
                                        id="industrytype"
                                        name="industrytype"
                                    >
                                        <option>Agriculture</option>
                                        <option>Trading</option>
                                        <option>Service</option>
                                        <option>Renting</option>
                                        <option>Manufacturing</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row example mb-5"></div>
                        </div>
                    </div>
                    <div>
                        <div className="row ">
                            <div className="col-12">
                                <button
                                    className="btn btn-block btn-primary mr-10 mb-15"
                                    id="create-report-btn"
                                    type="submit"
                                >
                                    Save &amp; Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >

    )
}

export default Industype