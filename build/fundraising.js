$(function () {
  $("#timebank").change(function () {
    $(".timebankcredit").toggle();
  });
  $(".monetarydonations").change(function () {
    var isChecked = $(this).val(this.checked);
    var theID = $(this).attr("id");

    if (isChecked) {
      if (theID === "onetime") {
        $("#recurring").prop("checked", !isChecked);
        $(".sustainingbtn").toggle();
        $(".onetimebtn").toggle(true);
      } else if (theID === "recurring") {
        $(".sustainingbtn").toggle(true);
        $(".onetimebtn").toggle();
        $("#onetime").prop("checked", !isChecked);
      }
    }
  });

  $("#timebank").change(function () {
    $(".timebankcredit").toggle();
  });
  /* For the overhead */
  $("#donationamnt").change(function (event) {
    var threepercent = parseInt($(this).val()) * 0.03;
    var sixpercent = parseInt($(this).val()) * 0.06;
    $("#threepercent_lbl").text("$" + threepercent); //supportecosystem

    $("#sixpercent_lbl").text("$" + sixpercent); //
    $(".supportecosystem").css("display", "inline-block");

    //  $(".supportecosystem").toggle();
  });

  var style = {
    base: {
      color: "#32325d",
    },
  };

  var stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  var elements = stripe.elements();

  var card = elements.create("card", { style: style });
  card.mount("#card-element");
  card.on("change", ({ error }) => {
    const displayError = document.getElementById("card-errors");
    if (error) {
      displayError.textContent = error.message;
    } else {
      displayError.textContent = "";
    }
  });
});
