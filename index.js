const icono = document.getElementById('icono'),
    tooltip = document.getElementById('tooltip');


const calcular = () => {
    //Calculamos las coordenadas del icono
    const x = icono.offsetLeft,
    y = icono.offsetTop;

    // Calculamos el tamaño del tooltip
    const anchoTooltip = tooltip.clientWidth;
    const altoTooltip = tooltip.clientHeight;


    // Calculamos donde posicionaremos el tooltip
    const izquierda = x - (anchoTooltip/2) + 15;
    const arriba = y - altoTooltip - 25;


    tooltip.style.left = `${izquierda}px`;
    tooltip.style.top = `${arriba}px`;
};

window.addEventListener('load', ()=>{
    calcular();
});

window.addEventListener('resize', ()=>{
    calcular();
});

icono.addEventListener('mouseenter', ()=>{
    tooltip.classList.add('activo');
    calcular();
});

let timer;

icono.addEventListener('mouseleave', ()=>{
   timer = setTimeout(()=>{
    tooltip.classList.remove('activo');
   },500);
   
});

tooltip.addEventListener('mouseenter', ()=>{
    clearTimeout(timer);
})

tooltip.addEventListener('mouseleave', ()=>{
    tooltip.classList.remove('activo');
});