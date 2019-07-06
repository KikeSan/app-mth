let pintar = num => {
  if(num){
    $('#root').html(`
    <div class="container wrapper-header">
      <div class="wrapper-headerUser"><span>Agregar usuario (1-12):</span><span class="descUser">Ingresar el número de id del usuario</span> </div><input class="input" type="text" id="numUser"> <a class="button is-link" id="refresh">Mostrar Usuario</a>
    </div>
    <div class="container wrapper-body">
    </div>
    `)
    $('#refresh').click(()=>{
      build($('#numUser').val())
    })
  }
}

let build = (numuser)=>{
  console.log('pintar');

  $.ajax({
    url: `https://reqres.in/api/users/${numuser}`,
    type: "GET",
    success: function(response){
        console.log(response.data);
        let d=response.data
        $('.wrapper-body').append(`
        <div class="item-user">
        <img src="${d.avatar}"/>
        <h2>${d.first_name} ${d.last_name}</h2>
        <p>${d.email}</p>
        </div>
        `)
    }
  });

  /* avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  email: "george.bluth@reqres.in"
  first_name: "George"
  id: 1
  last_name: "Bluth" */
  
}
export default pintar;