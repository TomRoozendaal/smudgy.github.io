// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  $(document).ready(() => {
    $('.blur').addClass("antiblur");

  $( "#lform" ).submit(function( event ) {
    alert( "hihi silly user, this function isn't working yet ;)" );
    event.preventDefault();
  });

  $(".card").on('mouseenter', event => {
    $("#home").addClass("darken");
    $(event.currentTarget).removeClass("text-muted");
  });
  $(".card").on('mouseleave', event => {
    $("#home").removeClass("darken");
    $(event.currentTarget).addClass("text-muted");
  });
  // $('.hide-button').on('click', () => {
  //   $('.first-image').hide();
  // });
  //
  // $('.show-button').on('click', () => {
  //   $('.first-image').show();
  // });
  //
  // $('.toggle-button').on('click', () => {
  //   $('.first-image').toggle();
  // });
  //
  // $('.fade-out-button').on('click', () => {
  //   $('.fade-image').fadeOut(500);
  // });
  //
  // $('.fade-in-button').on('click', () => {
  //   $('.fade-image').fadeIn(4000);
  // });
  //
  // $('.fade-toggle-button').on('click', () => {
  //   $('.fade-image').fadeToggle();
  // });
  //
  // $('.up-button').on('click', () => {
  //
  //   $('.slide-image').slideDown('slow');
  //   $('.slide-image').hide();
  //   $('.slide-image').slideUp(100);
  //
  // });
  //
  // $('.down-button').on('click', () => {
  //   $('.slide-image').slideDown('slow');
  // });
  //
  // $('.slide-toggle-button').on('click', () => {
  //   $('.slide-image').slideToggle();
  // });

});
