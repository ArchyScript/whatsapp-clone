 

export const utils = () => {
  // const userStore = useUserStore(); 

  const isResponseValid = (code: number) => {
    return code > 199 && code < 300;
  };
 
  return  {isResponseValid}
};

export function createQueryParam(obj: { [id: string]: any }) {
  if ((obj && !Object.values(obj || {}).length) || !obj) {
    return "";
  }
  return Object.keys(obj || {})
    .map((key) =>
      obj[key]
        ? encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
        : ""
    )
    .filter((item) => item)
    .join("&");
}
