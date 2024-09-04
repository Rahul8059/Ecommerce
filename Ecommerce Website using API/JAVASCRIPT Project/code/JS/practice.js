  let main_cnt = document.getElementById("main_cnt")

        let all_images = "";

        fetch("https://api.github.com/users")
            .then((response) => response.json())
            .then((data) => {
                data.map((user) => {
                    let login = user.login;
                    
                    let avatar_url = user.avatar_url;
                    // console.log(avatar_url);

                    all_images += `
        <div>
                <div class="product-card">
          <img src="${avatar_url}" alt="${login}"/>
          <p id="loginUser">Login: ${login}</p>
        </div>
        </div>
        `
                });
                main_cnt.innerHTML = all_images;
            })
            .catch((error) => console.error('Error fetching data:', error));
