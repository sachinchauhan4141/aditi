window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY > 0);
}) 
//contact button///
const textButtons = document.querySelectorAll('.contact__btn');
textButtons.forEach(textButton =>{
    let text = textButton.querySelector('p');

text.innerHTML = text.innerHTML.split('').map((character,index)=>`<span style="transform: rotate(${index * 13}deg)">${character}</span>`).join('')
});
/*------------------------------random space---------------------------------*/

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav =()=>{
    nav.style.display='flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display ='inline-block';
}
openNavBtn.addEventListener('click',openNav);

const closeNav =()=>{
        nav.style.display='none';
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display ='none';
}
closeNavBtn.addEventListener('click',closeNav);