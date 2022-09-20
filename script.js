function urll(value) {
  params = "https://api-thirukkural.vercel.app/api?num=" + value;
  var param = params.toString();
  return param;
}

//var apiurl = "https://api-thirukkural.vercel.app/api?num=2";

function getInfo() {
  var url = "https://meowfacts.herokuapp.com";
  var num = Math.random() * 100;
  var final = Math.round(num);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("header1").innerHTML = data.data;
    })
    .catch((err) => console.log(err));
}
