export const siteConfig = {
  name: 'CANTINHO DIGITAL',
  domain: 'iptv3telas.com.br',
  url: 'https://iptv3telas.com.br',
  title: 'IPTV 3 Telas e 2 Telas Simultâneas | Assista em até 3 Aparelhos ao Mesmo Tempo',
  tagline: 'IPTV 3 Telas & 2 Telas Simultâneas | Alta Estabilidade em 4K',
  subTagline: 'Plano IPTV 3 telas e 2 telas simultâneas sem travamentos. Assista na Smart TV, celular e TV Box ao mesmo tempo. Mais de 80.000 conteúdos em um só aplicativo.',
  whatsapp: {
    number: '5551997965853',
    display: '(51) 99796-5853',
    defaultMsg: 'Olá! Vim do site iptv3telas.com.br e quero solicitar meu Teste Grátis de 2 e 3 Telas.',
    planMsg: (duration: string, price: string, screens: string) => `Quero o plano de ${duration} por R$ ${price} (${screens})! Vim do iptv3telas.com.br`
  },
  stats: {
    channels: '+2.500 Canais Ao Vivo',
    contents: '+80.000 Filmes & Séries',
    quality: '4K Ultra HD & 60FPS',
    screens: '2 e 3 Telas Simultâneas Liberadas'
  },
  seo: {
    keywords: [
      'iptv 3 telas simultaneas',
      'iptv 2 telas simultaneas',
      'iptv 3 telas',
      'iptv 2 telas',
      '3 telas ao mesmo tempo',
      '2 telas ao mesmo tempo',
      'iptv três telas',
      'iptv duas telas',
      'plano iptv 3 telas',
      'plano iptv 2 telas',
      'iptv 3 aparelhos',
      'iptv 2 aparelhos',
      'iptv para 2 tvs',
      'iptv para 3 tvs',
      'teste iptv 3 telas',
      'teste iptv 2 telas',
      'ptv 3 telas',
      'ptv 2 telas',
      'iptv 3 telas simuntanea',
      'melhor iptv 3 telas',
      'melhor iptv 2 telas',
      'iptv 3 telas smart tv',
      'iptv 2 telas celular tv box'
    ].join(', ')
  },
  plans: [
    {
      id: 'mensal',
      duration: '1 Mês',
      price: '30',
      oldPrice: '50',
      screens: '2 Telas Simultâneas',
      desc: 'Ideal para testar em 2 aparelhos',
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-cyan-500/50'
    },
    {
      id: 'trimestral',
      duration: '3 Meses',
      price: '70',
      oldPrice: '120',
      screens: '2 Telas Simultâneas',
      desc: 'Economia garantida no ciclo',
      popular: false,
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/50'
    },
    {
      id: 'semestral',
      duration: '6 Meses',
      price: '130',
      oldPrice: '240',
      screens: '3 Telas Simultâneas',
      desc: 'SUPER DESCONTO! Família Toda',
      popular: true,
      color: 'from-pink-500 via-yellow-500 to-cyan-500',
      shadow: 'shadow-pink-500/80'
    },
    {
      id: 'anual',
      duration: '12 Meses',
      price: '240',
      oldPrice: '480',
      screens: '3 Telas Simultâneas',
      desc: 'METADE DO PREÇO! Apenas R$ 20/mês',
      popular: false,
      color: 'from-green-500 to-emerald-500',
      shadow: 'shadow-green-500/50'
    }
  ],
  testimonials: [
    {
      name: 'Carlos M.',
      text: 'Muito estável, não trava e funciona perfeitamente na minha Smart TV e no celular. Melhor IPTV 3 telas que já usei!',
      stars: 5,
      avatar: '/avatar-carlos.png'
    },
    {
      name: 'Renata S.',
      text: 'Atendimento rápido no WhatsApp e qualidade excelente. Assistimos em 2 TVs na sala e no quarto sem nenhum engasgo!',
      stars: 5,
      avatar: '/avatar-renata.png'
    },
    {
      name: 'João P.',
      text: 'Uso em 3 telas ao mesmo tempo sem problema. Minha esposa assiste novela, meu filho desenhos e eu futebol ao mesmo tempo!',
      stars: 5,
      avatar: '/avatar-joao.png'
    }
  ],
  faqs: [
    {
      q: 'Qual a diferença entre o plano de 2 telas e o plano de 3 telas simultâneas?',
      a: 'Com o plano de 2 telas você pode conectar e assistir ao mesmo tempo em 2 aparelhos diferentes (por exemplo, na Smart TV da sala e no celular). Já no plano de 3 telas simultâneas, você libera 3 aparelhos ao mesmo tempo (como 2 TVs e um celular/tablet), perfeito para a família toda sem interrupções.'
    },
    {
      q: 'Funciona em qual dispositivo?',
      a: 'Funciona em Smart TVs (Samsung, LG, TCL, Philips, etc.), TV Box Android, Amazon Fire TV Stick, computadores, notebooks, tablets e celulares (Android e iPhone/iOS). Basta ter conexão com a internet.'
    },
    {
      q: 'Todo o conteúdo fica reunido em um único aplicativo?',
      a: 'Sim! Com o nosso IPTV, você não precisa de vários aplicativos nem de pagar assinaturas separadas. Todos os canais ao vivo, futebol, filmes, séries, documentários e conteúdo infantil ficam organizados em um único aplicativo super fácil de usar.'
    },
    {
      q: 'Quantas telas posso usar ao mesmo tempo?',
      a: 'Você escolhe de acordo com a sua necessidade: nossos planos Mensal e Trimestral liberam 2 telas simultâneas, enquanto os planos Semestral e Anual liberam 3 telas simultâneas completas para toda a casa!'
    },
    {
      q: 'Posso assistir em redes de internet diferentes (fora de casa)?',
      a: 'Sim! Você pode usar uma tela na Smart TV de casa conectada ao Wi-Fi e outra tela no celular usando 4G/5G ou Wi-Fi do trabalho/viagem sem bloqueio.'
    },
    {
      q: 'Tem teste grátis de 2 ou 3 telas?',
      a: 'SIM! Oferecemos teste gratuito para você comprovar a qualidade do sinal e a velocidade sem travar. Chame nossa equipe no WhatsApp e receba seu teste imediatamente com atendimento humano.'
    },
    {
      q: 'Como funciona o suporte técnico?',
      a: 'Nosso suporte é 100% humanizado e direto pelo WhatsApp. Você não fala com robôs. Nossa equipe ajuda na instalação passo a passo e resolve qualquer dúvida na hora.'
    },
    {
      q: 'Tem futebol ao vivo em 4K e sem delay?',
      a: 'SIM! Transmissão completa do Brasileirão (Séries A e B), Copa Libertadores, Sul-Americana, Champions League, Premier League, canais Premiere, ESPN, SporTV e UFC em qualidade 4K e 60 FPS.'
    }
  ]
};
