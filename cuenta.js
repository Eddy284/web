document.getElementById('crearCartaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  const imagenInput = document.getElementById('imagen');
  const categoria = document.getElementById('categoria').value;


  const imagen = imagenInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
      const cartaHTML = `
          <div class="col-md-4 mb-3">
              <div class="card">
                  <img src="${e.target.result}" class="card-img-top" alt="Imagen del trabajo">
                  <div class="card-body">
                      <h5 class="card-title">${titulo}</h5>
                      <p class="card-text">${descripcion}</p>
                      <p><strong>Categoría:</strong> ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>
                  </div>
              </div>
          </div>
      `;

     
      document.getElementById(categoria).innerHTML += cartaHTML;
  };

  if (imagen) {
      reader.readAsDataURL(imagen);
  } else {
      alert("Por favor, sube una imagen.");
  }

  document.getElementById('crearCartaForm').reset();
});

