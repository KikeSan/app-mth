import pintar from './App'
import "./styles/index.scss";


$('.copyuser').click(function(){
  //copyToClipboard($(this).text())
  $('.username').val($(this).text())
})
$('.copypass').click(function(){
  $('.password').val($(this).text())
})


$('#on-app').click(function(){

  /* fetch('http://wsruc.com/Ruc2WS_JSON.php?tipo=2&ruc=20430635612&token=cXdlcnR5bGFtYXJja19zYUBob3RtYWlsLmNvbXF3ZXJ0eQ==')
  .then(response => response.json())
  .then(json => console.log(response)) */

  $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
      "email": $('.username').val(),
      "password": $('.password').val()
    },
    success: function(response){
        console.log(response);
        pintar(response)
    }
  });

})


const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
  