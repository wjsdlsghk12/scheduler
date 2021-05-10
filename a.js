b = 100
w = 100

t = [10,10,10,10,10,10,10,10,10,10]


function solution(b, w, t) {
    var answer = 0;
    const s = t.length;
    // t.sort(function(f, g)  {
    // return f - g;
    // });    
    var a = [];
    var h = 0;
    var j = 0;
    for(var i=0; s>i; i++){
        if(i == s-1 && h==0){
            a.push(t[0]);
            j = j + a.length + b
            answer = answer + j
        }
        else if(i == s-1 && h!=0 && h+t[0]>w){
            j = j + a.length + b-1
            answer = answer + j
            a=[t[0]];
            h=t[0];
            t.splice(0,1);
            j=0;
            j = j + a.length + b
            answer = answer + j

        }
        else if(i == s-1 && h!=0 && h+t[0]<w+1){
            a.push(t[0]);
            j = j + a.length + b
            answer = answer + j
        }
        else if(h+t[0]<w+1){
            a.push(t[0]);
            h = h + t[0];
            t.splice(0,1);
        }        
        else{               
            j = j + a.length + b-1
            answer = answer + j
            a=[t[0]];
            h=t[0];
            t.splice(0,1);
            j=0;
            }
    }    
    
    return answer;
}
console.log(solution(b,w,t));