var resp=JSON.parse(context.getVariable("response.content")),
statusCode=resp.statusCode;

try{
if(statusCode==200){
  delete resp.successMessage;
  delete resp.errorMessage;
  context.setVariable("los_status_code",statusCode);
  context.setVariable("respApplicationId",resp.ApplicationId);
  context.setVariable("response.status.code",statusCode);
  context.setVariable("response.content",JSON.stringify(resp));
}
else{
  var errBody={};
  errBody.errorCode=statusCode;
  errBody.errorType=resp.errorMessage;
  errBody.errorMessage=resp.errorMessage;
  delete resp.successMessage;
  delete resp.ApplicationName;
  delete resp.ApplicationId;
  delete resp.ApplicationDocCategoryDetails;
  delete resp.ApplicantId;
  context.setVariable("los_status_code",statusCode);
  context.setVariable("response.status.code",statusCode);
  context.setVariable("response.content",JSON.stringify(errBody));
}
}
catch(err){
    context.setVariable("response.status.code",500);
    context.setVariable("response.content",JSON.stringify(err));
}