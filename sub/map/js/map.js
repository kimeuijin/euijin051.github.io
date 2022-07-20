let btn_guidance = document.querySelector('#btn_guidance').children;
let guidance = document.querySelectorAll('.guidance');
let btn_course = document.querySelectorAll('.btn_course');
let view_route = document.querySelectorAll('.view_route');
let btn_amenities = document.querySelectorAll('.btn_amenities');
let view_amenities = document.querySelectorAll('.view_amenities');
let btn_step1 = document.querySelector('.btn_step1').children;
let btn_step1_a = document.querySelectorAll('.btn_step1 a');
let view_step1 = document.querySelectorAll('.view_step1');
let btn_step2 = document.querySelector('.btn_step2').children;
let view_step2 = document.querySelectorAll('.view_step2');
let btn_guidance_img = document.querySelectorAll('#btn_guidance li img');
let comment = document.querySelector('.comment').children;
let btn_step2_a = document.querySelectorAll('.btn_step2 a');



function MouseoverView(btn, target1, target2, target3) {

    for(let i=0; i < btn.length; i++){
        btn[i].addEventListener('mouseover', hide);
        btn[i].addEventListener('mouseover', view);
        
        if(target1 == view_amenities || target1 == view_route){
            btn[i].addEventListener('mouseout', hide);
        }

        function hide(){
            for(j=0; j< target1.length; j++){
                target1[j].classList.remove('view');

                if(target2){
                target2[j].classList.remove('view'); //
                } 
                if(target3){
                    target3[j].classList.remove('view');

                    if(target3 == view_step2) {
                        btn_step2_a[j].classList.remove('view')
                    }
                }
            }
        }
    
        function view(){
            target1[i].classList.add('view');

            if(target2){
                target2[i].classList.add('view');
            }
            if(target3){
                if(target3 == view_step2){
                    return false;
                }

                target3[i].classList.add('view');
            }
        }
    }
}

var mouseoverView = new MouseoverView(btn_guidance, guidance,btn_guidance_img);
var mouseoverView = new MouseoverView(btn_course,view_route);
var mouseoverView = new MouseoverView(btn_amenities,view_amenities);
var mouseoverView = new MouseoverView(btn_step1,view_step1,btn_step1_a,view_step2);
var mouseoverView = new MouseoverView(btn_step2,view_step2,comment,btn_step2_a);


