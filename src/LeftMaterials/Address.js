import React from 'react'
import './Address.css'
const Address = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form
                    id="frmreport1"
                    name="frmreport1"
                    encType="multipart/form-data"
                    method="POST"
                    acceptCharset="utf-8"
                    action="https://loandpr.com/auth_project/index.php/ReportCont/address_submit"
                >
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className="" style={{ display: "block" }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1" id='startText'>
                                Address
                            </h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            {/* DYNAMIC FORM START {*/}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Registered Address *
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="address1"
                                        name="address1"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                        required="required"
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        {" "}
                                        Address 2
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="address2"
                                        name="address2"
                                        className="form-control col-md-9"
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        {" "}
                                        Address 3
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="address3"
                                        name="address3"
                                        className="form-control col-md-9"
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        {" "}
                                        Address 4
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="address3"
                                        name="address4"
                                        className="form-control col-md-9"
                                    />
                                </div>
                            </div>
                            <div id="dynamic_field">{/* DYNAMIC FORM END {*/}</div>
                        </div>
                        <div>
                            <div className="row example mb-5"></div>
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
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Address