// ! data base
const cars = [
    {
      id: 1,
      name: 'Toyota Avanza',
      price: 200000000, // Harga dalam rupiah
      description: 'Mobil keluarga yang nyaman dan irit bahan bakar.',
      image: 'https://example.com/images/toyota-avanza.jpg', // URL gambar (opsional)
    },
    {
      id: 2,
      name: 'Honda Civic',
      price: 350000000,
      description: 'Mobil sedan sporty dengan desain modern.',
      image: 'https://example.com/images/honda-civic.jpg',
    },
    {
      id: 3,
      name: 'Suzuki Ertiga',
      price: 250000000,
      description: 'MPV dengan kapasitas besar dan fitur canggih.',
      image: 'https://example.com/images/suzuki-ertiga.jpg',
    },
    {
      id: 4,
      name: 'Mitsubishi Pajero',
      price: 500000000,
      description: 'SUV tangguh untuk medan berat dan perjalanan jauh.',
      image: 'https://example.com/images/mitsubishi-pajero.jpg',
    },
    {
      id: 5,
      name: 'Daihatsu Ayla',
      price: 150000000,
      description: 'City car yang kompak dan ramah lingkungan.',
      image: 'https://example.com/images/daihatsu-ayla.jpg',
    },
    {
      id: 6,
      name: 'Ford Ranger',
      price: 450000000,
      description: 'Pickup truck tangguh dengan performa terbaik di kelasnya.',
      image: 'https://via.placeholder.com/300x200?text=Ford+Ranger',
    },
  ];

function displayCars(car) {
    const container = document.querySelector(".card-container");
    container.innerHTML = ""; // Kosongkan kontainer sebelum mengisi ulang

    cars.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="card-content">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
                <p class="price">Rp ${car.price.toLocaleString()}</p>
                <button onclick="buyCar(${car.id})">Beli</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Fungsi ketika tombol "Beli" diklik
function buyCar(id) {
    const car = cars.find((c) => c.id === id);
    alert(`Anda telah membeli ${car.name} seharga Rp ${car.price.toLocaleString()}.`);
    inde
    const notCar = cars.
    
    console.log (car)
}

// ! fungsi untuk mengeklik sell car



// Tampilkan mobil saat halaman dimuat
displayCars();