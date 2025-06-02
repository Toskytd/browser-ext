fetch('data.json') // Example API
  .then(response => response.json())
  .then(data => {
    const userList = document.getElementById('user-list');

    data.forEach(user => {
      const li = document.createElement('li');
      li.classList.add('list-item')
      li.innerHTML = `
      <div class = "top">
      <img src = ${user.logo}>
      <div class = "head">
      <h3> ${user.name} </h3>
      <p>${user.description}</p>
      </div>
      </div>
      <div class = "bottom">
      <button class="btn diff">Remove</button>
      <label class="switch">
      <input type="checkbox" class="toggle">
      <span class="slider"></span>
      </label>
      </div>

            
      `;
      userList.appendChild(li);
    });

    const lists = document.querySelectorAll('.list-item');


     active.addEventListener('click', e =>{
    lists.forEach(list=>{
      const input = list.querySelector('.toggle')
      if(input.checked){
        list.style.display = 'list-item'
      } else {list.style.display = 'none'}
      
    })

    }
  )

  all.addEventListener('click', e =>{

    lists.forEach(list=>{
       
      list.style.display = 'list-item'
    
  })

})

inactive.addEventListener('click', ()=>{

  lists.forEach(list=>{
      const input = list.querySelector('.toggle')
      if(!input.checked){
        list.style.display = 'list-item'
      } else {list.style.display = 'none'}
      
    })


})
})
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  const day = document.querySelector('.image')
  const img = document.querySelector('.day')
  const body = document.querySelector('body')
  const active = document.querySelector('.active')
  const inactive = document.querySelector('.inactive')
  const all = document.querySelector('.all')
  


  day.addEventListener('click', e =>{
    img.classList.toggle('day')
    img.classList.toggle('night')
   
    if(img.classList.contains('night')){
      document.querySelector('.night').src = './assets/images/icon-moon.svg'
    } else if (img.classList.contains('day')){
      document.querySelector('.day').src = './assets/images/icon-sun.svg'
    }

    body.classList.toggle('light')
  })

  const username = 'toskytd'; // Replace with your GitHub username
const repo = 'browser-ext';
const url = `https://${username}.github.io/${repo}/`;

fetch(url)
  .then(response => {
    if (response.ok) {
      console.log('✅ GitHub Pages site is live!');
    } else {
      console.log('❌ GitHub Pages site not found.');
    }
  })
  .catch(error => {
    console.error('Error checking GitHub Pages site:', error);
  });

 