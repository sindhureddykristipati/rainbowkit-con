// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import { ConnectButton } from '@rainbow-me/rainbowkit/dist/components'
// import { useAccount, useProvider } from 'wagmi'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {

// const account = useAccount()

// // const provider = useProvider()


//   return (
//     <div style={{
//       height:"100vh",
//       width:"100vw",
//       display:"flex",
//       flexDirection:"column",
//       alignItems:"center",
//       justifyContent:"center",
//     }}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
// <ConnectButton  label='Signin'  accountStatus={'avatar'}/>
    


//     <div>
// {account.isConnected && 'Account  ${account.address} is now connected!'}
//     </div>


//     </div>
//   )
// }
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useProvider } from "wagmi";
import styles from "../styles/Home.module.css";

export default function Home() {
  const account = useAccount();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConnectButton />
      <div>
        {account.isConnected && `Account ${account.address} is now connected!`}
      </div>
    </div>
  );
}