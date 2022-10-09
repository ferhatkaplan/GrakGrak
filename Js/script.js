const searchForm = document.querySelector(".search-form");

//buttons

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(){
        if( e.composedPath().inculudes(searchForm) &&
            e.composedPath().inculudes(searchForm)
        
        ){
            searchForm.classList.remove("active");
        }
    })
})


