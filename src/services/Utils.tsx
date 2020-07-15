import { Linking } from "react-native";
import { AccountServiceSendEmailParams } from "../types/AccountType";
import moment from "moment";

const isObjectNull = (
  object: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  if (Object.entries(object).length === 0) {
    return true;
  }
  return false;
};

const shuffle = (array: Array<number>) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

const sixRandomArray = (value: number) => {
  const entities: Array<number> = Array.from(new Array(20), (x, i) => i + 1);
  const rondomEntities: Array<number> = shuffle(entities);
  const results: Array<number> = rondomEntities.slice(0, value);
  return results;
};

const calculateTimeLeft = () => {
  const difference = +new Date("2020-07-01") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const getSuffix = (rank: number) => {
  rank = rank + 1;
  if (rank == 1) {
    return "ère";
  }
  return "ème";
};
//------------------------------------------------------------------//
//------------------------ Get State data --------------------------//
//------------------------------------------------------------------//
/**
 * used by selectors
 * @param state
 * @param path
 * @param errorMessageIfNotFound
 * @returns {*}
 */
const getData = (state: any, path: any, errorMessageIfNotFound = false) => {
  let data: string;
  try {
    if (typeof state === "function") {
      throw new Error(
        "The state parameter must not be a function. The error is usually the usage of getState instead of getState(). Path is",
        path
      );
    }
    data = path.split(".").reduce((res, prop) => res[prop], state);
    if (errorMessageIfNotFound && data == null) {
      throw new Error("errorMessageIfNotFound");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
  return data;
};

const dateToHour = (date: moment.MomentInput) => {
  return moment(date).format("HH:mm:ss:ms");
};

const dateToString = (date: moment.MomentInput) => {
  return moment(date).format("YYYY-MM-DD");
};

const sendEmail = async (params: AccountServiceSendEmailParams) => {
  let url = `mailto:${params.to}`;

  // Create email link query
  const query = JSON.stringify({
    object: params.object,
    subject: params.subject,
    body: params.body,
    cc: params.options.cc,
    bcc: params.options.bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error("Provided URL can not be handled");
  }

  return Linking.openURL(url);
};

export function getArray(length: number, toData: any = null) {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    if (toData !== null) arr.push(toData);
    else arr.push(i);
  }

  return arr;
}

export {
  getData,
  sendEmail,
  isObjectNull,
  sixRandomArray,
  calculateTimeLeft,
  getSuffix,
  dateToHour,
  dateToString,
};
