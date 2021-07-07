const fakeData = [
    {
      "salary": 20, 
      "id": 1, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/4c6a9daf-dbdc-48b5-9185-3f13e7c46d36/mini_ter_stegen.jpg?width=640&height=400", 
      "name": "Marc-Andr\u00e9 ter Stegen"
    }, 
    {
      "salary": 30, 
      "id": 2, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/5589c155-e2d1-4005-85a9-e431ad6d6316/mini_dest.jpg?width=640&height=400", 
      "name": "Sergi\u00f1o Dest"
    }, 
    {
      "salary": 40, 
      "id": 3, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/8c8f06d3-0dcc-4fa0-a7be-afd9f59571ac/mini_pique.jpg?width=640&height=400", 
      "name": "Gerard Piqu\u00e9"
    }, 
    {
      "salary": 50, 
      "id": 4, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/af4f65a2-1847-42c9-9b9a-1f35b3f7517f/mini_lenglet.jpg?width=640&height=400", 
      "name": "Cl\u00e9ment Lenglet"
    }, 
    {
      "salary": 60, 
      "id": 5, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/2bf9d0c6-8f6b-43a2-9b7c-34856b32efbb/mini_s_roberto.jpg?width=640&height=400", 
      "name": "Sergi Roberto"
    }, 
    {
      "salary": 70, 
      "id": 6, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/2f9072e9-16d1-45db-9217-24375df8fa01/mini_sergio_2.jpg?width=640&height=400", 
      "name": "Sergio Busquets"
    }, 
    {
      "salary": 80, 
      "id": 7, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/13/5a30cebd-30e3-4e5d-962a-5459b288621a/mini_riqui.jpg?width=640&height=400", 
      "name": "Ricard Puig"
    }, 
    {
      "salary": 90, 
      "id": 8, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/13/c8dc7fbc-8cec-4d4c-98e6-1934bb316a55/mini_pedri.jpg?width=640&height=400", 
      "name": "Pedri"
    }, 
    {
      "salary": 100, 
      "id": 9, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/13/abe2d000-8eeb-49de-8664-5668e3b4dc6d/mini_coutinho.jpg?width=640&height=400", 
      "name": "Philippe Coutinho"
    }, 
    {
      "salary": 120, 
      "id": 10, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/eb51e844-bfe3-4473-b95c-56b52bd63173/mini_de_jong.jpg?width=640&height=400", 
      "name": "Frenkie de Jong"
    }, 
    {
      "salary": 140, 
      "id": 11, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/5b29b39a-1497-4398-b17e-b7a3c1602a23/mini_griezmann.jpg?width=640&height=400", 
      "name": "Antoine Griezmann"
    }, 
    {
      "salary": 240, 
      "id": 12, 
      "img": "https://www.fcbarcelona.com/photo-resources/2020/10/08/bec036ad-0532-4288-b37d-69c59a10f23d/mini_messi.jpg?width=640&height=400", 
      "name": "Lionel Messi"
    }
  ];

  const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;