/**
 * Created by suda on 15/10/20.
 */

function ViolentMatch(str, pattern){

    var sLen = str.length;
    var pLen = pattern.length;

    var i = 0;
    var j = 0;

    while(i < sLen && j < pLen){

        if(str.charAt(i) === pattern.charAt(j)) {
            i++;
            j++;
        }else{
            i = i - j + 1;
            j = 0;
        }
    }

    if (j == pLen){
        return i - j;
    }else {
        return -1;
    }
}
