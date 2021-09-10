const $findButton = document.querySelector('.find-button');
const $cardContainer = document.querySelector('.card-container');
const $btnsContainer = document.querySelector('.btns-container');
const $homeBtn = document.querySelector('.home-btn');
let count = 1;

const newCard = (data) => {
  return `
  <img id=${data.id} src='/image/${data.brand}-${data.model}.png' onerror="this.src='/image/default-car.jpg'"  height='300'>
  <div class="stats-container">
  <div class="car-name"> ${data.brand}  </div>  
  <div class="car-name"> ${data.model}</div>
  </div>
  <div class='stats-container'>
  <div class='stats color-div'>color: <span class='color-square' style='background-color:${data.color}'></span>${data.color} </div>
  <div class='stats'>horsepower: ${data.horsepower} </div>
  <div class='stats'>price: ${data.price}$ </div>
  </div>`;
};

$homeBtn.addEventListener('click', async (event) => {
  count = 1;
  window.location = '/';
});

$findButton.addEventListener('click', async (event) => {

  let response = await fetch(`/cars`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  if (response.ok) {
    let dataFromBack = await response.json();
    $cardContainer.innerHTML = newCard(dataFromBack);
    $btnsContainer.classList.remove('hide');
  }
  if (response.status == 404) {
    $cardContainer.innerHTML = `<img src='/image/empty-database.jpg' width='300' height='300' />
    <p class='welcome'>All cars are sold!</p>
    <p>Come back soon!</p>`;
  }
});

$btnsContainer.addEventListener('click', async (event) => {
  const id =
    event.target.parentElement.parentElement.firstElementChild.firstElementChild
      .id;
  if (event.target.classList.contains('btn-cars')) {
    let response = await fetch(`/cars/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ count }),
    });
    if (response.ok) {
      count += 1;
      let dataFromBack = await response.json();
      $cardContainer.innerHTML = newCard(dataFromBack[0]);
    }
    if (response.status == 404) {
      count = 1;
      let response = await fetch(`/cars`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      if (response.ok) {
        let dataFromBack = await response.json();
        $cardContainer.innerHTML = newCard(dataFromBack);
      }
      if (response.status == 404) {
        $cardContainer.innerHTML = `<img src='/image/empty-database.jpg' width='300' height='300' />
    <p class='welcome'>All cars are sold!</p>
    <p>Come back soon!</p>`;
      }
    }
  }
  if (event.target.classList.contains('buy-btn')) {
    await fetch(`/cars/${id}/del`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
    });
  }
  if (event.target.classList.contains('unlock-btn')) {
    let response = await fetch(`/cars/new`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    if (response.ok) {
      let dataFromBack = await response.json();
      $cardContainer.innerHTML = newCard(dataFromBack);
    }
  }
});

// $buyBtn.addEventListener('click', async (event) => {});
