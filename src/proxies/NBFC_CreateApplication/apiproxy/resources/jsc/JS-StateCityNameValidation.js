var StateCityList=JSON.parse(context.getVariable("StateCityList"));
var vh = context.getVariable("virtualhost.name");
var InternalAPIKEY=context.getVariable("private.APIKEYInternal");
var env=context.getVariable("environment.name");
var readstateResp,myResponse,reqError;

var headers = {'APIKey':InternalAPIKEY};
if (env === "test" && vh === "default") {var myRequest = new Request('http://kvb-'+env+'.apigee.net/nbfc/next/v1/losapi/stateList','GET',headers);}
else if(env === "prod") {var myRequest = new Request('https://www.kvbbank.net.in/nbfc/next/v1/losapi/stateList','GET',headers);}
else    var myRequest = new Request('https://kvb-'+env+'.apigee.net/nbfc/next/v1/losapi/stateList','GET',headers);
myResponse =httpClient.send(myRequest);
myResponse.waitForComplete();
readstateResp = myResponse.getResponse();
if((readstateResp === undefined) || (readstateResp === "") || (readstateResp === {}) || (readstateResp === [])) 
{
  context.setVariable("reqError",true);
  throw 'Error in getStateList request';
}
else{
  var readstateRespPayload = JSON.parse(readstateResp.content);
  var validationResult=stateCityCheck(StateCityList,readstateRespPayload.records,env,headers,vh);
  if(validationResult===true) context.setVariable("invalidStateCityname",false);
  else  context.setVariable("invalidStateCityname",true);
}

function stateCityCheck(sclist,validstatearr,env,headers,vh){
  var errcount=0,i;
  for (i = 0; i < sclist.length; i++) {
    var stateispresent,cityispresent;
    for (var j = 0; j < validstatearr.length; j++) {
      stateispresent=false;
      if(sclist[i].state===validstatearr[j].MasterLabel){
          var stateCode=validstatearr[j].COD_STATE__c,myRequest2;
          stateispresent=true;
          j=validstatearr.length+1;
          if (env === "test" && vh === "default") {myRequest2 = new Request('http://kvb-'+env+'.apigee.net/nbfc/next/v1/losapi/cityList?stateCode='+stateCode, 'GET',headers);}
          else if(env === "prod") {myRequest2 = new Request('https://www.kvbbank.net.in/nbfc/next/v1/losapi/cityList?stateCode='+stateCode, 'GET',headers);}
          else  myRequest2 = new Request('https://kvb-'+env+'.apigee.net/nbfc/next/v1/losapi/cityList?stateCode='+stateCode, 'GET',headers);
          myResponse2 =httpClient.send(myRequest2);
          myResponse2.waitForComplete();
          readcityResp = myResponse2.getResponse();
          if((readcityResp === undefined) || (readcityResp === "") || (readcityResp === {}) || (readcityResp === [])) 
          {
            context.setVariable("reqError",true);
            throw 'Error in getCityList request';
          }
          else{
            var readcityRespPayload = JSON.parse(readcityResp.content);
            for (var k = 0; k < readcityRespPayload.records.length; k++) {
              cityispresent=false;
              print(sclist[i].city+"="+readcityRespPayload.records[k].Name);
              if(sclist[i].city===readcityRespPayload.records[k].Name){
                  cityispresent=true;
                  k=readcityRespPayload.records.length+1;
              }
            }
            if(cityispresent===false){print("cityisnotpresent"); return false;}
          }
      }
    }
    if(stateispresent===false){print("stateisnotpresent");  return false;}
  }
  if(i===sclist.length) return true;
}