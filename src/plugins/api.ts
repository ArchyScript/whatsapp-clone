// import { $fetch } from "ofetch";

// import ChatManagement from "~/infrastructures/apis/ChatMgt";
// import UserManagement from "~/infrastructures/apis/UserMgt"; 

// /** ApiInstance interface provides us with good typing */
// interface IApiInstance {
//   ChatManagement: ChatManagement;
//   UserMgt: UserManagement; 
// }

// export default defineNuxtPlugin((nuxtApp) => {
//   const config = useRuntimeConfig();
//   const CryptoJS = new CryptoJSHash();
//   const token = useCookie("transferxo.auth.token");

//   /** create a new instance of $fetcher with custom option */
//   const apiFetcher = $fetch.create({
//     onRequest({ request, options }) {
//       options.headers = {
//         Authorization: `Bearer ${token.value}`,
//         "X-API-KEY": `${config.public.X_API_KEY}`,
//         "Ocp-Apim-Subscription-Key": `${config.public.SUBSCRIPTION_KEY}`,
//         "Cache-Control": "no-cache",
//         Pragma: "no-cache",
//         Expires: "0",
//         "Flow-ID": CryptoJS.getHash(),
//       };
//     },
//     onResponseError({ response }) {
//       // Check for 401 Unauthorized response
//       if (response.status === 401) {
//         useRouter().push('/');
//       }
//     }
//   });

//   /** an object containing all repositories we need to expose */
//   const modules: IApiInstance = {
//     ChatManagement: new ChatManagement(apiFetcher),
//     UserMgt: new UserManagement(apiFetcher), 
//   };

//   return {
//     provide: {
//       api: modules,
//     },
//   };
// });
