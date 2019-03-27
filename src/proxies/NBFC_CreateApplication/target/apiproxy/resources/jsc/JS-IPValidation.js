var custom_whitelist = context.getVariable("AllowIPs");
if (custom_whitelist && custom_whitelist !== "*" && custom_whitelist !== "" && custom_whitelist !== null) {
    var ranges = convertAsRangesArray(custom_whitelist);
    var ip = context.getVariable("proxy.client.ip");
    var found = ipIsInNet(ip, ranges);
    if (!found) {
        context.setVariable("invalidIP",true);
    }
}

function ipIsInNet(ipaddr, ranges) {
    var found = false;
    if (ipaddr !== null) {
        for(inx = 0; inx < ranges.length; inx++) {
            if (isInRange(ipaddr, ranges[inx][0], ranges[inx][1])) {
                found = true;
             break;
            }
        }
    }
    return found;
}
function isInRange(ip, start, end){
var ipInt = dot2num(ip);
    var startInt = dot2num(start);
    var endInt = dot2num(end);
  if( ipInt >= startInt && ipInt <= endInt)
      return true;
    else
      return false;
}
function convertAsRangesArray(rangesString) {
    var ranges = rangesString.split("|");
  var rangeArray = new Array(ranges.length);
  for(var i=0; i< ranges.length; i++){
      //check if the IP is in cidr notation.
      if(ranges[i].indexOf('/') != -1 ){
        rangeArray[i] = getCIDRRange(ranges[i]);
      } else {
      rangeArray[i] = new Array(2);
      rangeArray[i][0] = ranges[i];
      rangeArray[i][1] = ranges[i];
      }
  }
    return rangeArray;
}
function getCIDRRange(cidr){
 var range = [2];
    cidr = cidr.split('/');
    var start = dot2num(cidr[0]);
    range[0] = num2dot(start);
    range[1] = num2dot(Math.pow(2, 32 - cidr[1]) + start - 1);
    return range;
}
function dot2num(dot) 
{
    var d = dot.split('.');
    return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
}
function num2dot(num) 
{
    var d = num%256;
    for (var i = 3; i > 0; i--) 
    { 
        num = Math.floor(num/256);
        d = num%256 + '.' + d;
    }
    return d;
}