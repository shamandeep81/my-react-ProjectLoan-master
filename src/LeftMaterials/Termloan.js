import React from 'react'
import './Termloan.css'
const Termloan = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form id="frmreport1" name="frmreport1" encType="multipart/form-data" method="POST" acceptCharset="utf-8" action="https://loandpr.com/auth_project/index.php/ReportCont/termloan_submit">
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className style={{ display: 'block' }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1"  id='startText'>Term Loan</h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm"><strong>Term Loan</strong> (max 75% of Asset Value) (Rs.)</label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input type="number" id="TermLoanAmount" name="TermLoanAmount" className="form-control col-md-9" min={1} onkeyup="sum();" defaultValue={0.00} />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Own Contribution (Rs.)</label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input type="number" id="OwnContributionAmount" name="OwnContributionAmount" className="form-control col-md-9" min={1} defaultValue={0.00} readOnly="readonly" />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Tenure (Months)*</label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input type="number" id="TenureYears" name="TenureYears" placeholder="Add tenure" className="form-control col-md-9" defaultValue={84} required="required" readOnly="readonly" />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Rate of Interest (%)* </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input type="number" step="0.01" id="RateOfInterest" name="RateOfInterest" placeholder="Add rate of interest" className="form-control col-md-9" defaultValue={11} required="required" />
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Project Start Date* </label>
                                </div>
                                <div className="col-md-9 align-self-center form-group">
                                    <input type="date" id="TermLoanProjectStartDate" name="TermLoanProjectStartDate" className="form-control col-md-9" min="2000-01-02" defaultValue="2023-04-17" required="required" />
                                </div>
                            </div>
                            <div className="row example mb-5">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row ">
                            <div className="col-12">
                                <button className="btn btn-block btn-primary mr-10 mb-15" id="create-report-btn" type="submit">Save &amp;
                                    Continue</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Termloan