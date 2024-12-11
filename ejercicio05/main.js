const SELECT = document.querySelector("select");
const P = document.querySelector("p");

function setWeather() {
   const choice = SELECT.value;
   
   switch (choice) {
       case "sunny":
           P.textContent =
           "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
           break;
       case "rainy":
           P.textContent =
           "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
           break;
       case "snowing":
           P.textContent =
           "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
           break;
       case "overcast":
           P.textContent =
           "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
           break;
       default:
           P.textContent = "";
   }
}

SELECT.addEventListener("change", setWeather);