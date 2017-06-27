/**
 *
 * @param desStr destination string values which need union or intersection
 * @param compStr the compared string values
 * @param splitStr string values joined by
 * @param isUnion if true will union desStr and compStr, if false will intersection
 * @returns {*}
 */
function mergeValString(desStr, compStr, splitStr, isUnion) {
    if (desStr && !compStr) {
        return desStr;
    } else if (!desStr && compStr) {
        return isUnion ? compStr : desStr;
    } else if (desStr && compStr) {
        splitStr = splitStr || ',';
        var desStrArr = desStr.split(splitStr);
        var compStrArr = compStr.split(splitStr);
        compStrArr.map(function (val) {
            if(isUnion){
                if(desStr.indexOf(val) == -1) {
                    desStrArr.push(val);
                }
            }else{
                if(desStrArr.indexOf(val) > -1){
                    desStrArr.splice(desStrArr.indexOf(val), 1);
                }
            }
        });
        return desStrArr.join(splitStr);
    }
}

var desStr = 'ab,cd,ef';
// var desStr = null;
var compStr = 'cd,ss';
// var compStr = null;
var splitStr = ',';

mergeValString(desStr, compStr, splitStr, true); // "ab,cd,ef,ss"
mergeValString(desStr, compStr, splitStr, false); // "ab,ef"

