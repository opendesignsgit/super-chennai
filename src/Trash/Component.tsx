// import { HeaderClient } from './Component.client'
// import { getCachedGlobal } from '@/utilities/getGlobals'
// import React from 'react'

// import type { Header } from '@/payload-types'

// export async function Header() {
//   const headerData: Header = await getCachedGlobal('header', 1)()

//   return <HeaderClient data={headerData} />
// }


// blocks/header/server.tsx

// import { GraphQLClient } from 'graphql-request';
// import { HeaderMenu } from './index';

// const client = new GraphQLClient('YOUR_PAYLOAD_GRAPHQL_ENDPOINT');

// const getHeaderMenuData = async () => {
//   const query = `
//     query {
//       HeaderMenu {
//         menuItems {
//           label
//           labellink
//           content {
//             title
//             desc
//             link
//           }
//         }
//       }
//     }
//   `;

//   const data = await client.request(query);
//   return data.HeaderMenu.menuItems;
// };

// const Header = async () => {
//   const menuItems = await getHeaderMenuData();
//   return <HeaderMenu menuItems={menuItems} />;
// };

// export default Header;
