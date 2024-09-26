export const formatters = () => {
  //#region NUM FORMATTERS
  const numFormatter = (number: string) => {
    if (number) {
      const newX = number.replaceAll(",", "");
      const num = parseFloat(newX);
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
      return number;
    } else {
      return "0";
    }
  };
  const numberWithComma = (num: any) => {
    if (num > 0) {
      if (num >= 1) {
        return num.toLocaleString();
      } else {
        return num.toFixed(6);
      }
    }
  };
  //#endregion

  //#region DATE FORMATTERS
  const formatDateTime = (x: string) => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };

    const date = new Date(x);
    return (
      date.toLocaleDateString("en-US", dateOptions) +
      " at " +
      date.toLocaleTimeString("en-US", timeOptions)
    );
  };
  const formatDate = (x: string) => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const date = new Date(x);
    return date.toLocaleDateString("en-US", dateOptions);
  };
  const formatTime = (x: string) => {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    };

    const date = new Date(x);
    return date.toLocaleTimeString("en-US", timeOptions);
  };
  const getDaysLeft = (expiryDate: string): null | number => {
    if (!expiryDate) return null;
    const today = new Date();
    const expiry = new Date(expiryDate);
    // Calculate the difference in time
    const differenceInTime = expiry.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };
  const getMonth = (offset: number): string => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + offset);
    const month = currentDate.toLocaleString("default", { month: "long" });
    return month;
  };
  //#endregion

  //#region STRING FORMATTERS
  const truncate = (str: string, n: number) => {
    return str && str.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  //#endregion

  return {
    numFormatter,
    numberWithComma,

    //date formatters
    formatDateTime,
    formatDate,
    formatTime,
    getDaysLeft,
    getMonth,

    // string formatters
    truncate,
  };
};
