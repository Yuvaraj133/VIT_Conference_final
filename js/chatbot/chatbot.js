function talk(){
    var know = {
     "send me the official link for anna university":"https://www.annauniv.edu/",
      "how can I contact you":"you can reach us on yuvaraj0313@gmail.com",
      "number of courses  courses":"There are 153 undergraduate courses and 90 post graduate courses  tell me your intrest",
      "number of scholorship for sc":"4 which includes aadi dravidar scholorship follow the link for scholorship ",
      "number of universities":"27 Universites",
      "number of affilated colleges in anna universities":"567 colleges",
      
    "Who are you" : "Hello, edu DOT here ",
    "How are you" : "Good :)",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }