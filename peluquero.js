document.getElementById('crearCartaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').files[0];
  
    const nuevaCarta = document.createElement('div');
    nuevaCarta.classList.add('col-md-4', 'mb-3');
    nuevaCarta.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${URL.createObjectURL(imagen)}" class="card-img-top" alt="Imagen de ${titulo}">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
        </div>
      </div>
    `;
  
    document.getElementById('cartasTrabajo').appendChild(nuevaCarta);

    document.getElementById('crearCartaForm').reset();
  });
  