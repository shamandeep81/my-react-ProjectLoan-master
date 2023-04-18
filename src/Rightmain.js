import React from 'react'
import './RR.css'
const Rightmain = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form
                    id="frmreport1"
                    name="frmreport1"
                    encType="multipart/form-data"
                    method="POST"
                    acceptCharset="utf-8"
                    action="https://loandpr.com/auth_project/index.php/ReportCont/language_submit"
                >
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className="" style={{ display: "block" }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1" id='startText'>START</h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm" />
                                </div>
                                <div className="col-12 align-self-center">
                                    <p className='HeadingText'>
                                        We will take you through Step-by-Step Process to generate project
                                        report. Click <strong>Start</strong> button to continue
                                    </p>
                                    <p></p>
                                </div>
                                <div className="MainDiv report_box" >
                                    <div id="report_doc" name="report_doc">
                                        <p align="center">
                                            <u>
                                                <b>DISCLAIMER FOR DPR's</b>
                                            </u>
                                        </p>
                                        1. Project Report or DPR created using www.loandpr.com is a report
                                        as per industry and business segment standards. We do not claim
                                        accuracy of expenses or revenue calculations.
                                        <br />
                                        <br /> 2. LoanDPR.com is a software tool to generate Project
                                        Report for Loans. We do not guarantee Loan approvals.
                                        <br />
                                        <br /> 3. Revenue figures, expenses and loan amount are subject to
                                        change as per way of working, based on locations and depending
                                        upon actual business practices of the loan applicant or subsidy
                                        applicant. (or any other)
                                        <br />
                                        <br /> 4. Descriptive part about the business segments visible in
                                        the report is an outcome of various robotic intelligence
                                        activities and we do not claim any right on the content or do not
                                        guarantee the accuracy of the data.
                                        <br />
                                        <br /> 5. Banks, Subsidy departments or any other entities or any
                                        of the end consumers of the DPR (Project Report) are advised to
                                        scrutinise and check the DPR calculations and DPR data through
                                        their expert lenses. LoanDPR doesn't take any responsibility with
                                        respect to same.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm" />
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <br />
                                    <input type="checkbox" id="checkme" />{" "}
                                    <strong id='AgreeField'>I Agree to above</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row ">
                            <div className="col-12">
                                <button
                                    className="btn btn-block btn-primary mr-10 mb-15"
                                    name="createbtn"
                                    id="createbtn"
                                    disabled="disabled"
                                    type="submit"
                                >
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Rightmain