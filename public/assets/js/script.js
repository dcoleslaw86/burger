  $(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            location.reload();
        }
        );
    });
  });