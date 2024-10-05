import moment from "moment";

export function preventCharacter(value) {
  const number = value.replace(/[^0-9]/g, "");
  return number;
}

export function preventNegative(e) {
  if (!e) return;
  if (e.code === "Minus" || e.code === "NumpadSubtract") {
    e.preventDefault();
  }
}

export function format_phone_number(value) {
  const formattedSSN = value
    .replace(/[^0-9]/g, "")
    .replace(/(\d{3})(\d{1,3})(\d{0,4})/, (_, p1, p2, p3) => {
      let formattedNumber = `${p1}-${p2}`;
      if (p3) {
        formattedNumber += `-${p3}`;
      }
      return formattedNumber;
    })
    .slice(0, 12);
  return formattedSSN;
}

export function format_date(date) {
  const myDate = moment(date).format("YYYY-MM-DD");
  if (date) {
    return myDate;
  } else {
    return "--";
  }
}

export function format_time(time) {
  if (time) {
    const myTime = moment(time).format("HH:mm A");
    return myTime;
  } else {
    return "--";
  }
}

export function format_datetime(date) {
  const myDate = moment(date).format("YYYY-MM-DD HH:mm A");
  if (date) {
    return myDate;
  } else {
    return "--";
  }
}

export default function parseKey(key) {
  if (!key) return;
  let parsedKey = key
    .toString()
    .split("_")
    .map((text) => `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`)
    .join(" ");
  return parsedKey;
}

export const isArray = (array) => {
  if (array && Array.isArray(array)) {
    return array;
  } else {
    return [];
  }
};
