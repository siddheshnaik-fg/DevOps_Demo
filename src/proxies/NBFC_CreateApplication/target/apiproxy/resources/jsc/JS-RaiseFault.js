var response = JSON.parse(context.getVariable("error.content"));

if(response.errorCode === "405"){
    // to handle Method Not Allowed fault
	var errorResp = response;
    context.setVariable("response.content", JSON.stringify(errorResp));
    context.setVariable("error.content", JSON.stringify(errorResp));
    context.setVariable("error.status.code", 405);
}else if(response.errorCode === "400"){
    // to handle Missing Request Body elements fault	
	var errorResp = response;
    context.setVariable("response.content", JSON.stringify(errorResp));
    context.setVariable("error.content", JSON.stringify(errorResp));
    context.setVariable("error.status.code", 400);
}else if(response.errorCode === "403"){
    // to handle Invali IP fault	
	var errorResp = response;
    context.setVariable("response.content", JSON.stringify(errorResp));
    context.setVariable("error.content", JSON.stringify(errorResp));
    context.setVariable("error.status.code", 403);
}else if(response.errorCode === "404"){
	// to handle Resource Not Found fault
	var errorResp = response;
    context.setVariable("response.content", JSON.stringify(errorResp));
    context.setVariable("error.content", JSON.stringify(errorResp));
    context.setVariable("error.status.code", 404);
}
else{
	var errorResp = {"errorCode":"500","errorType":"Internal Server Error","errorMessage":"Server encountered an unexpected condition that prevented it from fulfilling the request."};
    context.setVariable("response.content", JSON.stringify(errorResp));
    context.setVariable("error.content", JSON.stringify(errorResp));
    context.setVariable("error.status.code", 500);
}