var ReqBody=JSON.parse(context.getVariable("request.content"));
var StateCityList=[],StateCityObj={};

// Backend fields mapping
if(ReqBody['CBRCode']!==undefined){
    ReqBody['CBR Code']=ReqBody['CBRCode'];
    delete ReqBody['CBRCode'];
}
if(ReqBody['PLScore']!==undefined){
    ReqBody['PL_Score']=ReqBody['PLScore'];
    delete ReqBody['PLScore'];
}
if(ReqBody['TypeOfLoan']!==undefined){
    ReqBody['Type_Of_Loan']=ReqBody['TypeOfLoan'];
    delete ReqBody['TypeOfLoan'];
}
if(ReqBody['ThirdPartyLoanAccountNo']!==undefined){
    ReqBody['Third_party_loan_account_no']=ReqBody['ThirdPartyLoanAccountNo'];
    delete ReqBody['ThirdPartyLoanAccountNo'];
}
if(ReqBody['KVBAmountSanction']!==undefined){
    ReqBody['KVB_Amount_Sanction']=ReqBody['KVBAmountSanction'];
    delete ReqBody['KVBAmountSanction'];
}
if(ReqBody.ProcessingFeeWaiver!==undefined){
    ReqBody.Processing_Fee_Waiver=ReqBody.ProcessingFeeWaiver;
    delete ReqBody.ProcessingFeeWaiver;
}
if(ReqBody.Reasonforwaiver!==undefined){
    ReqBody.Reason_for_waiver=ReqBody.Reasonforwaiver;
    delete ReqBody.Reasonforwaiver;
}
if(ReqBody['ProcessingFees']!==undefined){
    ReqBody['Processing Fees']=ReqBody['ProcessingFees'];
    delete ReqBody['ProcessingFees'];
}
if(ReqBody['CERSAIFee']!==undefined){
    ReqBody['CERSAI Fee']=ReqBody['CERSAIFee'];
    delete ReqBody['CERSAIFee'];
}
if(ReqBody['CIBILCharges']!==undefined){
    ReqBody['CIBIL Charges']=ReqBody['CIBILCharges'];
    delete ReqBody['CIBILCharges'];
}
if(ReqBody['StampPaperFee']!==undefined){
    ReqBody['Stamp Paper Fee']=ReqBody['StampPaperFee'];
    delete ReqBody['StampPaperFee'];
}
if(ReqBody['LegalCharges']!==undefined){
    ReqBody['Legal Charges']=ReqBody['LegalCharges'];
    delete ReqBody['LegalCharges'];
}
if(ReqBody['ValuationCharges']!==undefined){
    ReqBody['Valuation Charges']=ReqBody['ValuationCharges'];
    delete ReqBody['ValuationCharges'];
}
if(ReqBody.ApplicantDetails.AverageCASABalance!==undefined){
    ReqBody.ApplicantDetails.Average_CASA_Balance=ReqBody.ApplicantDetails.AverageCASABalance;
    delete ReqBody.ApplicantDetails.AverageCASABalance;
}
if(ReqBody.ApplicantDetails.ResidentialStatus!==undefined){
    ReqBody.ApplicantDetails.Residential_Status=ReqBody.ApplicantDetails.ResidentialStatus;
    delete ReqBody.ApplicantDetails.ResidentialStatus;
}
if(ReqBody.ApplicantDetails.PolicyType!==undefined){
    ReqBody.ApplicantDetails.Policy_type=ReqBody.ApplicantDetails.PolicyType;
    delete ReqBody.ApplicantDetails.PolicyType;
}
if(ReqBody.ApplicantDetails.PolicyNumber!==undefined){
    ReqBody.ApplicantDetails.Policy_number=ReqBody.ApplicantDetails.PolicyNumber;
    delete ReqBody.ApplicantDetails.PolicyNumber;
}
if(ReqBody.ApplicantDetails.InsureDate!==undefined){
    ReqBody.ApplicantDetails.Insure_date=ReqBody.ApplicantDetails.InsureDate;
    delete ReqBody.ApplicantDetails.InsureDate;
}
if(ReqBody.ApplicantDetails.ExpiryDate!==undefined){
    ReqBody.ApplicantDetails.Expiry_date=ReqBody.ApplicantDetails.ExpiryDate;
    delete ReqBody.ApplicantDetails.ExpiryDate;
}
if(ReqBody.ApplicantDetails.UploadInsurancePolicy!==undefined){
    ReqBody.ApplicantDetails.Upload_insurance_policy=ReqBody.ApplicantDetails.UploadInsurancePolicy;
    delete ReqBody.ApplicantDetails.UploadInsurancePolicy;
}
if(ReqBody.ApplicantDetails.IsKVBDesignatedAssignee!==undefined){
    ReqBody.ApplicantDetails.Is_KVB_designated_assignee=ReqBody.ApplicantDetails.IsKVBDesignatedAssignee;
    delete ReqBody.ApplicantDetails.IsKVBDesignatedAssignee;
}
if(ReqBody.ApplicantDetails.StandingInstruction!==undefined){
    ReqBody.ApplicantDetails.Standing_instruction=ReqBody.ApplicantDetails.StandingInstruction;
    delete ReqBody.ApplicantDetails.StandingInstruction;
}
if(ReqBody.ApplicantDetails.TitleHolder!==undefined){
    ReqBody.ApplicantDetails.Title_Holder=ReqBody.ApplicantDetails.TitleHolder;
    delete ReqBody.ApplicantDetails.TitleHolder;
}


if(ReqBody.Type_Of_Loan==="LAP")
{
  if(ReqBody.ApplicantDetails.CompanyDetails!=="" && ReqBody.ApplicantDetails.CompanyDetails!==undefined)
  {
    for (var i = 0; i < ReqBody.ApplicantDetails.CompanyDetails.length; i++) 
    {
      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyName!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_name=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyName;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyName;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyType!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_type=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyType;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyType;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].RelationshipWithCompany!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Relationship_with_Company=ReqBody.ApplicantDetails.CompanyDetails[i].RelationshipWithCompany;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].RelationshipWithCompany;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyPAN!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_PAN=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyPAN;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyPAN;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyAddress!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_Address=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyAddress;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyAddress;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyPincode!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_Pincode=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyPincode;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyPincode;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyCity!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_City=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyCity;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyCity;
      }

      if(ReqBody.ApplicantDetails.CompanyDetails[i].CompanyState!==undefined)
      {
        ReqBody.ApplicantDetails.CompanyDetails[i].Company_State=ReqBody.ApplicantDetails.CompanyDetails[i].CompanyState;
        delete ReqBody.ApplicantDetails.CompanyDetails[i].CompanyState;
      }
    }
  }
}

//state city name extraction
if((ReqBody.ApplicantDetails.CurrentState!=="") && (ReqBody.ApplicantDetails.CurrentState!==undefined) && (ReqBody.ApplicantDetails.CurrentCity!=="") && (ReqBody.ApplicantDetails.CurrentCity!==undefined))
  {
    StateCityObj={};
    StateCityObj.state=ReqBody.ApplicantDetails.CurrentState;
    StateCityObj.city=ReqBody.ApplicantDetails.CurrentCity;
    StateCityList.push(StateCityObj);
  }

if((ReqBody.ApplicantDetails.PermanentState!=="") && (ReqBody.ApplicantDetails.PermanentState!==undefined) && (ReqBody.ApplicantDetails.PermanentCity!=="") && (ReqBody.ApplicantDetails.PermanentCity!==undefined))
  {
    StateCityObj={};
    StateCityObj.state=ReqBody.ApplicantDetails.PermanentState;
    StateCityObj.city=ReqBody.ApplicantDetails.PermanentCity;
    StateCityList.push(StateCityObj);
  }

if(ReqBody.Type_Of_Loan==="LAP"){
    if(ReqBody.ApplicantDetails.CompanyDetails!=="" && ReqBody.ApplicantDetails.CompanyDetails!==undefined){
  for (var i = 0; i < ReqBody.ApplicantDetails.CompanyDetails.length; i++) {
    if((ReqBody.ApplicantDetails.CompanyDetails[i].Company_State!=="") && (ReqBody.ApplicantDetails.CompanyDetails[i].Company_State!==undefined) && (ReqBody.ApplicantDetails.CompanyDetails[i].Company_City!=="") && (ReqBody.ApplicantDetails.CompanyDetails[i].Company_City!==undefined)){
        StateCityObj={};
        StateCityObj.state=ReqBody.ApplicantDetails.CompanyDetails[i].Company_State;
        StateCityObj.city=ReqBody.ApplicantDetails.CompanyDetails[i].Company_City;
        StateCityList.push(StateCityObj);
    }
  }
}
}
context.setVariable("StateCityList",JSON.stringify(StateCityList));
context.setVariable("StateCityListLength",StateCityList.length);

context.setVariable("request.content",JSON.stringify(ReqBody));