---
# Form ajax submission variable gets populated via config file.
---

// Handles the request tour modal dialog
$(document).ready(function(){
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2, // Creates a dropdown of 15 years to control year
    format: 'mm/dd/yyyy',
    closeOnSelect: true,
    onSet: function(arg) {
      if ('select' in arg) { // prevent closing on selecting month/year
        this.close();
      }
    }
  });

  // The "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity: .5,
    in_duration: 300,
    out_duration: 200
  });

  // Close button for tour form just closes window after clearing elements.
  $('#js-request-tour-modal .modal-close').click(function() {
    $("#name").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#affiliation").val("");
    $("#groupsize").val("");
    $("#desiredtourdate").val("");
    $("#specialaccommodations").val("");
    $('#js-request-tour-modal').closeModal();
  });

  // Override default form submission for the tour request.
  $('#tour-request-form').on('submit', function(evt) {
    evt.preventDefault();
    if ($('#tour-request-form')[0].checkValidity()) {
      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var affiliation = document.getElementById("affiliation").value;
      var groupsize = document.getElementById("groupsize").value;
      var desiredtourdate = document.getElementById("desiredtourdate").value;
      var specialaccommodations = document.getElementById("specialaccommodations").value;
      var specificrequest = document.getElementById("specificrequest").value;
      var paramString = 'name=' + name + '&phone=' + phone + '&email=' + email +
        '&affiliation=' + affiliation + '&groupsize=' + groupsize +
        '&desiredtourdate=' + desiredtourdate +
        '&specialaccommodations=' + specialaccommodations +
        '&specificrequest=' + specificrequest;
      $.ajax({
        url: "{{site.tour_request_ajax_submission_url}}",
        type: "POST",
        data: paramString,
        dataType: 'json',
        success: function(data) {
          $("#name").val("");
          $("#phone").val("");
          $("#email").val("");
          $("#affiliation").val("");
          $("#groupsize").val("");
          $("#desiredtourdate").val("");
          $("#specialaccommodations").val("");
          $('#js-request-tour-modal-confirmation .request-tour-form p').replaceWith(data.confirmationMsg);
          $('#js-request-tour-modal').closeModal();
          $('#js-request-tour-modal-confirmation').openModal();
        }
      });
    }
  });

});
