let btn = document.getElementById("btn");
let card = document.querySelector(".cards")


const baseUrl = "system.json"


const getData = () => {
    const fetchData = fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => {
        data?.map(
          (item) =>
            (card.innerHTML += `<div class="card border-light shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <div class="d-flex justify-content-">
            <img src="${item.url}" class="card-img-top img shadow border-btm">
            <h6 class="card-title mt-3 ms-3">${item.name}</h6>
            
            </div>
            
            <div class="card-body ">
              
              <h4 class="card-text mb-5">${item.username}</h4>
              <small class="card-text"><i class="las la-map-marker-alt icon me-2"></i> : ${item.country}</small><br>
              <small class="card-text"><i class="las la-envelope-open-text icon my-2 me-2""></i></i> : ${item.email}</small><br>
              <small class="card-text"><i class="las la-phone icon me-2""></i> : ${item.phone}</small>
              <div class = "d-flex justify-content-around mt-5">
              <a href="#" class="btn btn-outline-success ps-3 pe-3 shadow">Edite</a>
              <a href="#" class="btn btn-outline-danger shadow">Delete</a>
              </div>
            </div>
          </div>`)
        );
      });
    return fetchData;
  };
  btn.addEventListener("click", getData);