//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl =gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, 
    },
})

tl.to(
    '#fanta',
    {
        top: '120%', //move o elemento com id fanta para 120% do topo
        left: '0%',
    },
    'orange'
); //nomeando estre trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //move o elemento com id 'laranja cortada' para 160% do topo
        left: '23%', // move o elemento para 23% da esquerda
    },
    'orange'
); // sincronizado com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%', // reduz a largura do elemento com id 'orange' para 15%
        top: '160%', //move o elemento para 160% do topo
        right: '10%', // move o elemento para 10% da direita
    },
    'orange'
); // sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha',
    {
        top: '110%', // move o elemento com id 'folha1' para 110% do topo
        rotate: '530deg', // rotaciona o elemento em 530 graus
        left: '70%', // move o elemento para 70% da esquerda
    },
    'orange'
); // sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha2',
    {
        top: '110%', // move o elemento com id 'folha2' para 110% do topo
        rotate: '530deg', // rotaciona o elemento em 130 graus
        left: '0%', // move o elemento para 0% da esquerda
    },
    'orange'
); // sincronizado com a animação nomeada 'orange'

// criando outra timeline

var tl2 =gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', // fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção, three)
        scrub: true,
        markers: true, 
    },
});

// definindo a animação dos elementos com a timeline 'tl2'

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', //inicia o elemento com classe 'lemon1' rotacionado
        left:'-100%', // inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', // inicia o elemento ligeiramente abaixo da tela (110% topo)
    },
     'ca'
); // nomeando este trecho de animaçãp como 'ca' para sincronização

tl2.from(
    '#cocacola',
   {
    rotate: '-90deg', // inicia o elemento com id 'cocacola' rotacionando
    top: '110%', // inicia o elemento ligeiramente abaixo da tela (110%)
    left: '-100%', // inicia o elemento fora da tela, à esquerda (-100%)
   },
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', // Inicia o elemento com classe ' lemon2' rotacionado em 90 graus
        left: '100%', // inicia o elemento fora da tela, à direita (100%)
        top: '110', // inicia o elemento ligeiramente abaixo da tela (110% de topo
    }
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
);


tl2.to(
    '#fanta', 
    {
        width: '35%', 
        left: '33%',
        top: '210%',
    }
)