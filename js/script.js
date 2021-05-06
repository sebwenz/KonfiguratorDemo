  var html = '<b>60.000€</b>';
  var priceTotal;

$('#Presse').click(
    function(){
        $('.highlight').removeClass('highlight');
        $(this).addClass('highlight');
        html = '<b>42.400€</b>';
        priceTotal = 42400;
        localStorage.setItem("total", priceTotal);
        $("#total").html(priceTotal + "€");
              console.log(priceTotal);
    });

    $('#Spindel-Presse').click(
        function(){
            $('.highlight').removeClass('highlight');
            $(this).addClass('highlight');
            html = '<b>60.000€</b>';
            priceTotal = 60000;
            localStorage.setItem("total", priceTotal);
            $("#total").html(priceTotal + "€");
                  console.log(priceTotal);
        });

$('#ohne').click(
    function(){
      localStorage.getItem("total");
      $('.highlight').removeClass('highlight');
      $(this).addClass('highlight');
      html = '<b>42.400€</b>';
      priceTotal = $("#total").val();
      priceTotal = priceTotal + 0;
      $("#total").html(priceTotal + "€");
            console.log(priceTotal);
    });

$('#absaugung').click(
    function(){
        localStorage.getItem("total");
        $('.highlight').removeClass('highlight');
        $(this).addClass('highlight');
        html = '<b>60.000€</b>';
        priceTotal = $("#total").val();
        priceTotal = priceTotal + 5000;
        $("#total").html(priceTotal + "€");
              console.log(priceTotal);
    });

    $('#sonderwickler').click(
        function(){
          localStorage.getItem("total");
          $('.highlight').removeClass('highlight');
          $(this).addClass('highlight');
          html = '<b>42.400€</b>';
          priceTotal = $("#total").val();
          priceTotal = priceTotal + 10000;
          $("#total").html(priceTotal + "€");
                console.log(priceTotal);
        });

    $('#100kgWickler').click(
        function(){
            localStorage.getItem("total");
            $('.highlight').removeClass('highlight');
            $(this).addClass('highlight');
            html = '<b>60.000€</b>';
            priceTotal = $("#total").val();
            priceTotal = priceTotal + 8400;
            $("#total").html(priceTotal + "€");
                  console.log(priceTotal);
        });
