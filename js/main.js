/* Custom JS goes here. */

// Created a document ready handler
$(document).on('ready', function(){

// Defined validation object
$('#order-form').validate({
  submitHandler: function(form) {

// Connected validation object to the submit button
   form.submit();
 },

 // I worked through the 'To-Do's from the top down, my steps
 // are documented in 'index.html'.
  rules: {
    "your-name": {
      required: true,
      maxlength: 128
    },

    "your-address": {
      required: true
    },

    "your-city": {
      required: true
    },

    "your-state": {
      required: true,
      minlength: 2,
      maxlength: 2,
      digits: true
    },

    "your-zip": {
      required: true,
      minlength: 5,
      maxlength: 5,
      digits: true
    },

    "card-holder-name": {
      required: true,
   // I first tried 'equalto', with the intention of making the cardholder name
   // match the user's name, but I wasn't able to connect the two.
      maxlength: 128
    },

    "card-number": {
      required: true,
      minlength: 16,
      maxlength: 16,
      creditcard: true
    }

    "expiry-month": {
      required: true
    }

    "expiry-year": {
      required: true
    }

    "cvv": {
      required: true,
      digits: true,
      minlength: 3,
      maxlength: 3
    }
  }

  "shipping-method": {
    required: true
  }

  "comments": {
      required: false,
      maxlength: 500
  }

  messages: {
    "your-name": {
      required: "Please enter your name.",
      maxlength: "Names may not be longer than 128 characters"
    },

    "your-address": {
      required: "Please enter your street address."
    },

    "your-city": {
      required: "Please enter your city."
    },

    "your-state": {
      required: "Please enter your state abbreviation.",
      minlength: "State abbreviations must be at least two letters.",
      maxlength: "State abbreviations may not be more than two letters.",
      digits: false
    },

    "your-zip": {
      required: "Please enter your zip code.",
      minlength: "Zip codes must be at least five digits long.",
      maxlength: "Zip codes may not be more than five digits long.",
      digits: "Zip codes may only contain numbers."
    },

    "card-holder-name": {
      required: "Please enter your name as it appears on your credit card.",
      equalto:
    },

    "card-number": {
      required: "Please enter your credit card number.",
      minlength: "Credit card number does not contain enough digits.",
      maxlength: "Credit card number contains too many digits."
    }

    "expiry-month": {
      required: "Please enter your credit card expiration month."
    }

    "expiry-year": {
      required: "Please enter your credit card expiration year."
    }

    "cvv": {
      required: "Please enter your CVV (the three digit number on the back of your card).",
      digits: "CVV may only contain numbers.",
      minlength: "CVV must be at least three digits long.",
      maxlength: "CVV may not be more than three digits long."
    }


  }
 });


});

$('label span.glyphicon').tooltip();
)};