import { data } from './data/data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];
let dislike = [];

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})


const loadData = data => {
    data.forEach(personaje => {
        const { id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        templateCard.querySelector('.btn-danger').dataset.id = id;
        
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
}

//Capturamos el evento click de los botones like y dislike
items.addEventListener('click', e => {
    addDislike(e),
    addLike(e);    
})


const addLike = e => {
    //que contenga btn dark y devuelve true
    if (e.target.classList.contains('btn-dark')) {
        //captura todos los elementos de la target
        
        setLike(e.target.parentElement);
    }
    
}

const setLike = objeto => {
    const botonLike = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        //inicializamos en 1
        cantidad: 1
    }

    if (like.hasOwnProperty(botonLike.id)) {
        botonLike.cantidad = like[botonLike.id].cantidad + 1;
        //para llamar el objeto
        objeto.querySelector('#like').textContent = botonLike.cantidad; 

/*Para solucionar el inconveniente que no agregaba la cantidad desde el primer click
agregamos un condicional de sino donde cuando el botonLike no tuviera la propiedad botonLike.id
el objeto like[botonLike.id] fuera igual al objeto de la constante botonLike
    */
     }else{
        like[botonLike.id]= {...botonLike};
        //llamar al objeto
        objeto.querySelector('#like').textContent = botonLike.cantidad;        
    }

    like[botonLike.id] = {...botonLike};

    console.log(like[botonLike.id]);
} 

const addDislike = e => {
    //que contenga btn dark y devuelve true
    if (e.target.classList.contains('btn-danger')) {
        //captura todos los elementos de la target
        setDislike(e.target.parentElement);
    }
    
}

const setDislike = objeto => {
    const botonDislike = {
        id: objeto.querySelector('.btn-danger').dataset.id,
        cantidad: 1
    }

    if (dislike.hasOwnProperty(botonDislike.id)) {
        botonDislike.cantidad = dislike[botonDislike.id].cantidad + 1;
        //para llamar el objeto
        objeto.querySelector('#dislike').textContent = botonDislike.cantidad;
    }else{
        dislike[botonDislike.id]= {...botonDislike};
        objeto.querySelector('#dislike').textContent = botonDislike.cantidad;        
    }

    dislike[botonDislike.id] = {...botonDislike};

    console.log(dislike[botonDislike.id]);
}