function initMap() {
  const sp = { lat: -23.55052, lng: -46.63331 };
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 12,
    center: sp,
  });

  new google.maps.Marker({
    position: sp,
    map: mapa,
    title: "São Paulo",
  });
}

const filtros = document.querySelectorAll('.btn-filtro');
filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});