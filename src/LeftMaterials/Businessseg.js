import React from 'react'
import './Businessseg.css'
const Businessseg = () => {
    return (
        <div className='RightComp'>
            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form
                    id="frmreport1"
                    name="frmreport1"
                    encType="multipart/form-data"
                    method="POST"
                    acceptCharset="utf-8"
                    action="https://loandpr.com/auth_project/index.php/ReportCont/autocomplete_submit"
                >
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className="" style={{ display: "block" }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1" id='startText'>
                                Business Segment
                            </h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS START { */}
                            <div className="row">
                                <div className="col-md-12 align-self-center">
                                    <label className="mb-0" htmlFor="#firm">
                                        Type &amp; Select Business Segment (Area of Business) *
                                    </label>
                                    <br />
                                    (e.g. Tea Stall, Bottle manufacturing)
                                </div>
                                <div className="col-md-12 align-self-center form-group">
                                    <br />
                                    <div id="prefetch">
                                        {/* autocompleteExample.css is required */}
                                        <input
                                            type="text"
                                            name="autocomplete"
                                            id="autocomplete"
                                            className="form-control col-md-12 input-lg typeahead"
                                            placeholder="type here"
                                            required="required"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* MAIN FIELDS END } */}
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

export default Businessseg