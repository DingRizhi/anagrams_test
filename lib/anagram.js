function anagram(str) {
    
    var result = []

    if(!str){
        return result
    }
    if(str.length == 1 ){
        return [str]
    }

    //result.push(str);
    if(str.length == 2){
        return [str[0]+str[1],str[1]+str[0]]
    }

    for(var i=0; i<str.length; i++){
        for(var j=0; j<str.length-1; j++){
            result.push(str[i]+anagram(drop(str,i))[j])
        }
        // result.push(str[i]+anagram(drop(str,i))[0])  
        // result.push(str[i]+anagram(drop(str,i))[1])
        // result.push("b"+anagram(drop(str,1))[0])
        // result.push("b"+anagram(drop(str,1))[1])
        // result.push("c"+anagram(drop(str,2))[0])
        // result.push("c"+anagram(drop(str,2))[1])
        
        return result
    }
}

function drop(str, n){
    var result = ""
    for(var i=0; i<str.length; i++){
        if(i == n){
            continue
        }  
        result +=str[i]
    }
    return result
}

module.exports = anagram