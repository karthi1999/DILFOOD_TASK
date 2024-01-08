const { format } = require('winston');
const { timestamp, printf } = format;

export default async function productLists(req, res) {
  let path = __filename;
  try {
    let response = {
      status: {
        code: '200',
        message: 'Request Success',
        description: 'Successfully retrived product list'
      },
      data: [
        {
          "id": 20,
          "title": "DANVOUY Womens T Shirt Casual Cotton Short",
          "price": 12.99,
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          "rating": {
            "rate": 3.6,
            "count": 145
          }
        },
        {
          "id": 19,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 7.95,
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.5,
            "count": 146
          }
        },
        {
          "id": 18,
          "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "price": 9.85,
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 130
          }
        },
        {
          "id": 17,
          "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          "price": 39.99,
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
          "rating": {
            "rate": 3.8,
            "count": 679
          }
        },
        {
          "id": 16,
          "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          "price": 29.95,
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
          "rating": {
            "rate": 2.9,
            "count": 340
          }
        },
        {
          "id": 15,
          "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          "price": 56.99,
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
          "rating": {
            "rate": 2.6,
            "count": 235
          }
        },
        {
          "id": 14,
          "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
          "price": 999.99,
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
          "rating": {
            "rate": 2.2,
            "count": 140
          }
        },
        {
          "id": 13,
          "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          "price": 599,
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
          "rating": {
            "rate": 2.9,
            "count": 250
          }
        },
        {
          "id": 12,
          "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          "price": 114,
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
          "rating": {
            "rate": 4.8,
            "count": 400
          }
        },
        {
          "id": 11,
          "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          "price": 109,
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
          "rating": {
            "rate": 4.8,
            "count": 319
          }
        },
        {
          "id": 10,
          "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          "price": 109,
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          "rating": {
            "rate": 2.9,
            "count": 470
          }
        },
        {
          "id": 9,
          "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          "price": 64,
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          "rating": {
            "rate": 3.3,
            "count": 203
          }
        },
        {
          "id": 8,
          "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
          "price": 10.99,
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 1.9,
            "count": 100
          }
        },
        {
          "id": 7,
          "title": "White Gold Plated Princess",
          "price": 9.99,
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 3,
            "count": 400
          }
        },
        {
          "id": 6,
          "title": "Solid Gold Petite Micropave ",
          "price": 168,
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 70
          }
        },
        {
          "id": 5,
          "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          "price": 695,
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 4.6,
            "count": 400
          }
        },
        {
          "id": 4,
          "title": "Mens Casual Slim Fit",
          "price": 15.99,
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          "rating": {
            "rate": 2.1,
            "count": 430
          }
        },
        {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 55.99,
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 500
          }
        },
        {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
            "rate": 4.1,
            "count": 259
          }
        },
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120
          }
        }
      ]
    }
    printf(() => {
      const stackTrace = path ? path.slice((path.indexOf("api/")), (url.length)) || url : '';
      return `[DEBUG] [${timestamp}] [${stackTrace}] [200] [Product list retrived successfuly]`;
    })
    return res.status(200).json({ result: response });

  } catch (error) {
    let errMsg = {
      status: {
        code: '500',
        message: 'Request Failed',
        description: error.message || 'Something went wrong'
      },
      data: null
    }
    printf(() => {
      const stackTrace = path ? path.slice((path.indexOf("api/")), (url.length)) || url : '';
      return `[ERROR] [${timestamp}] [${stackTrace}] [500] [${error.message || 'Something went wrong'}]`;
    })
    return res.status(500).json({ result: errMsg });
  }
}