import React from 'react'
import './Loantype.css'
const Loantype = () => {
    return (
        <div className='RightComp'>
            

            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form id="frmreport1" name="frmreport1" encType="multipart/form-data" method="POST" acceptCharset="utf-8" action="https://loandpr.com/auth_project/index.php/ReportCont/loantype_submit">
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className style={{ display: 'block' }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1" id='startText'>Select Type of Loan Required</h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Select Loan Type *</label>
                                </div>
                                <div className="radio col-md-9 form-group">
                                    <label><input type="radio" name="loantype" id="loantype" defaultValue="TermLoan" defaultChecked /> Term Loan
                                        &nbsp;&nbsp;&nbsp;</label>
                                    <label><input type="radio" name="loantype" id="loantype" defaultValue="CashCredit" /> Cash Credit
                                        &nbsp;&nbsp;&nbsp;</label>
                                    <label><input type="radio" name="loantype" id="loantype" defaultValue="Both" /> Both</label>
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">How Many Years Projections are Required? (1 to 10)</label>
                                </div>
                                <div className="col-md-6 align-self-center form-group">
                                    <input type="number" id="ProjectionYears" name="ProjectionYears" className="form-control col-md-9" min={1} max={10} defaultValue={0} />
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">How many year's of <strong>Audited Report</strong> you have? (1 to
                                        3)</label>
                                </div>
                                <div className="col-md-6 align-self-center form-group">
                                    <input type="number" id="AuditedReportYears" name="AuditedReportYears" className="form-control col-md-9" min={0} max={3} defaultValue={0} />
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">Moratorium Period (0 to 18 months) </label>
                                </div>
                                <div className="col-md-6 align-self-center form-group">
                                    <input type="number" id="Moratorium" name="Moratorium" className="form-control col-md-9" min={0} max={18} defaultValue={0} />
                                </div>
                            </div>
                            <div className=" row example mb-5">
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
            
 
{''}
        </div>
    )
}

export default Loantype