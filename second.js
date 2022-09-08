$(document).ready(function(){
        console.log('External Jquery Is runing ');

        $('#h7_external').click(function(){
            console.log('printing from external function id selector');
            console.log(this);
        });
});