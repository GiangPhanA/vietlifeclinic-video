jQuery(document).ready(function ($) {
  $.datetimepicker.setLocale('vi');
  if($('.form-dangky').length>0) {
    $('#datepicker').datetimepicker({
      i18n:{
        vi:{
         months:[
          'Tháng 1','Tháng 2','Tháng 3','Tháng 4',
          'Tháng 5','Tháng 6','Tháng 7','Tháng 8',
          'Tháng 9','Tháng 10','Tháng 11','Tháng 12',
         ],
         dayOfWeek:[
          "CN", "Thứ 2", "Thứ 3", "Thứ 4",
          "Thứ 5", "Thứ 6", "Thứ 7",
         ]
        }
       },
       timepicker:false,
       lang: 'vi',
       datepicker:true,
      format: 'd/m/Y',
      minDate:'+1970/01/02'
    })
  }

  if($('#form-sangloc').length>0) {
    $('#dob').datetimepicker({
      i18n:{
        vi:{
         months:[
          'Tháng 1','Tháng 2','Tháng 3','Tháng 4',
          'Tháng 5','Tháng 6','Tháng 7','Tháng 8',
          'Tháng 9','Tháng 10','Tháng 11','Tháng 12',
         ],
         dayOfWeek:[
          "CN", "Thứ 2", "Thứ 3", "Thứ 4",
          "Thứ 5", "Thứ 6", "Thứ 7",
         ]
        }
       },
       timepicker:false,
       yearStart: 1942,
       yearEnd: 2008,
       startDate: "1942/01/01",
       maxDate: "2008/12/31",
       lang: 'vi',
       datepicker:true,
       scrollInput: true,
       scrollMonth: true,
       format: 'd/m/Y',
       onSelectDate: function(ct) {
         var today = new Date().getFullYear(),
         dob = new Date(ct).getFullYear(),
         age = today - dob;
         $('#age').val(age);
       }
    })
  }

  if($('.cf7-display-steps-container').length>0) {
    $('.cf7-steps-1').empty().append('<span class="step-name">B1</span>');
    $('.cf7-steps-2').empty().append('<span class="step-name">B2</span>');
    $('.cf7-steps-3').empty().append('<span class="step-name">B3</span>');
    $('.cf7-steps-4').empty().append('<span class="step-name">B4</span>');
    $('.cf7-steps-5').empty().append('<span class="step-name">B5</span>');
  }

  document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '13558' == event.detail.contactFormId ) {
      $('form.wpcf7-form').trigger('reset');
      // $('form.wpcf7-form').empty().append('<div class="form-hidden">Bạn đã hoàn thành bản trắc nghiệm</div>');
    }
  }, false);

})
