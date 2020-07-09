  // $(function() {
  //   $(".create-form").on("submit", function(event) {
  //       event.preventDefault();
  //       var newBurger = {
  //           burger_name: $("#newburger").val().trim(),
  //           devoured: 0
  //       };

  //       $.ajax("/api/burgers", {
  //       type: "POST",
  //       data: newBurger
  //       }).then(
  //       function() {
  //           location.reload();
  //       }
  //       );
  //   });
  // });



  $(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        location.reload();
      });
    });
  });