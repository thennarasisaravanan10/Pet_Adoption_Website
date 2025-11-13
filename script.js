// =================== Login ===================
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if(username==='admin' && password==='1234'){
      localStorage.setItem('loggedIn','true');
      window.location.href='index.html';
    } else {
      document.getElementById('loginError').textContent='Invalid username or password';
    }
  });
} else {
  // =================== Pet Data ===================
  const pets = [
  {id:1,name:'Milo',breed:'Parrot',place:'Hyderabad',character:'Talkative',health:'Vaccinated',age:'1 year',image:'pet1.jfif'},
  {id:2,name:'Lucy',breed:'Siberian Husky',place:'Bangalore',character:'Calm',health:'Vaccinated',age:'1.5 years',image:'pet2.jfif'},
  {id:3,name:'Nala',breed:'Bengal Cat',place:'Pune',character:'Active',health:'Vaccinated',age:'2 years',image:'pet3.png'},
  {id:4,name:'Leo',breed:'Rottweiler',place:'Ahmedabad',character:'Loyal',health:'Vaccinated',age:'3 years',image:'pet4.jfif'},
  {id:5,name:'Ruby',breed:'Birman',place:'Surat',character:'Loving',health:'Vaccinated',age:'2 years',image:'pet5.jpg'},
  {id:6,name:'Pico',breed:'Conure',place:'Jaipur',character:'Playful',health:'Vaccinated',age:'3 years',image:'pet6.jfif'},
  {id:7,name:'Charlie',breed:'Beagle',place:'Chennai',character:'Loyal',health:'Vaccinated',age:'4 years',image:'pet7.jfif'},
  {id:8,name:'Zara',breed:'Amazon Parrot',place:'Ahmedabad',character:'Loud',health:'Vaccinated',age:'2 years',image:'pet8.jfif'},
  {id:9,name:'Angel',breed:'Sphynx',place:'Ahmedabad',character:'Affectionate',health:'Vaccinated',age:'2 years',image:'pet9.jpg'},
  {id:10,name:'Max',breed:'Labrador',place:'Delhi',character:'Playful',health:'Not Vaccinated',age:'2 years',image:'pet10.jfif'},
  {id:11,name:'Blue',breed:'Eclectus Parrot',place:'Kolkata',character:'Calm',health:'Vaccinated',age:'3 years',image:'pet11.jfif'},
  {id:12,name:'Chloe',breed:'Maine Coon',place:'Bangalore',character:'Friendly',health:'Vaccinated',age:'3 years',image:'pet12.jfif'},
  {id:13,name:'Duke',breed:'Pug',place:'Kolkata',character:'Playful',health:'Vaccinated',age:'1.5 years',image:'pet13.jfif'},
  {id:14,name:'Coco',breed:'Lovebird',place:'Chennai',character:'Affectionate',health:'Vaccinated',age:'1.5 years',image:'pet14.jpg'},
  {id:15,name:'Teddy',breed:'Pomeranian',place:'Jaipur',character:'Cheerful',health:'Vaccinated',age:'2 years',image:'pet16.jfif'},
  {id:16,name:'Smokey',breed:'Norwegian Forest Cat',place:'Patna',character:'Loyal',health:'Vaccinated',age:'3 years',image:'pet15.jfif'},
  {id:17,name:'Sky',breed:'Budgerigar',place:'Bangalore',character:'Charming',health:'Not Vaccinated',age:'2 years',image:'pet17.jfif'},
  {id:18,name:'Buddy',breed:'Dalmatian',place:'Surat',character:'Energetic',health:'Vaccinated',age:'2.5 years',image:'pet18.jfif'},
  {id:19,name:'Pearl',breed:'Scottish Fold',place:'Nagpur',character:'Sweet',health:'Vaccinated',age:'3 years',image:'https://cdn2.thecatapi.com/images/6f7.jpg'},
  {id:20,name:'Rio',breed:'Macaw',place:'Pune',character:'Colorful',health:'Vaccinated',age:'3 years',image:'pet19.jfif'},
  {id:21,name:'Bella',breed:'Golden Retriever',place:'Mumbai',character:'Friendly',health:'Vaccinated',age:'3 years',image:'pet20.jfif'},
  {id:22,name:'Cleo',breed:'Abyssinian',place:'Chennai',character:'Playful',health:'Vaccinated',age:'1.5 years',image:'https://cdn2.thecatapi.com/images/0SxW2SQ_S.jpg'},
  {id:23,name:'Ruby',breed:'Cockatoo',place:'Nagpur',character:'Curious',health:'Vaccinated',age:'2 years',image:'pet21.jfif'},
  {id:24,name:'Bruno',breed:'Chihuahua',place:'Coimbatore',character:'Bold',health:'Not Vaccinated',age:'1.5 years',image:'pet22.jfif'},
  {id:25,name:'Misty',breed:'Ragdoll',place:'Hyderabad',character:'Calm',health:'Vaccinated',age:'2.5 years',image:'https://cdn2.thecatapi.com/images/KJF8fB_20.jpg'},
  {id:26,name:'Snow',breed:'White Cockatoo',place:'Bhopal',character:'Gentle',health:'Vaccinated',age:'4 years',image:'pet23.jfif'},
  {id:27,name:'Simba',breed:'Boxer',place:'Bhopal',character:'Friendly',health:'Vaccinated',age:'3 years',image:'pet24.jfif'},
  {id:28,name:'Zoe',breed:'Himalayan',place:'Coimbatore',character:'Calm',health:'Not Vaccinated',age:'3 years',image:'pet25.jfif'},
  {id:29,name:'Snowy',breed:'African Grey',place:'Bangalore',character:'Smart',health:'Vaccinated',age:'2 years',image:'pet26.jfif'},
  {id:30,name:'Jack',breed:'Cocker Spaniel',place:'Patna',character:'Loving',health:'Vaccinated',age:'2 years',image:'pet1.jfif'},
  {id:31,name:'Ciel',breed:'Amazon Parrot',place:'Hyderabad',character:'Talkative',health:'Vaccinated',age:'3 years',image:'pet16.jfif'},
  {id:32,name:'Tinker',breed:'British Shorthair',place:'Mumbai',character:'Quiet',health:'Not Vaccinated',age:'3 years',image:'pet19.jfif'},
  {id:33,name:'Oscar',breed:'Doberman',place:'Lucknow',character:'Alert',health:'Not Vaccinated',age:'4 years',image:'pet14.jpg'},
  {id:34,name:'Sunny',breed:'Cockatiel',place:'Delhi',character:'Friendly',health:'Not Vaccinated',age:'2 years',image:'pet12.jfif'},
  {id:35,name:'Kitty',breed:'American Shorthair',place:'Bhopal',character:'Playful',health:'Vaccinated',age:'2.5 years',image:'pet4.jfif'},
  {id:36,name:'Cooper',breed:'Bulldog',place:'Hyderabad',character:'Gentle',health:'Not Vaccinated',age:'2 years',image:'pet18.jfif'},
  {id:37,name:'Mango',breed:'Budgerigar',place:'Jaipur',character:'Joyful',health:'Vaccinated',age:'2 years',image:'pet3.png'},
  {id:38,name:'Rocky',breed:'German Shepherd',place:'Pune',character:'Protective',health:'Vaccinated',age:'3 years',image:'pet7.jfif'},
  {id:39,name:'Snowy',breed:'Russian Blue',place:'Jaipur',character:'Gentle',health:'Vaccinated',age:'3 years',image:'pet22.jfif'},
  {id:40,name:'Lime',breed:'Ringneck Parakeet',place:'Lucknow',character:'Smart',health:'Vaccinated',age:'1.5 years',image:'pet5.jpg'},
  {id:41,name:'Daisy',breed:'Persian Cat',place:'Kolkata',character:'Gentle',health:'Vaccinated',age:'2 years',image:'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'},
  {id:42,name:'Milo',breed:'Shih Tzu',place:'Nagpur',character:'Calm',health:'Vaccinated',age:'3 years',image:'pet15.jfif'},
  {id:43,name:'Peach',breed:'Lovebird',place:'Chennai',character:'Affectionate',health:'Vaccinated',age:'2 years',image:'pet4.jfif'},
  {id:44,name:'Sunny',breed:'Parakeet',place:'Surat',character:'Talkative',health:'Not Vaccinated',age:'2 years',image:'pet7.jfif'},
  {id:45,name:'Luna',breed:'Siamese Cat',place:'Delhi',character:'Curious',health:'Not Vaccinated',age:'1.5 years',image:'pet16.jfif'},
  {id:46,name:'Angel',breed:'Sun Conure',place:'Chandigarh',character:'Active',health:'Vaccinated',age:'3 years',image:'pet10.jfif'},
  {id:47,name:'Simba',breed:'Boxer',place:'Bhopal',character:'Friendly',health:'Vaccinated',age:'3 years',image:'pet11.jfif'},
  {id:48,name:'Coco',breed:'Turkish Angora',place:'Lucknow',character:'Elegant',health:'Not Vaccinated',age:'2 years',image:'pet21.jfif'},
  {id:49,name:'Snow',breed:'White Cockatoo',place:'Bhopal',character:'Gentle',health:'Vaccinated',age:'4 years',image:'pet24.jfif'},
  {id:50,name:'Oscar',breed:'Doberman',place:'Lucknow',character:'Alert',health:'Not Vaccinated',age:'4 years',image:'pet25.jfif'}
];


  // add up to 50 pets
  for(let i=51;i<=50;i++){
    const type = ['Dog','Cat','Parrot'][i%3];
    let img='';
    if(type==='Dog') img='https://placedog.net/500/280?id='+i;
    else if(type==='Cat') img='https://placekitten.com/500/280?image='+i;
    else img='https://upload.wikimedia.org/wikipedia/commons/3/32/Ara_macao_-_Macaw.jpg';
    pets.push({
      id:i,
      name:type+'Pet'+i,
      breed:type,
      place:'City'+i,
      character:['Friendly','Calm','Playful','Loyal','Gentle','Talkative'][i%6],
      health:(i%2===0?'Vaccinated':'Not Vaccinated'),
      age:(1+i%5)+' years',
      image:img
    });
  }

  // =================== Breed Info ===================
  const breedInfo = {
    "Golden Retriever":"The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is a working dog, and registration is subject to successful completion of a working trial.",
    "Labrador":"The Labrador Retriever is a friendly, outgoing, and high-spirited companion. They are intelligent, easy to train, and love to retrieve.",
    "Beagle":"The Beagle is a small hound, similar in appearance to the larger foxhound. Friendly, curious, and merry, they make great companions.",
    "Siberian Husky":"The Siberian Husky is a medium-sized working dog, known for endurance and willingness to work. They are gentle, friendly, and energetic.",
    "Persian Cat":"The Persian Cat is a long-haired breed characterized by its round face and short muzzle. They are calm, affectionate, and ideal for indoor companionship.",
    "Parrot":"Parrots are colorful birds known for intelligence and mimicking sounds. They require social interaction and mental stimulation."
  };

  // =================== Render Pets ===================
  const petsContainer = document.getElementById('petsContainer');
  const petModal = document.getElementById('petModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  function renderPets(){
    petsContainer.innerHTML = pets.map(p=>`
      <div class="pet-card" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <div class="pet-info">
          <h3>${p.name}</h3>
          <p>Breed: ${p.breed}</p>
          <p>Place: ${p.place}</p>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.pet-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        const id = parseInt(card.dataset.id);
        showPetDetails(id);
      });
    });
  }

  function showPetDetails(id){
    const pet = pets.find(p=>p.id===id);
    modalBody.innerHTML = `
      <img src="${pet.image}" style="width:100%;border-radius:8px;margin-bottom:10px">
      <h2>${pet.name}</h2>
      <p><strong>Breed:</strong> ${pet.breed}</p>
      <p><strong>Place:</strong> ${pet.place}</p>
      <p><strong>Character:</strong> ${pet.character}</p>
      <p><strong>Health:</strong> ${pet.health}</p>
      <p><strong>Age:</strong> ${pet.age}</p>
      <p><strong>Breed Info:</strong> ${breedInfo[pet.breed] || "Information not available."}</p>
    `;
    petModal.classList.remove('hidden');
  }

  closeModal.addEventListener('click', ()=> petModal.classList.add('hidden'));

  renderPets();

  // =================== Chatbot ===================
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');

  chatInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
      const text = chatInput.value.trim();
      if(text==='') return;
      addChatMessage(text,'user');
      respondChat(text);
      chatInput.value='';
    }
  });

  function addChatMessage(msg,type){
    const div = document.createElement('div');
    div.className = 'chat-message '+type;
    div.textContent = msg;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // =================== Chatbot Response Logic ===================
  function respondChat(text){
    text = text.toLowerCase();
    let reply = "Sorry, I don't understand. Try asking about a pet breed or what pets eat.";

    // ======== Food Info =========
    const foodInfo = {
      "dog": "Dogs usually eat dry kibble, cooked chicken, rice, vegetables, and specially made dog food. Avoid chocolate, onions, and grapes.",
      "cat": "Cats eat fish, chicken, commercial cat food, and milk (in small amounts). Avoid giving chocolate, onions, or bones.",
      "parrot": "Parrots enjoy fruits, seeds, nuts, vegetables, and pellets. Avoid avocado, chocolate, and caffeine."
    };

    // ======== Breed Info Check =========
    for(let breed in breedInfo){
      if(text.includes(breed.toLowerCase())){
        reply = breedInfo[breed];
        break;
      }
    }

    // ======== Pet Food Check =========
    if(text.includes("what") && text.includes("eat") || text.includes("food") || text.includes("feed")){
      if(text.includes("dog")){
        reply = foodInfo.dog;
      } else if(text.includes("cat")){
        reply = foodInfo.cat;
      } else if(text.includes("parrot")){
        reply = foodInfo.parrot;
      }
    }

    setTimeout(()=> addChatMessage(reply,'bot'),500);
  }
}