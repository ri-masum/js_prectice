        // input in text box and show it in paragraph line 

        document.getElementById('update').addEventListener('click',function(){
            const inputFeild=document.getElementById('inputFeild');
            const inputText=inputFeild.value;
            console.log(inputText);
        
            const p=document.getElementById('showOutput');
            p.innerText=inputText;
            inputFeild.value=''
        })
        