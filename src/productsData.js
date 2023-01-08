import image1 from './assets/jpg/prdt-img/moisturiser-La Roche-Posay.jpg';
import image2 from './assets/jpg/prdt-img/sunc cream-La Roche-Posay.png';
import image3 from './assets/jpg/prdt-img/serum-SkinCeuticals.jpg';
import image4 from './assets/jpg/prdt-img/eye complex-SkinCeuticals.jpg';
import image5 from './assets/jpg/prdt-img/skin-perfecting-paulas choice.jpg';
import image6 from './assets/jpg/prdt-img/anti-age-Elemis.jpg';
import image7 from './assets/jpg/prdt-img/hydrating-facial-cleanser-cerave.jpg';
import image8 from './assets/jpg/prdt-img/cream_AUGUSTINUS.jpg';
import image9 from './assets/jpg/prdt-img/ice ceramide-sunday-riley.jpg';
import image10 from './assets/jpg/prdt-img/enzyme-cleanser-dr.barbara-sturm1.jpg';
export const productsData = [
  {
    id: 1,
    bestSeller: false,
    gift: false,
    title: 'Effaclar',
    quickInfo:
      'About Effaclar mat is for oily skin prone to imperfections and shine.',
    info: 'About Effaclar mat is for oily skin prone to imperfections and shine. It is specifically formulated for sensitive skin.Used daily it helps to limit the appearance of pores and shine by reducing excess sebum. Oily skin is moisturised and the mattifying properties help to control shine all day. Skin feels smoother. Formula now contains Sebulyse.Oil-free texture with Perlite',
    img: image1,
    company: 'La Roche-Posay',
    productType: 'moisturiser',
    price: 11.95,
    sale: true,
    discountPrice: 10,
    inCart: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: true,
  },
  {
    id: 2,
    bestSeller: false,
    gift: false,
    title: 'Anthelios',
    quickInfo:
      'Invisible fragrance-free 50ml pocket-size liquid sun cream from Anthelios La Roche Posay.',
    info: 'Invisible fragrance-free 50ml pocket-size liquid sun cream from Anthelios La Roche Posay. Enriched with La Roche Posay thermal spring water. The new, invisible liquid texture of this sun cream means no white streaks and flawless skin.The convenient pocket-size bottle makes it easy to carry to the beach.',
    img: image2,
    company: 'La Roche-Posay',
    productType: 'sun cream',
    price: 12.5,
    sale: true,
    discountPrice: 11,
    inCart: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: true,
  },
  {
    id: 3,
    bestSeller: false,
    gift: false,
    title: 'C E Feluric',
    quickInfo:
      'ydrating B5 is an oil-free moisturizer combined with vitamin B5',
    info: 'Hydrating B5 is an oil-free moisturizer combined with vitamin B5 and hyaluronic acid, to help prevent moisture loss from the skin. It can be used alone or with a daily moisturizer to provide extra hydration. A good combination with Retinol and is ideal for all skin types.',
    img: image3,
    company: 'SkinCeuticals',
    productType: 'serum',
    price: 140,
    sale: true,
    discountPrice: 130,
    inCart: false,
    count: 0,
    total: 0,
    male: false,
    female: true,
    domestic: false,
  },
  {
    id: 4,
    bestSeller: true,
    gift: true,
    title: 'Triple Lipid Restore',
    quickInfo: 'A.G.E. Eye Complex is an anti-wrinkle eye cream.',
    info: 'A.G.E. Eye Complex is an anti-wrinkle eye cream that contains a combination of ingredients formulated to target the visible signs of ageing skin caused by Advanced Glycation End-products (A.G.E.)',
    img: image4,
    company: 'SkinCeuticals',
    productType: 'eye Complex',
    inCart: false,
    price: 135,
    sale: false,
    discountPrice: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: false,
  },
  {
    id: 5,
    bestSeller: false,
    gift: false,
    title: 'skin perfecting',
    quickInfo:
      'Lightweight lotion softens and hydrates skin while diminishing blackheads and blemishes.',
    info: 'This gentle exfoliating lotion with 2% BHA (salicylic acid) removes built-up dead skin cells to reveal radiant, silky-soft skin. Formulated with a blend of plant oils and antioxidants, this moisturising lotion softens dry, rough skin and soothes redness while diminishing blackheads and blemishes.',
    img: image5,
    company: `Paula's Choice`,
    productType: 'moisturising',
    price: 31,
    sale: false,
    discountPrice: false,
    inCart: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: true,
  },
  {
    id: 6,
    bestSeller: true,
    gift: true,
    title: 'Anti-Age Prop-collagen',
    quickInfo:
      'Elemis, powerful Anti-Age Pro-Collagen Cleansing Balm cleanses the skin of make-up and daily impurities.',
    info: `The balm intensively cleanses, nourishes and restores the skin, making the complexion radiant. The balm set includes an exclusive cleaning cloth. Suitable for all skin types. • Means No. 1 of our brand - is in great demand; balm for washing has received a large number of awards. • Cult tool is a favorite among beauty bloggers and professionals in the beauty industry. • Deeply cleanses and leaves skin soft and smooth. • The balm has a rich, soothing aroma - a real "SPA in a jar"!`,
    img: image6,
    company: `Elemis`,
    productType: 'Balm',
    price: 44,
    sale: false,
    discountPrice: false,
    inCart: false,
    count: 0,
    total: 0,
    male: false,
    female: true,
    domestic: true,
  },

  {
    id: 7,
    bestSeller: true,
    gift: true,
    title: 'Hydrating Facial Cleanser',
    quickInfo: 'It is the perfect cream cleanser for just about everybody.',
    info: `Developed with dermatologists, cerave hydrating facial cleanser is a unique formula that cleanses, hydrates and helps the protective skin barrier with three essential ceramides (1, 3, 6-ii). The formula also contains hyaluronic acid to help the skin's natural moisture.`,
    img: image7,
    company: `CeraVe`,
    productType: 'Hydrating Cleanser',
    price: 10,
    sale: false,
    discountPrice: false,
    inCart: false,
    count: 0,
    total: 0,
    male: false,
    female: true,
    domestic: false,
  },
  {
    id: 8,
    bestSeller: true,
    gift: true,
    title: 'The Cream',
    quickInfo:
      'This product is formulated with the brands TFC8 complex, which aims to nourish and tackle virtually every major skin concern out there.',
    info: ` It is an intense moisturiser that aims to streamline your routine so that you can forgo other serums and lotions. It soothes, plumps, hydrates and gives skin a healthy-looking radiance that is genuinely hard to come by.`,
    img: image8,
    company: `Augustinus Bader`,
    productType: 'moisturiser ',
    price: 200,
    sale: true,
    discountPrice: 160,
    inCart: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: true,
  },
  {
    id: 9,
    bestSeller: false,
    gift: false,
    title: 'Ice Ceramide ',
    quickInfo:
      'Indulge the complexion and combat the various signs of ageing with the Sunday Riley Ice Ceramide Moisturizing Cream.',
    info: ` Along with moisturising coconut extract and smoothing beetroot extract, this cream is powered by ceramides. These lipids, which the skin produces to boost its natural barrier, can help to keep the complexion looking smooth and feeling hydrated and comfortable. Red algae extract works to lock in moisture, and pomegranate sterols deliver antioxidant protection.`,
    img: image9,
    company: `Sunday Riley`,
    productType: 'moisturiser',
    price: 60,
    sale: true,
    discountPrice: 55,
    inCart: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: false,
  },
  {
    id: 10,
    bestSeller: true,
    gift: true,
    title: 'Enzyme cleanser',
    quickInfo:
      'The Enzyme Cleanser is a two-in-one cleansing foam and exfoliator, particularly ideal for oily and combination skin.',
    info: `The fine-grained powder transforms into a soft foam once water is added, providing a deep, yet gentle cleanse and exfoliation. A collection of enzymes works together to loosen the conjunctions between dead skin cells, helping to peel away dry and rough skin, remove makeup, and reduce excess sebum from pores. The skin will appear revitalized and smooth instantly after cleansing.`,
    img: image10,
    company: `Dr. Barbara Sturm`,
    productType: 'cleanser',
    price: 60,
    sale: true,
    discountPrice: 55,
    inCart: false,
    count: 0,
    total: 0,
    male: true,
    female: true,
    domestic: true,
  },
];

export const detailProduct = {
  id: 1,
  bestSeller: true,
  gift: true,
  title: 'Enzyme cleanser',
  quickInfo:
    'The Enzyme Cleanser is a two-in-one cleansing foam and exfoliator, particularly ideal for oily and combination skin.',
  info: `The fine-grained powder transforms into a soft foam once water is added, providing a deep, yet gentle cleanse and exfoliation. A collection of enzymes works together to loosen the conjunctions between dead skin cells, helping to peel away dry and rough skin, remove makeup, and reduce excess sebum from pores. The skin will appear revitalized and smooth instantly after cleansing.`,
  img: image10,
  company: `Dr. Barbara Sturm`,
  productType: 'cleanser',
  price: 60,
  sale: true,
  discountPrice: 55,
  inCart: false,
  count: 0,
  total: 0,
};
