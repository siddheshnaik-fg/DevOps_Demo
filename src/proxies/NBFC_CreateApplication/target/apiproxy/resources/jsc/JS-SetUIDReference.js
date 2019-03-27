var ReqBody=JSON.parse(context.getVariable("request.content"));
var RespUIDReference=JSON.parse(context.getVariable("rep_SC-UIDReference.content"));

if(RespUIDReference.bpms_error_msg==="Success"){
    ReqBody.ApplicantDetails.AadharNumber=RespUIDReference.out_msg.REFERENCE_NUMBER;
    context.setVariable("request.content",JSON.stringify(ReqBody));
}