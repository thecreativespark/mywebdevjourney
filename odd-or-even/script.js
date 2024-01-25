document.addEventListener('DOMContentLoaded', function(){
    var myForm = document.getElementById('form');
    var input = document.getElementById('num');
    var output = document.getElementById('output');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        var inputValue = input.value;
        if(inputValue == 0 || inputValue == 1){
            output.textContent = "Nither Even nor Odd";
        }
        else if(inputValue%2==0){
            output.textContent = "Even";
        }
        else{
            output.textContent = "Odd";
        }
    });
});

