"use strict";
    const btn = document.querySelector('button');

    // btn.onclick = function(){
    //     alert('click');
    // }

    // btn.addEventListener('click', () => {
    //     alert('click');
    // });

    let i = 0;

    const deleteElement = (e) => {
        console.log(e.target);
        i++;
        if(i == 1){
            btn.removeEventListener('click', deleteElement);
        }
    };

    btn.addEventListener('click',deleteElement);
    // btn.removeEventListener('click',deleteElement);