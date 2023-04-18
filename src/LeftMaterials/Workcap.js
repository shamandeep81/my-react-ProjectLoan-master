import React from 'react'
import './Workcap.css'
const Workcap = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form id="frmreport1" name="frmreport1" encType="multipart/form-data" method="POST" acceptCharset="utf-8" action="https://loandpr.com/auth_project/index.php/ReportCont/workingcapital_submit">
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className style={{ display: 'block' }}>
                            <h3 className="text-uppercase font-size-10 color-black mb-1"  id='startText'>Working Capital Loan</h3>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div>
                                <label><strong>If you want a loan for Working Capital Requirement : (Write "0" if you dont
                                    need)</strong><br /></label>
                            </div>
                            <div className="row">
                                <div className="col-md-4 align-self-center label">
                                    <label className="mb-0  " htmlFor="#firm">Working Capital Requirement (Rs.)</label>
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <input type="number" id="WorkCapReqAmount" name="WorkCapReqAmount" className="form-control col-md-12" defaultValue={0} onkeyup="sum();" />
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <font color="blue"> Enter value in Rupees</font><br />
                                    <font color="red"> e.g.: For 1 Lakh enter 100000</font>
                                </div>
                                <div className="col-md-4 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Cash Credit / OD (max 75%) (Rs.)</label>
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <input type="number" id="CashCreditAmount" name="CashCreditAmount" className="form-control col-md-12" defaultValue={0} />
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <font color="blue"> Enter value in Rupees</font><br />
                                    <font color="red"> e.g.: For 1 Lakh enter 100000</font>
                                </div>
                                <div className="col-md-4 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Own Contribution (Rs.)</label>
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <input type="number" id="OwnContributionAmountWorkCap" name="OwnContributionAmountWorkCap" placeholder className="form-control col-md-12" defaultValue={0} />
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <font color="blue"> Enter value in Rupees</font><br />
                                    <font color="red"> e.g.: For 1 Lakh enter 100000</font>
                                </div>
                                <div className="col-md-4 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Rate of Interest (%) </label>
                                </div>
                                <div className="col-md-4 align-self-center form-group">
                                    <input type="number" step="0.01" id="RateofInterestWorkCap" name="RateofInterestWorkCap" placeholder="Add rate of interest" className="form-control col-md-12" defaultValue={10} required="required" />
                                </div>
                            </div>
                            <hr className="d-flex" />
                            <div className="row">
                                <div className="col-md-4 align-self-center">
                                    <label className="mb-0" htmlFor="#firm"><strong>Any other funding facility, please specify</strong></label>
                                </div>
                                <div className="col-md-6 align-self-center form-group">
                                    <input type="text" id="AnyOtherFundFacility" name="AnyOtherFundFacility" className="form-control col-md-9" defaultValue />
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

export default Workcap