var a = 10;



console.log('====================================');
console.log("Hello ........!");
console.log('====================================');

fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          let postList = document.getElementById("postList");

          console.log("Data......", data);

          data.slice(10, 20).forEach((x) => {
            const li = document.createElement("li");

            li.innerHTML = `
                <div>
                    <p><strong>Post Title: </strong> ${x.title}</p>
                    <p><strong>Post Description: </strong> ${x.body}</p>
                    <p><strong>Auther ID of Post: </strong> ${x.userId}</p>
                </div>
                `;
                postList.appendChild(li);
            
          });
        })
        .catch((error) => console.error("Error:", error));


        console.log("Heyyyyyyyyy!");
        








async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const postList = document.getElementById("postList");

    console.log("Data......", data);

    data.slice(10, 20).forEach((x) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <p><strong>Post Title: </strong> ${x.title}</p>
          <p><strong>Post Description: </strong> ${x.body}</p>
          <p><strong>Auther ID of Post: </strong> ${x.userId}</p>
        </div>
      `;
      postList.appendChild(li);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchPosts();
        