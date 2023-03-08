function dark(){ /* fonction appliquant un thème sombre aux pages sauf Commande */
    var ele = document.getElementById("dark");
    var body_color = window.getComputedStyle(document.getElementById("body"), null).backgroundColor;
    var text_color = window.getComputedStyle(document.getElementById("body"), null).color;
               
    if (body_color == "rgb(255, 255, 255)") {
        body_color = document.body.style.backgroundColor = "black";
        text_color = document.body.style.color = "lightgray";

      return(body_color);
        return(text_color);
    }

    if (body_color == "rgb(0, 0, 0)") {
        body_color = document.body.style.backgroundColor = "white";
        text_color = document.body.style.color = "black";

        return(body_color);
        return(text_color);
    }
}