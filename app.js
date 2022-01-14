
const start = document.getElementById('start');
const h1 = document.getElementById('output');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
const loder = document.querySelector('.laoder');


 let counter_value ;
let counter = 0 ;

start.addEventListener('click', function () {
    
    counter_value = count.value ;


   counter =  setInterval(() => {
        h1.innerHTML = counter_value;
        
        let width = laoder(count.value , counter_value);
        loder.style.width = `${width}%`

        if(width > 50 && width <= 100){
            loder.style.backgroundColor = 'green';
        }else if (width > 30 && width <= 50){
            loder.style.backgroundColor = 'orange';
        }else if(width <= 30 ){
            loder.style.backgroundColor = 'red';
        };
    
    

        if(counter_value == 0){
            clearInterval(counter) ;
        }
        counter_value -- ;
      

    }, 1000);

  

});
