import React from 'react'
import './Promoinfo.css'
const Promoinfo = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form
                    id="frmreport1"
                    name="frmreport1"
                    encType="multipart/form-data"
                    method="POST"
                    acceptCharset="utf-8"
                    action="https://loandpr.com/auth_project/index.php/ReportCont/promoter_information_submit"
                >
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className="" style={{ display: "block" }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1"  id='startText'>
                                Promoter Information
                            </h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            {/* DYNAMIC FORM START {*/}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Promoter Name*:
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="promoterinfo"
                                        name="promoterinfo"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                        required="required"
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Promoter Name:
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="promoterinfo1"
                                        name="promoterinfo1"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Promoter Name:
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="promoterinfo2"
                                        name="promoterinfo2"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo3"
                                        name="promoterinfo3"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo4"
                                        name="promoterinfo4"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo5"
                                        name="promoterinfo5"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo6"
                                        name="promoterinfo6"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo7"
                                        name="promoterinfo7"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo8"
                                        name="promoterinfo8"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="hidden"
                                        id="promoterinfo9"
                                        name="promoterinfo9"
                                        placeholder="Enter Name"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div id="dynamic_field">{/* DYNAMIC FORM END {*/}</div>
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
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Promoinfo