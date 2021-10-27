


$(function(e){
    let $OnceMainImg1 = $('.main-product-1').attr('src');
    let $OnceMainImg2 = $('.main-product-2').attr('src');
    let $OnceMainImg3 = $('.main-product-3').attr('src');

    let $OnceOtherImg1 = $('.other-product-1-1').attr('src');
    let $OnceOtherImg2 = $('.other-product-2-1').attr('src');
    let $OnceOtherImg3 = $('.other-product-3-1').attr('src');
   
    let $otherImgs1 = $('.other-product-1');
    let $otherImgs2 = $('.other-product-2');
    let $otherImgs3 = $('.other-product-3');


    $($otherImgs1).click(function(){
        $(this).each(function() {
            if($(this).hasClass("other-product-1")){
                let otherImgSrc1 = $(this).attr('src');
                $('.main-product-1').attr('src', otherImgSrc1);
                $('.other-product-1-1').attr('src', $OnceOtherImg1);

            }
          
            if($(this).hasClass("other-product-1-1")){
                $('.other-product-1-1').attr('src', $OnceMainImg1);


            }
    
        });

    });

    $($otherImgs2).click(function(){
        $(this).each(function() {
            if($(this).hasClass("other-product-2")){
                let otherImgSrc2 = $(this).attr('src');
                $('.main-product-2').attr('src', otherImgSrc2);
                $('.other-product-2-1').attr('src', $OnceOtherImg2);

            }
          
            if($(this).hasClass("other-product-2-1")){
                $('.other-product-2-1').attr('src', $OnceMainImg2);


            }
    
        });

    });

    $($otherImgs3).click(function(){
        $(this).each(function() {
            if($(this).hasClass("other-product-3")){
                let otherImgSrc3 = $(this).attr('src');
                $('.main-product-3').attr('src', otherImgSrc3);
                $('.other-product-3-1').attr('src', $OnceOtherImg3);

            }
          
            if($(this).hasClass("other-product-3-1")){
                $('.other-product-3-1').attr('src', $OnceMainImg3);


            }
    
        });

    });
        
    
     
});

  