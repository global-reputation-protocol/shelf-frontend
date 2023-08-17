const itemDictionary = { 
  "item-1": {"name":"AAVE 01","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Governance engagement badge 01.","image":"https://shelf-frontend-shelf.vercel.app/items/aave1.svg","attributes":{"Collection":"AAVE Governance"}},
  "item-2": {"name":"AAVE 02","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Governance engagement badge 02.","image":"https://shelf-frontend-shelf.vercel.app/items/aave2.svg","attributes":{"Collection":"AAVE Governance"}},
  "item-3": {"name":"AAVE 03 GHO","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"GHO contributor badge.","image":"https://shelf-frontend-shelf.vercel.app/items/aave3.svg","attributes":{"Collection":"AAVE Governance"}},
  "item-4": {"name":"AAVE 04","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Governance engagement badge.","image":"https://shelf-frontend-shelf.vercel.app/items/aave4.svg","attributes":{"Collection":"AAVE Governance"}},
  "item-5": {"name":"AAVE 05","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Governance engagement badge.","image":"https://shelf-frontend-shelf.vercel.app/items/aave5.svg","attributes":{"Collection":"AAVE Governance"}},
  "item-6": {"name":"LENNY","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Lens official top engagement badge.","image":"https://shelf-frontend-shelf.vercel.app/items/lens1.svg","attributes":{"Collection":"Lens Specials"}},
  "item-7": {"name":"LENS PROTOCOL OG","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Lens Pioneer badge.","image":"https://shelf-frontend-shelf.vercel.app/items/lens2.svg","attributes":{"Collection":"Lens Specials"}},
  "item-8": {"name":"LENS Workshop Attendee","external_url":"https://shelf-frontend-shelf.vercel.app/","description":"Lens Community Alumni badge.","image":"https://shelf-frontend-shelf.vercel.app/photo_2023-08-14_13-20-16-removebg-preview 1.png","attributes":{"Collection":"Lens Specials"}}
}

export default function handler(req, res) {
  const item = req.query.item;
  // Check if the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  // Response data
  const response = itemDictionary[item];

  // Send the response as JSON
  res.status(200).json(response);
}