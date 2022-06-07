function bubble(arr){
   let arr = parseInt(document.getElementById("#arr"));
   var i,j;
   var len = arr.length;

   var troca = false

   for(i=0; i<len;i++){
       troca = false
        for(j = 0; j<len; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1]= temp;
                troca = true
            }

        }
    
        if(!troca){
            break;
        }
    }

    document.getElementById(arr).innerHTML = arr;


    }

