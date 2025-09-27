// import React from 'react';
// import ClientComponent from "@/components/client-component";
// import ServerComponent from "@/components/server-component";
//
// const Page = () => {
//     return (
//         <div>
//             <ClientComponent>
//                 <ServerComponent />
//             </ClientComponent>
//         </div>
//     );
// };
//
// export default Page;、
export const revalidate = 10

export default async function Page() {
    console.log('😊')
    return <h1>{new Date().toString()}</h1>
}