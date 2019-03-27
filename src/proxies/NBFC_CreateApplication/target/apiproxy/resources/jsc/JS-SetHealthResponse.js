var response = JSON.parse(context.getVariable("oauthResponseHealth.content"));
    if((response.access_token) && response.access_token !== "" 
        && (response.issued_at) && response.issued_at !== ""  ){
	context.setVariable("response.status.code" , 200);
    }
    else{context.setVariable("response.status.code" , 500);}