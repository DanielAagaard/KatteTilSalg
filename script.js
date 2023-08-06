const catData = [
    {
        name: '#1 Sort/hvid (Hun)',
        images: ['billeder/h_1_1.jpg', 'billeder/h_1_2.jpg', 'billeder/h_1_3.jpg', 'billeder/h_1_4.jpg'],
        description: "Født d. 28 maj 2023 (Ca. 10 uger)<br>Klar til afhentning d. 20 august 2023<br>Ormekur givet d. 15 juli 2023<br><span>Pris: 100 kr.</span>"
    },
	{
        name: '#2 Sort/hvid (Han)',
        images: ['billeder/h_3_1.jpg', 'billeder/h_3_2.jpg', 'billeder/h_3_3.jpg', 'billeder/h_3_4.jpg'],
        description: "Født d. 28 maj 2023 (Ca. 10 uger)<br>Klar til afhentning d. 20 august 2023<br>Ormekur givet d. 15 juli 2023<br><span>Pris: 100 kr.</span>"
    },
	{
        name: '#3 Sort/grå (Hun)',
        images: ['billeder/h_2_1.jpg', 'billeder/h_2_2.jpg', 'billeder/h_2_3.jpg', 'billeder/h_2_4.jpg'],
        description: "Født d. 28 maj 2023 (Ca. 10 uger)<br>Klar til afhentning d. 20 august 2023<br>Ormekur givet d. 15 juli 2023<br><span>Pris: 100 kr.</span>"
    },
	{
        name: '#4 Sort (Han)',
        images: ['billeder/b_1_1.jpg', 'billeder/b_1_2.jpg', 'billeder/b_1_3.jpg', 'billeder/b_1_4.jpg'],
        description: "Født d. 26 maj 2023 (Ca. 10 uger)<br>Klar til afhentning d. 18 august 2023<br>Ormekur givet d. 15 juli 2023<br><span>Pris: 100 kr.</span>"
    },
	{
        name: '#5 Sort (Han)',
        images: ['billeder/b_1_7.jpg', 'billeder/b_1_6.jpg', 'billeder/b_1_5.jpg', 'billeder/b_1_8.jpg'],
        description: "Født d. 26 maj 2023 (Ca. 10 uger)<br>Klar til afhentning d. 18 august 2023<br>Ormekur givet d. 15 juli 2023<br><span>Pris: 100 kr.</span>"
    },
    // Add more cat data here
];

const catContainer = document.getElementById('cat-container');

function createCatBox(cat) {
    const catBox = document.createElement('div');
    catBox.className = 'cat-box';

    const catImageContainer = document.createElement('div');
    catImageContainer.className = 'cat-image-container';

    const catImage = document.createElement('img');
    catImage.className = 'cat-image';
    catImage.src = cat.images[0];
    catImage.alt = cat.name;

    const arrowContainer = document.createElement('div');
    arrowContainer.className = 'arrow-container';

    const arrowLeft = document.createElement('button');
    arrowLeft.className = 'arrow arrow-left';
    arrowLeft.innerText = '‹';

    const arrowRight = document.createElement('button');
    arrowRight.className = 'arrow arrow-right';
    arrowRight.innerText = '›';

    let currentImageIndex = 0;

    arrowLeft.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + cat.images.length) % cat.images.length;
        catImage.src = cat.images[currentImageIndex];
    });

    arrowRight.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % cat.images.length;
        catImage.src = cat.images[currentImageIndex];
    });

    const catName = document.createElement('h2');
    catName.innerText = cat.name;

    const catDescription = document.createElement('p');
    catDescription.innerHTML = cat.description;

    catImageContainer.appendChild(catImage);

    arrowContainer.appendChild(arrowLeft);
    arrowContainer.appendChild(arrowRight);

    catImageContainer.appendChild(arrowContainer);

    catBox.appendChild(catImageContainer);
    catBox.appendChild(catName);
    catBox.appendChild(catDescription);

    catContainer.appendChild(catBox);
}

catData.forEach(cat => {
    createCatBox(cat);
});
