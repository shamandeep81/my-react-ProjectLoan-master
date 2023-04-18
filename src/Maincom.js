import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Maincom.css"

const Maincon = () => {
    return (
        <div className='LeftComp'>
            <section className="mb-30 mb-50">
                <h4 className="media h6 mb-15">
                    <span className="d-flex align-self-center text-dark">
                        Report Completion
                    </span>
                    <span className="media-body align-self-center text-right" id="percent">
                        0%
                    </span>
                </h4>
                <div className="progress ">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                </div>
            </section>
            <section  >
                <ul className="list-unstyled mb-0 builder_nav">
                    <li className="sk-border-blue-light-v1 mb-0" >
                        <span className="text-primary">
                            <i className="fa fa-check-square-o"></i> Start
                        </span>
                    </li>

                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Basic Information
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Promoter Information
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Address
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Industry Type
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Business Segment
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Loan Type
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Purchase Assets
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Term Loan
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Working Capital
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Employment
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Prime Costs
                        </span>
                    </li>
                    <li className="sk-border-blue-light-v1 mb-0">
                        <span className="text-dark">
                            <i className="fa fa-check-square-o"></i> Indirect Costs
                        </span>
                    </li>
                </ul>
            </section>
            


        </div>
    );
};

export default Maincon;
