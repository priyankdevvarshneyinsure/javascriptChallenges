    function sumOfNumbers(...args){
        var sum=args.reduce((acc,elem) => acc+elem,0);
       

        console.log(sum);
    }

sumOfNumbers(10,20,30);
