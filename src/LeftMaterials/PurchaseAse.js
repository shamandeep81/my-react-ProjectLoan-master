import React from 'react'
import './Purchasease.css'
const PurchaseAse = () => {
    return (
        <div className='RightComp'>
          

            <div className="col-md-9 order-md-2 sk-border-blue-light-v1">
                <form id="frmreport1" name="frmreport1" encType="multipart/form-data" method="POST" acceptCharset="utf-8" action="https://loandpr.com/auth_project/index.php/ReportCont/purchaseassets_submit">
                    <div className="h-100  mb-40">
                        <div id="basicinformation" className style={{ display: 'block' }}>
                            <h2 className="text-uppercase font-size-10 color-black mb-1"  id='startText'>Purchase Assets</h2>
                            <hr className="d-flex" />
                            {/* MAIN FIELDS */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Click on Cell to edit value</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="table-responsive">
                                                    <div id="result" /><table className="table table-bordered" id="example">
                                                        <thead className=''>
                                                            <tr>
                                                                <th style={{ display: 'none' }}>#</th>
                                                                <th>Sr.</th>
                                                                <th>Type of Asset</th>
                                                                <th>Asset addition<br /> On or before 30th September (Rs.)<br />
                                                                    <font color="blue"> Enter value in Rupees</font><br />
                                                                    <font color="red"> e.g.: For 1 Lakh enter 100000</font>
                                                                </th>
                                                                <th>Asset addition<br /> On or after 1st October (Rs.)<br />
                                                                    <font color="blue"> Enter value in Rupees</font><br />
                                                                    <font color="red"> e.g.: For 1 Lakh enter 100000</font>
                                                                </th>
                                                                <th>Depreciation %</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>1</th>
                                                                <td><span className="price">1</span></td>
                                                                <td><span className>Land</span></td>
                                                                <td>
                                                                    <div className="form-group"><input className="form-control input-sm fill" type="number" name="LandAmountBeforeOct" id="LandAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-group"><input className="form-control input-sm fill" type="number" name="LandAmountAfterOct" id="LandAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-group"><input className="form-control input-sm fill" type="number" name="LandDepreciation" id="LandDepreciation" defaultValue={0} required="required" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>2</th>
                                                                <td><span className="price">2</span></td>
                                                                <td><span className>Building &amp; Construction</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="BuildingAmountBeforeOct" id="BuildingAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="BuildingAmountAfterOct" id="BuildingAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="BuildingDepreciation" id="BuildingDepreciation" defaultValue={10} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>3</th>
                                                                <td><span className="price">3</span></td>
                                                                <td><span className>Plant and Machinery</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="PlantMachineAmountBeforeOct" id="PlantMachineAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="PlantMachineAmountAfterOct" id="PlantMachineAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="PlantMachineDepreciation" id="PlantMachineDepreciation" defaultValue={15} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>4</th>
                                                                <td><span className>4</span></td>
                                                                <td><span className>Furniture &amp; Fixtures</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="FurnitureAmountBeforeOct" id="FurnitureAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="FurnitureAmountAfterOct" id="FurnitureAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="FurnitureDepreciation" id="FurnitureDepreciation" defaultValue={10} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>5</th>
                                                                <td><span className>5</span></td>
                                                                <td><span className>Computers &amp; Printers</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="ComputersAmountBeforeOct" id="ComputersAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="ComputersAmountAfterOct" id="ComputersAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="ComputersDepreciation" id="ComputersDepreciation" defaultValue={40} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>6</th>
                                                                <td><span className>6</span></td>
                                                                <td><span className>Office Equipments</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="OfficeAmountBeforeOct" id="OfficeAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="OfficeAmountAfterOct" id="OfficeAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="OfficeDepreciation" id="OfficeDepreciation" defaultValue={15} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>7</th>
                                                                <td><span className>7</span></td>
                                                                <td><span className>Vehicles</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="VehiclesAmountBeforeOct" id="VehiclesAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="VehiclesAmountAfterOct" id="VehiclesAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="VehiclesDepreciation" id="VehiclesDepreciation" defaultValue={15} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>8</th>
                                                                <td><span className>8</span></td>
                                                                <td><span className>Software(s)</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="SoftwareAmountBeforeOct" id="SoftwareAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="SoftwareAmountAfterOct" id="SoftwareAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="SoftwareDepreciation" id="SoftwareDepreciation" defaultValue={40} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>9</th>
                                                                <td><span className>9</span></td>
                                                                <td><span className>Installation Charges (if any)</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="InstallationAmountBeforeOct" id="InstallationAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="InstallationAmountAfterOct" id="InstallationAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="InstallationDepreciation" id="InstallationDepreciation" defaultValue={0} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }}>10</th>
                                                                <td><span className>10</span></td>
                                                                <td><span className>Any other (please specify)</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="AnyOtherAmountBeforeOct" id="AnyOtherAmountBeforeOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="AnyOtherAmountAfterOct" id="AnyOtherAmountAfterOct" defaultValue={0} onkeyup="sum();" required="required" /></td>
                                                                <td><input className="form-control input-sm fill" type="number" name="AnyOtherDepreciation" id="AnyOtherDepreciation" defaultValue={0} required="required" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }} />
                                                                <td><span className /></td>
                                                                <td><span className>Total</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="TotalAmountBeforeOct" id="TotalAmountBeforeOct" defaultValue readOnly="readonly" /></td>
                                                                <td><input className="form-control input-sm" type="number" name="TotalAmountAfterOct" id="TotalAmountAfterOct" defaultValue readOnly="readonly" /></td>
                                                                <td> </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{ display: 'none' }} />
                                                                <td><span className /></td>
                                                                <td><span className>Total</span></td>
                                                                <td><input className="form-control input-sm" type="number" name="TotalAmountBeforeAfter" id="TotalAmountBeforeAfter" defaultValue readOnly="readonly" /></td>
                                                                <td> </td>
                                                                <td> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row example mb-5">
                            </div>
                            <div>
                                <div className="row ">
                                    <div className="col-12">
                                        <button className="btn btn-block btn-primary mr-10 mb-15" id="create-report-btn" type="submit">Save &amp;
                                            Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></form></div>
            
  
        </div>
    )
}

export default PurchaseAse