const foydalanuvchilar = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: { city: "Gwenborough", street: "Kulas Light" },
      phone: "1-770-736-8031 x56442",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: { city: "Wisokyburgh", street: "Victor Plains" },
      phone: "010-692-6593 x09125",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      address: { city: "McKenziehaven", street: "Douglas Extension" },
      phone: "1-463-123-4447",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      address: { city: "South Elvis", street: "Hoeger Mall" },
      phone: "493-170-9623 x156",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      address: { city: "Roscoeview", street: "Skiles Walks" },
      phone: "(254)954-1289",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      address: { city: "South Christy", street: "Norberto Crossing" },
      phone: "1-477-935-8478 x6430",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      address: { city: "Howemouth", street: "Rex Trail" },
      phone: "210.067.6132",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      address: { city: "Aliyaview", street: "Ellsworth Summit" },
      phone: "586.493.6943 x140",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      address: { city: "Bartholomebury", street: "Dayna Park" },
      phone: "(775)976-6794 x41206",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      address: { city: "Lebsackbury", street: "Kattie Turnpike" },
      phone: "024-648-3804",
    },
  ];
  
  const kartalarQutisi = document.getElementById('foydalanuvchiKartalari');
  const qidiruvInput = document.getElementById('qidiruv');
  const rejimTugmasi = document.getElementById('rejimTugmasi');
  const icon = document.querySelector(".icon")
  
  function kartalarniChiqar(royxat) {
    kartalarQutisi.innerHTML = '';
    royxat.forEach(foydalanuvchi => {
      const karta = document.createElement('div');
      karta.classList.add('karta');
      karta.innerHTML = `
        <h3>${foydalanuvchi.name}</h3>
        <img class="icon" src="./user.png" alt="">
        <p><span class="ikonka">📧</span> ${foydalanuvchi.email}</p>
        <p><span class="ikonka">📞</span> ${foydalanuvchi.phone}</p>
        <p><span class="ikonka">🏠</span> ${foydalanuvchi.address.city}, ${foydalanuvchi.address.street}</p>
      `;
      kartalarQutisi.appendChild(karta);
    });
  }
  
  kartalarniChiqar(foydalanuvchilar);
  
  qidiruvInput.addEventListener('input', function() {
    const qidirilganMatn = this.value.toLowerCase();
    const filtrlanganlar = foydalanuvchilar.filter(foy => foy.name.toLowerCase().includes(qidirilganMatn));
    kartalarniChiqar(filtrlanganlar);
  });
  
  rejimTugmasi.addEventListener('click', () => {
    document.body.classList.toggle('dark-rejim');
    document.body.classList.toggle('black-icon');
    rejimTugmasi.textContent = document.body.classList.contains('dark-rejim') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
  