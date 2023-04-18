import React from 'react'

const Basicinfo = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form
                    id="frmreport1"
                    name="frmreport1"
                    encType="multipart/form-data"
                    method="POST"
                    acceptCharset="utf-8"
                    action="https://loandpr.com/auth_project/index.php/ReportCont/create_report_submit"
                >
                    <div className="h-100  mb-40 ">
                        <div id="basicinformation" className="" style={{ display: "block" }}>
                            <h3 className="text-uppercase font-size-10 color-black mb-1" RIght>
                                Basic Information
                            </h3>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Name of the Business *
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="businessname"
                                        name="businessname"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                        required="required"
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Select Company Type *
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <select
                                        className="col-md-9 align-self-center form-control"
                                        id="CompanyType"
                                        name="CompanyType"
                                    >
                                        <option>Proprietor Company</option>
                                        <option>Partnership Firm</option>
                                        <option>LLP</option>
                                        <option>Private Limited Company</option>
                                        <option>One Person Company</option>
                                        <option>Public Limited Company</option>
                                        <option>HUF</option>
                                    </select>
                                </div>
                            </div>{" "}
                            {/* Row End */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Year of Establishment*
                                    </label>
                                </div>
                                <div className="col-md-3 align-self-center form-group">
                                    <select
                                        className="col-md-9 align-self-center form-control"
                                        id="MonthOfEstablishment"
                                        name="MonthOfEstablishment"
                                        required="required"
                                    >
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                                <div className="col-md-3 align-self-center form-group">
                                    <input
                                        type="text"
                                        className="date-own form-control col-md-12"
                                        id="YearOfEstablishment"
                                        name="YearOfEstablishment"
                                        placeholder="Select Year"
                                        required="required"
                                    />
                                </div>
                            </div>{" "}
                            {/* Row End */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        City of Operation*
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input
                                        type="text"
                                        id="CityOfOperation"
                                        name="CityOfOperation"
                                        className="form-control col-md-9"
                                        defaultValue=""
                                        required="required"
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Business Description*
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <textarea
                                        id="BusinessDescription"
                                        name="BusinessDescription"
                                        className="form-control col-md-9"
                                        value=""
                                        required="required"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Purpose*{" "}
                                        <font color="red">(Please Explain Why Loan is Required?)</font>
                                    </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <textarea
                                        id="Purpose"
                                        name="Purpose"
                                        className="form-control col-md-9"
                                        value=""
                                        required="required"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>{" "}
                            {/* Row End */}
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

        </div>
    )
}

export default Basicinfo