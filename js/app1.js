const searchPhon = () => {
    const seacrhText = document.getElementById('search-id').value;
    
    loadData(seacrhText);
    document.getElementById('searchId').value = '';
  }
  
  const loadData = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => displaySearch(data.data.slice(0,20)))
  }
  
  const displaySearch = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    
    phones.map(phone => {
      // console.log(phone);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
          <div onclick = "(${phone.brand})" class="card h-100">
          <img width="12rem" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Brand: ${phone.brand}</h5>
            <h5 class="card-title">Model: ${phone.phone_name}</h5>
            <button onclick = "loadPhone('${phone.slug}')">Details</button>
          </div>
        </div>
        
        `;
      searchResult.appendChild(div);
    })
  }
  
  const loadPhone = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => displayPhone(data.data))
  
  }
  
  const displayPhone = phone => {
    // console.log('phone', phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    console.log(phone);
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">.
    <h5 class="card-title">Model: ${phone.name}</h5>
      <h5 class="card-title">Release Date: ${(phone.releaseDate) ? phone.releaseDate : "Not Found"}</h5>
    
    </div>
    `;
    phoneDetails.appendChild(div);
  }