var ReqBody=JSON.parse(context.getVariable("request.content"));
var missingObj=[];
var missingflag=false;

//mandatory fields validation
if((ReqBody.SourcedBy==="") || (ReqBody.SourcedBy===undefined)) //pl,hl,lap,vl
missingObj.push("SourcedBy");
if((ReqBody.InterestRate==="") || (ReqBody.InterestRate===undefined)) //pl,hl,lap,vl
missingObj.push("InterestRate");
if((ReqBody.LoanAmount==="") || (ReqBody.LoanAmount===undefined)) //pl,hl,lap,vl
missingObj.push("LoanAmount");
if((ReqBody.SanctionDate==="") || (ReqBody.SanctionDate===undefined)) //pl,hl,lap,vl
missingObj.push("SanctionDate");
if((ReqBody.ReqTerm==="") || (ReqBody.ReqTerm===undefined)) //pl,hl,lap,vl
missingObj.push("ReqTerm");
if((ReqBody.ReqLoanAmount==="") || (ReqBody.ReqLoanAmount===undefined)) //pl,hl,lap,vl
missingObj.push("ReqLoanAmount");

if((ReqBody.LoanPurpose==="") || (ReqBody.LoanPurpose===undefined)) //pl,hl,lap,vl
missingObj.push("LoanPurpose");
if((ReqBody.CKYC==="") || (ReqBody.CKYC===undefined)) //pl,hl,lap,vl
missingObj.push("CKYC");
if((ReqBody.ApplicantDetails==="") || (ReqBody.ApplicantDetails===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails");
else{
    
if((ReqBody.TypeOfLoan==="") || (ReqBody.TypeOfLoan===undefined)) //pl,hl,lap,vl
missingObj.push("TypeOfLoan");
else{ 
    context.setVariable("RequestTypeOfLoan",ReqBody.TypeOfLoan);
    if(ReqBody.TypeOfLoan!=="PL"){ //for PL loan HolidayPeriod is not mandatory
        if((ReqBody.HolidayPeriod==="") || (ReqBody.HolidayPeriod===undefined)) //hl,lap,vl
        missingObj.push("HolidayPeriod");
        }
    if(ReqBody.TypeOfLoan==="VL2W" || ReqBody.TypeOfLoan==="VL4W"){
        if((ReqBody.SanctionedTerm==="") || (ReqBody.SanctionedTerm===undefined)) //vl
        missingObj.push("SanctionedTerm");
    }
    //setting path for pick list API
    if(ReqBody.TypeOfLoan==="HL") context.setVariable("picklistPath","primary/HL");
    else if(ReqBody.TypeOfLoan==="LAP") context.setVariable("picklistPath","primary/LAP");
    else if(ReqBody.TypeOfLoan==="PL") context.setVariable("picklistPath","primary/PL");
    else if(ReqBody.TypeOfLoan==="VL2W" || ReqBody.TypeOfLoan==="VL4W") context.setVariable("picklistPath","primary/VL");

}

if((ReqBody.ApplicantDetails.FirstName==="") || (ReqBody.ApplicantDetails.FirstName===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.FirstName");
if((ReqBody.ApplicantDetails.LastName==="") || (ReqBody.ApplicantDetails.LastName===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.LastName");
if((ReqBody.ApplicantDetails.FatherName==="") || (ReqBody.ApplicantDetails.FatherName===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.FatherName");
if((ReqBody.ApplicantDetails.AadharNumber==="") || (ReqBody.ApplicantDetails.AadharNumber===undefined)) //pl,hl,lap,vl
{
    missingObj.push("ApplicantDetails.AadharNumber");
    context.setVariable("AadharNumberflag",false);
}
else{
    context.setVariable("AadharNumberflag",true);
    context.setVariable("AadharNumber",ReqBody.ApplicantDetails.AadharNumber);
    }
if((ReqBody.ApplicantDetails.Title==="") || (ReqBody.ApplicantDetails.Title===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.Title");
if((ReqBody.ApplicantDetails.Nationality==="") || (ReqBody.ApplicantDetails.Nationality===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.Nationality");
if((ReqBody.ApplicantDetails.Gender==="") || (ReqBody.ApplicantDetails.Gender===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.Gender");
if((ReqBody.ApplicantDetails.BirthDate==="") || (ReqBody.ApplicantDetails.BirthDate===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.BirthDate");
if((ReqBody.ApplicantDetails.Maritalstatus==="") || (ReqBody.ApplicantDetails.Maritalstatus===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.Maritalstatus");
if((ReqBody.ApplicantDetails.Mobile==="")||(ReqBody.ApplicantDetails.Mobile===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.Mobile");
if((ReqBody.ApplicantDetails.Email==="")||(ReqBody.ApplicantDetails.Email===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.Email");
if((ReqBody.ApplicantDetails.PermanentAddress==="")||(ReqBody.ApplicantDetails.PermanentAddress===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.PermanentAddress");
if((ReqBody.ApplicantDetails.PermanentCity==="")||(ReqBody.ApplicantDetails.PermanentCity===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.PermanentCity");
if((ReqBody.ApplicantDetails.PermanentCountry==="")||(ReqBody.ApplicantDetails.PermanentCountry===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.PermanentCountry");
if((ReqBody.ApplicantDetails.PermanentState==="")||(ReqBody.ApplicantDetails.PermanentState===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.PermanentState");
if((ReqBody.ApplicantDetails.PermanentZip==="")||(ReqBody.ApplicantDetails.PermanentZip===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.PermanentZip");
if((ReqBody.ApplicantDetails.ClaimedAgriIncome==="")||(ReqBody.ApplicantDetails.ClaimedAgriIncome===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.ClaimedAgriIncome");
if((ReqBody.ApplicantDetails.ClaimedNMIITR==="")||(ReqBody.ApplicantDetails.ClaimedNMIITR===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.ClaimedNMIITR");
if((ReqBody.ApplicantDetails.EmploymentType==="")||(ReqBody.ApplicantDetails.EmploymentType===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.EmploymentType");
if((ReqBody.ApplicantDetails.CustomerType==="")||(ReqBody.ApplicantDetails.CustomerType===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.CustomerType");
if((ReqBody.ApplicantDetails.FinancialApplicant==="")||(ReqBody.ApplicantDetails.FinancialApplicant===undefined)) //pl,hl,lap,vl
missingObj.push("ApplicantDetails.FinancialApplicant");
else if(((ReqBody.SourcedBy!=="") && (ReqBody.SourcedBy!==undefined)) && ((ReqBody.TypeOfLoan!=="") && (ReqBody.TypeOfLoan!==undefined))){
    // For CHFL, Pan number is mandatory only when FinancialApplicant is true for HL and LAP APIs
    if(ReqBody.TypeOfLoan==="HL" || ReqBody.TypeOfLoan==="LAP"){
    if(ReqBody.SourcedBy.toUpperCase()==="CHFL"){
    if(ReqBody.ApplicantDetails.FinancialApplicant.toString().toUpperCase()==="TRUE")
       if((ReqBody.ApplicantDetails.PAN==="") || (ReqBody.ApplicantDetails.PAN===undefined)) //hl,lap
        missingObj.push("ApplicantDetails.PAN"); 
}
        else{ //other than CHFL
    if((ReqBody.ApplicantDetails.PAN==="") || (ReqBody.ApplicantDetails.PAN===undefined)) //hl,lap
        missingObj.push("ApplicantDetails.PAN");
}
    }
else{ //other than HL/LAP
    if((ReqBody.ApplicantDetails.PAN==="") || (ReqBody.ApplicantDetails.PAN===undefined)) //pl,vl
        missingObj.push("ApplicantDetails.PAN");
}
}
}

context.setVariable("missingObj",JSON.stringify(missingObj));
if(missingObj.length>0)
{
    missingflag=true;
    context.setVariable("missingflag",missingflag);
}

//field level validations
var fieldValidationErr=false,invalidFieldArr=[];
if((ReqBody.InterestRate!=="") && (ReqBody.InterestRate!==undefined)){
    if(!greaterThanZero(ReqBody.InterestRate))
    {
      invalidFieldArr.push("InterestRate should be greater than Zero");
    }
}

if((ReqBody.SanctionedTerm!=="") && (ReqBody.SanctionedTerm!==undefined)){
    if(!greaterThanZero(ReqBody.SanctionedTerm))
    {
      invalidFieldArr.push("SanctionedTerm should be greater than Zero");
    }
}

if((ReqBody.ReqLoanAmount!=="") && (ReqBody.ReqLoanAmount!==undefined)){
    if(!greaterThanZero(ReqBody.ReqLoanAmount))
    {
      invalidFieldArr.push("ReqLoanAmount should be greater than Zero");
    }
}

if((ReqBody.ReqTerm!=="") && (ReqBody.ReqTerm!==undefined)){
    if(!greaterThanZero(ReqBody.ReqTerm))
    {
      invalidFieldArr.push("ReqTerm should be greater than Zero");
    }
}

if((ReqBody.ReqEMI!=="") && (ReqBody.ReqEMI!==undefined)){
    if(!greaterThanZero(ReqBody.ReqEMI))
    {
      invalidFieldArr.push("ReqEMI should be greater than Zero");
    }
}

if((ReqBody.MarginToPay!=="") && (ReqBody.MarginToPay!==undefined)){
    if(!greaterThanZero(ReqBody.MarginToPay))
    {
      invalidFieldArr.push("MarginToPay should be greater than Zero");
    }
}

if((ReqBody.Margin!=="") && (ReqBody.Margin!==undefined)){
    if(!greaterThanZero(ReqBody.Margin))
    {
      invalidFieldArr.push("Margin should be greater than Zero");
    }
}

if((ReqBody.DisbursementAmount!=="") && (ReqBody.DisbursementAmount!==undefined)){
    if(!greaterThanZero(ReqBody.DisbursementAmount))
    {
      invalidFieldArr.push("DisbursementAmount should be greater than Zero");
    }
}

if((ReqBody.DateOfDisbursement!=="") && (ReqBody.DateOfDisbursement!==undefined)){
    if(!GECurrDate(ReqBody.DateOfDisbursement))
    {
      invalidFieldArr.push("Invalid Date format / DateOfDisbursement should be greater than or equal to Current Date");
    }
}

if((ReqBody.KVBAmountSanction!=="") && (ReqBody.KVBAmountSanction!==undefined)){
    if(parseFloat(ReqBody.KVBAmountSanction)<0)
    {
      invalidFieldArr.push("Invalid KVBAmountSanction value");
    }
}

if((ReqBody.ApplicantDetails!=="") && (ReqBody.ApplicantDetails!==undefined)){
    if((ReqBody.ApplicantDetails.BirthDate!=="") && (ReqBody.ApplicantDetails.BirthDate!==undefined)){
        if(!lesserThanCurrDate(ReqBody.ApplicantDetails.BirthDate))
        {
          invalidFieldArr.push("Invalid Date format / BirthDate should be lesser than Current Date");
        }
    }

    if((ReqBody.ApplicantDetails.Mobile!=="") && (ReqBody.ApplicantDetails.Mobile!==undefined)){
        if((ReqBody.ApplicantDetails.Mobile.toString().length)!==10)
        {
          invalidFieldArr.push("Invalid Mobile number");
        }
    }

    if((ReqBody.ApplicantDetails.AltMobile!=="") && (ReqBody.ApplicantDetails.AltMobile!==undefined)){
        if((ReqBody.ApplicantDetails.AltMobile.toString().length)!==10)
        {
          invalidFieldArr.push("Invalid AltMobile number");
        }
    }

    if((ReqBody.ApplicantDetails.ClaimedNMIITR!=="") && (ReqBody.ApplicantDetails.ClaimedNMIITR!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ClaimedNMIITR)<0)
        {
          invalidFieldArr.push("Invalid ClaimedNMIITR value");
        }
    }

    if((ReqBody.ApplicantDetails.ClaimedAgriIncome!=="") && (ReqBody.ApplicantDetails.ClaimedAgriIncome!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ClaimedAgriIncome)<0)
        {
          invalidFieldArr.push("Invalid ClaimedAgriIncome value");
        }
    }

    if((ReqBody.ApplicantDetails.ApprovedAgriIncome!=="") && (ReqBody.ApplicantDetails.ApprovedAgriIncome!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ApprovedAgriIncome)<0)
        {
          invalidFieldArr.push("Invalid ApprovedAgriIncome value");
        }
    }

    if((ReqBody.ApplicantDetails.ExistingEMIClaimed!=="") && (ReqBody.ApplicantDetails.ExistingEMIClaimed!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ExistingEMIClaimed)<0)
        {
          invalidFieldArr.push("Invalid ExistingEMIClaimed value");
        }
    }

    if((ReqBody.ApplicantDetails.CIBILEMI!=="") && (ReqBody.ApplicantDetails.CIBILEMI!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.CIBILEMI)<0)
        {
          invalidFieldArr.push("Invalid CIBILEMI value");
        }
    }

    if((ReqBody.ApplicantDetails.TotalChequeBounce!=="") && (ReqBody.ApplicantDetails.TotalChequeBounce!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.TotalChequeBounce)<0)
        {
          invalidFieldArr.push("Invalid TotalChequeBounce value");
        }
    }

    if((ReqBody.ApplicantDetails.GrossIncome1!=="") && (ReqBody.ApplicantDetails.GrossIncome1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.GrossIncome1)<0)
        {
          invalidFieldArr.push("Invalid GrossIncome1 value");
        }
    }

    if((ReqBody.ApplicantDetails.AnnualCapGain1!=="") && (ReqBody.ApplicantDetails.AnnualCapGain1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AnnualCapGain1)<0)
        {
          invalidFieldArr.push("Invalid AnnualCapGain1 value");
        }
    }

    if((ReqBody.ApplicantDetails.InterestIncome1!=="") && (ReqBody.ApplicantDetails.InterestIncome1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.InterestIncome1)<0)
        {
          invalidFieldArr.push("Invalid InterestIncome1 value");
        }
    }

    if((ReqBody.ApplicantDetails.AnnualTax1!=="") && (ReqBody.ApplicantDetails.AnnualTax1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AnnualTax1)<0)
        {
          invalidFieldArr.push("Invalid AnnualTax1 value");
        }
    }

    if((ReqBody.ApplicantDetails.DividendIncome1!=="") && (ReqBody.ApplicantDetails.DividendIncome1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.DividendIncome1)<0)
        {
          invalidFieldArr.push("Invalid DividendIncome1 value");
        }
    }

    if((ReqBody.ApplicantDetails.ShareOfProfit1!=="") && (ReqBody.ApplicantDetails.ShareOfProfit1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ShareOfProfit1)<0)
        {
          invalidFieldArr.push("Invalid ShareOfProfit1 value");
        }
    }

    if((ReqBody.ApplicantDetails.AgricultureITR1!=="") && (ReqBody.ApplicantDetails.AgricultureITR1!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AgricultureITR1)<0)
        {
          invalidFieldArr.push("Invalid AgricultureITR1 value");
        }
    }

    if((ReqBody.ApplicantDetails.GrossIncome2!=="") && (ReqBody.ApplicantDetails.GrossIncome2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.GrossIncome2)<0)
        {
          invalidFieldArr.push("Invalid GrossIncome2 value");
        }
    }

    if((ReqBody.ApplicantDetails.AnnualCapGain2!=="") && (ReqBody.ApplicantDetails.AnnualCapGain2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AnnualCapGain2)<0)
        {
          invalidFieldArr.push("Invalid AnnualCapGain2 value");
        }
    }

    if((ReqBody.ApplicantDetails.InterestIncome2!=="") && (ReqBody.ApplicantDetails.InterestIncome2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.InterestIncome2)<0)
        {
          invalidFieldArr.push("Invalid InterestIncome2 value");
        }
    }

    if((ReqBody.ApplicantDetails.AnnualTax2!=="") && (ReqBody.ApplicantDetails.AnnualTax2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AnnualTax2)<0)
        {
          invalidFieldArr.push("Invalid AnnualTax2 value");
        }
    }

    if((ReqBody.ApplicantDetails.DividendIncome2!=="") && (ReqBody.ApplicantDetails.DividendIncome2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.DividendIncome2)<0)
        {
          invalidFieldArr.push("Invalid DividendIncome2 value");
        }
    }

    if((ReqBody.ApplicantDetails.ShareOfProfit2!=="") && (ReqBody.ApplicantDetails.ShareOfProfit2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ShareOfProfit2)<0)
        {
          invalidFieldArr.push("Invalid ShareOfProfit2 value");
        }
    }

    if((ReqBody.ApplicantDetails.AgricultureITR2!=="") && (ReqBody.ApplicantDetails.AgricultureITR2!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AgricultureITR2)<0)
        {
          invalidFieldArr.push("Invalid AgricultureITR2 value");
        }
    }

    if((ReqBody.ApplicantDetails.GrossIncome3!=="") && (ReqBody.ApplicantDetails.GrossIncome3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.GrossIncome3)<0)
        {
          invalidFieldArr.push("Invalid GrossIncome3 value");
        }
    }

    if((ReqBody.ApplicantDetails.AnnualCapGain3!=="") && (ReqBody.ApplicantDetails.AnnualCapGain3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AnnualCapGain3)<0)
        {
          invalidFieldArr.push("Invalid AnnualCapGain3 value");
        }
    }

    if((ReqBody.ApplicantDetails.InterestIncome3!=="") && (ReqBody.ApplicantDetails.InterestIncome3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.InterestIncome3)<0)
        {
          invalidFieldArr.push("Invalid InterestIncome3 value");
        }
    }

    if((ReqBody.ApplicantDetails.AnnualTax3!=="") && (ReqBody.ApplicantDetails.AnnualTax3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AnnualTax3)<0)
        {
          invalidFieldArr.push("Invalid AnnualTax3 value");
        }
    }

    if((ReqBody.ApplicantDetails.DividendIncome3!=="") && (ReqBody.ApplicantDetails.DividendIncome3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.DividendIncome3)<0)
        {
          invalidFieldArr.push("Invalid DividendIncome3 value");
        }
    }

    if((ReqBody.ApplicantDetails.ShareOfProfit3!=="") && (ReqBody.ApplicantDetails.ShareOfProfit3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.ShareOfProfit3)<0)
        {
          invalidFieldArr.push("Invalid ShareOfProfit3 value");
        }
    }

    if((ReqBody.ApplicantDetails.AgricultureITR3!=="") && (ReqBody.ApplicantDetails.AgricultureITR3!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AgricultureITR3)<0)
        {
          invalidFieldArr.push("Invalid AgricultureITR3 value");
        }
    }

    if((ReqBody.ApplicantDetails.SalaryPaid!=="") && (ReqBody.ApplicantDetails.SalaryPaid!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.SalaryPaid)<0)
        {
          invalidFieldArr.push("Invalid SalaryPaid value");
        }
    }

    if((ReqBody.ApplicantDetails.TaxDeducted!=="") && (ReqBody.ApplicantDetails.TaxDeducted!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.TaxDeducted)<0)
        {
          invalidFieldArr.push("Invalid TaxDeducted value");
        }
    }

    if((ReqBody.ApplicantDetails.OtherReccuringIncome!=="") && (ReqBody.ApplicantDetails.OtherReccuringIncome!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.OtherReccuringIncome)<0)
        {
          invalidFieldArr.push("Invalid OtherReccuringIncome value");
        }
    }

    if((ReqBody.ApplicantDetails.EstimatedBusinessIncome!=="") && (ReqBody.ApplicantDetails.EstimatedBusinessIncome!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.EstimatedBusinessIncome)<0)
        {
          invalidFieldArr.push("Invalid EstimatedBusinessIncome value");
        }
    }

    if((ReqBody.ApplicantDetails.AverageCASABalance!=="") && (ReqBody.ApplicantDetails.AverageCASABalance!==undefined)){
        if(parseFloat(ReqBody.ApplicantDetails.AverageCASABalance)<0)
        {
          invalidFieldArr.push("Invalid AverageCASABalance value");
        }
    }
}
if(invalidFieldArr.length>0) fieldValidationErr=true;
context.setVariable("invalidFieldArr",JSON.stringify(invalidFieldArr));
context.setVariable("fieldValidationErr",fieldValidationErr);

//Validation Functions
function greaterThanZero(reqField){
  if(parseFloat(reqField)>0)
  return true
  else return false;
}

function greaterThanCurrDate(reqDate){
  var count = (reqDate.match(/-/g) || []).length;
  if(((reqDate.match(/-/g) || []).length)!==2)
    return false;
  else{
    var reqDateEpoc=new Date(reqDate).getTime();
    var currDateEpoc=(new Date().getTime())+19800000; //to make GMT +05:30
    if(reqDateEpoc>currDateEpoc) return true;
    else return false;
  }
}

function GECurrDate(reqDate){
  var count = (reqDate.match(/-/g) || []).length;
  if(((reqDate.match(/-/g) || []).length)!==2)
    return false;
  else{
    var reqDateEpoc=new Date(reqDate).getTime();
    var currDateEpoc=(new Date().getTime())+19800000; //to make GMT +05:30

    //generate date in yyyy-mm-dd format
    var date_not_formatted = new Date(currDateEpoc);
    var formatted_string = date_not_formatted.getFullYear() + "-";

    if (date_not_formatted.getMonth() < 9) {
      formatted_string += "0";
    }
    formatted_string += (date_not_formatted.getMonth() + 1);
    formatted_string += "-";

    if(date_not_formatted.getDate() < 10) {
      formatted_string += "0";
    }
    formatted_string += date_not_formatted.getDate();

    if(reqDate===formatted_string) return true;
    else if(reqDateEpoc>currDateEpoc) return true;
    else return false;
  }
}

function lesserThanCurrDate(reqDate){
  var count = (reqDate.match(/-/g) || []).length;
  if(((reqDate.match(/-/g) || []).length)!==2)
    return false;
  else{
    var reqDateEpoc=new Date(reqDate).getTime();
    var currDateEpoc=(new Date().getTime())+19800000; //to make GMT +05:30
    if(reqDateEpoc<currDateEpoc) return true;
    else return false;
  }
}