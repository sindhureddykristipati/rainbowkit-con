// import '@/styles/globals.css'
// import {alchemyProvider}  from 'wagmi/providers/alchemy'
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
// import {connectorsForWallets, getDefaultWallets,darkTheme } from '@rainbow-me/rainbowkit/dist/wallets/getDefaultWallets'
// // import type { AppProps } from 'next/app'
// import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
// // import {publicProvider} from 'wagmi/providers/public'
// import "@rainbow-me/rainbowkit/styles.css"

// const {chains, provider} = configureChains(
//   [chain.mainnet, chain.polygoMumbai],
//   [alchemyProvider({alcheyId:process.env.ALCHEY_ID})]
//   // [publicProvider() ]
// );

// // const {connectors} = getDefaultWallets({
// // appName: 'My App',
// // chains})

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       // injectedWallet({ chains }),
//       rainbowWallet({ chains }),
//       walletConnectWallet({ chains }),
//     ],
//   },
// ]);

// const wagmiClient =  createClient({
//   autoConnect: true,
//   provider,connectors,

// });

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//   <WagmiConfig client={wagmiClient} >
//     <RainbowKitProvider  chains={chains}  theme={darkTheme{}}>

//     <Component {...pageProps} />

//     </RainbowKitProvider>
//   </WagmiConfig>
//   );
// }

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygonMumbai, chain.goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
