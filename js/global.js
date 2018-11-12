$(document).ready(function(){
  new Swiper('.main_slide', {
      pagination: {
        el: '.swiper-pagination',
        clickable : true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });


  new Swiper('.edit_swipe_wrap', {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
    //   loopFillGroupWithBlank: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination.page_num',
        type: 'fraction',
      },
      breakpoints: {
        1200: {
            slidesPerView: 3,
            loopedSlides: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            loopedSlides: 2,
            spaceBetween: 20,
          },
        640: {
            slidesPerView: 2,
            loopedSlides: 2,
            spaceBetween: 17,
          },
        400: {
            slidesPerView: 1,
            loopedSlides: 1,
          }
      }
  });

  // 회원 가입 처리
  $('#login_btn').click(function(e){
    e.preventDefault();
    if($("#uname").val() ==''){
        alert('이름을 입력하세요');
        $("#uname").focus();
        return false;
    }

    var email = $('#uemail').val();
    if(email == ''){
        alert('이메일을 입력하세요');
        $("#uemail").focus();
        return false;
    } else {
        var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailRegex.test(email)) {
            alert('이메일 주소가 유효하지 않습니다. ex)abc@gmail.com');
            $("#uemail").focus();
            return false;
        }
    }

    if($("#psw").val() ==''){
        alert('비밀번호를 입력하세요');
        $("#psw").focus();
        return false;
    }
    if($("#pswchk").val() ==''){
        alert('비밀번호를 다시 한번 더 입력하세요');
        $("#pswchk").focus();
        return false;
    }
    
    if($("#psw").val()!== $("#pswchk").val()){
        alert('비밀번호를 둘다 동일하게 입력하세요');
        return false;
    }

    if($("#agree").is(":checked") == false){
        alert('약관에 동의하셔야 합니다');
        return false;
    }
    
    $.ajax({
        url: '',
        type: 'POST',
        data: {
            name:$("#uname").val(),
            userID:$('#uemail').val(),
            email:$('#uemail').val(),
            password:$('#psw').val()
        },
        dataType: "json",
        success: function (response) {
            if(response.result == 1){
                alert('가입 완료');
                location.replace('../index.php'); // 화면 갱신
            } else if(response.result == 0){
                alert('이미 가입된 아이디입니다');
            } else if(response.result == -2){
                alert('입력된 값이 없습니다');
            } else {
                alert('등록중에 에러가 발생했습니다');
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert("arjax error : " + textStatus + "\n" + errorThrown);
        }
    });        
    
  });

  $('.fpw_btn').click(function(e){
    var email = $('#femail').val();
    if(email == ''){
        alert('이메일을 입력하세요');
        $("#femail").focus();
        return false;
    } else {
        var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailRegex.test(email)) {
                alert('이메일 주소가 유효하지 않습니다. ex)abc@gmail.com');
                $("#femail").focus();
                return false;
            }
        }
    });

});