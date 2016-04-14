---
# Form ajax submission variable gets populated via config file.
---

// Handles the request tour modal dialog
$(document).ready(function(){
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2 // Creates a dropdown of 15 years to control year
  });

  // The "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity: .5,
    in_duration: 300,
    out_duration: 200
  });

  // Send Request button handles form content and updates confirmation message
  // before displaying confirmation modal.
  $('.modal-action .modal-close .send-request').click(function() {
    $('#js-request-tour-modal-confirmation .request-tour-form p').replaceWith("Testing");
    $('#js-request-tour-modal').closeModal();
    $('#js-request-tour-modal-confirmation').openModal();
  });

  // Close button for tour form just closes window after clearing elements.
  $('.modal-action .modal-close .close').click(function() {
    $("#name").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#affiliation").val("");
    $("#groupsize").val("");
    $("#desiredtourdate").val("");
    $("#specialaccommodations").val("");
    $('#js-request-tour-modal').closeModal();
  });

  // When patron clicks send request modal button
/*  $('.modal-action .send-request').on('click', function() {
    $('#tour-request-form').submit(function(evt) {
      evt.preventDefault();
      var $form = $(this);
      if ($form.valid()) {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var affiliation = document.getElementById("affiliation").value;
        var groupsize = document.getElementById("groupsize").value;
        var desiredtourdate = document.getElementById("desiredtourdate").value;
        var specialaccommodations = document.getElementById("specialaccommodations").value;
        var specificrequest = document.getElementById("specificrequest").value;
        var dataString = 'name=' + name + '&phone=' + phone + '&email=' + email +
          '&affiliation=' + affiliation + '&groupsize=' + groupsize +
          '&desiredtourdate=' + desiredtourdate +
          '&specialaccommodations=' + specialaccommodations +
          '&specificrequest=' + specificrequest;
        $.ajax({
          type: "POST",
          url: "{{site.tour_request_ajax_submission_url}}",
          data: dataString,
          dataType: 'json',
          success: function(data) {
            $("#name").val("");
            $("#phone").val("");
            $("#email").val("");
            $("#affiliation").val("");
            $("#groupsize").val("");
            $("#desiredtourdate").val("");
            $("#specialaccommodations").val("");
          }
        });
      }
    });
  });*/
});

function submitTourRequest() {
  var $tourForm = $('#tour-request-form');
  if (! $tourForm[0].checkValidity()) {
    $tourForm.find(':submit').click();
  } else {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var affiliation = document.getElementById("affiliation").value;
    var groupsize = document.getElementById("groupsize").value;
    var desiredtourdate = document.getElementById("desiredtourdate").value;
    var specialaccommodations = document.getElementById("specialaccommodations").value;
    var specificrequest = document.getElementById("specificrequest").value;
    var dataString = 'name=' + name + '&phone=' + phone + '&email=' + email +
      '&affiliation=' + affiliation + '&groupsize=' + groupsize +
      '&desiredtourdate=' + desiredtourdate +
      '&specialaccommodations=' + specialaccommodations +
      '&specificrequest=' + specificrequest;
    $.ajax({
      type: "POST",
      url: "{{site.tour_request_ajax_submission_url}}",
      data: dataString,
      dataType: 'json',
      success: function(data) {
        $("#name").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#affiliation").val("");
        $("#groupsize").val("");
        $("#desiredtourdate").val("");
        $("#specialaccommodations").val("");
      }
    });
  }
/*  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var affiliation = document.getElementById("affiliation").value;
  var groupsize = document.getElementById("groupsize").value;
  var desiredtourdate = document.getElementById("desiredtourdate").value;
  var specialaccommodations = document.getElementById("specialaccommodations").value;
  var specificrequest = document.getElementById("specificrequest").value;
  var dataString = 'name=' + name + '&phone=' + phone + '&email=' + email +
    '&affiliation=' + affiliation + '&groupsize=' + groupsize +
    '&desiredtourdate=' + desiredtourdate +
    '&specialaccommodations=' + specialaccommodations +
    '&specificrequest=' + specificrequest;
  $.ajax({
    type: "POST",
    url: "{{site.tour_request_ajax_submission_url}}",
    data: dataString,
    dataType: 'json',
    success: function(data) {
      $("#name").val("");
      $("#phone").val("");
      $("#email").val("");
      $("#affiliation").val("");
      $("#groupsize").val("");
      $("#desiredtourdate").val("");
      $("#specialaccommodations").val("");
      $('.request-tour-form').replaceWith(data.confirmationMsg);
    }
  });*/
}
