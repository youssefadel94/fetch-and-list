export interface product {
  id: string;
  title: string;
  category: string;
  description: string;
  images: Array<string>;
  variants: Array<variant>;
  price: number;
  tags: Array<string>;
}
export interface variant {
  id: string;
  quantity: number;
  title: string;
  sku: string;
}
// {
//     "id": "14ea3aef-7afe-478e-98af-9e42e3b9f990",
//     "title": "Generic Soft Keyboard",
//     "category": "3dd19955-32de-4aa9-bd63-60c21070c1cc",
//     "description": "Ratione eaque consectetur rerum rerum voluptatem. Ab doloremque aut eaque velit enim ut. Consectetur voluptatem esse dolorem placeat possimus qui quod autem. Dolor enim iste rerum. Illum necessitatibus dolore quae quia pariatur consequatur facilis saepe veritatis. Consequatur odit architecto.",
//     "images": [
//       "https://source.unsplash.com/1600x900/?Keyboard",
//       "https://source.unsplash.com/1600x900/?Keyboard",
//       "https://source.unsplash.com/1600x900/?Keyboard"
//     ],
//     "variants": [
//       {
//         "id": "22e30edf-a31c-4e9d-9123-5102c0b1df57",
//         "quantity": 5,
//         "title": "Rubber",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Rubber"
//       },
//       {
//         "id": "69033ac8-8320-4e6b-87ae-70d07b112098",
//         "quantity": 3,
//         "title": "Wooden",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Wooden"
//       },
//       {
//         "id": "ae7f5a3a-7267-43d7-8d0c-c73f2d33352a",
//         "quantity": 2,
//         "title": "Soft",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Soft"
//       },
//       {
//         "id": "d4be930f-d8cb-4872-9a26-991ec93f0324",
//         "quantity": 4,
//         "title": "Cotton",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Cotton"
//       },
//       {
//         "id": "7f4ee39f-55a4-4df1-99be-2092cd91bc25",
//         "quantity": 4,
//         "title": "Metal",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Metal"
//       },
//       {
//         "id": "768b2f6f-bad8-4d3b-8bcb-dc579abb9935",
//         "quantity": 7,
//         "title": "Wooden",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Wooden"
//       },
//       {
//         "id": "54439cd4-44bf-41f8-b5f3-f366ffaba356",
//         "quantity": 2,
//         "title": "Granite",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Granite"
//       },
//       {
//         "id": "43da0a91-c23a-4b0b-88d0-e67cc5a8697c",
//         "quantity": 0,
//         "title": "Frozen",
//         "sku": "14ea3aef-7afe-478e-98af-9e42e3b9f990-Frozen"
//       }
//     ],
//     "price": "190.00",
//     "tags": [
//       "Gorgeous",
//       "Rustic",
//       "Ergonomic",
//       "Unbranded",
//       "Rustic",
//       "Sleek",
//       "Awesome",
//       "Incredible"
//     ]
//   }
