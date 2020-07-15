import moment from "moment";

const _format = (a: any) => {
  a = String(a);
  return a.length === 1 ? `0${a}` : a;
};

export function getDate(date: string) {
  const _date = moment(date);

  return (
    _format(_date.date()) +
    "/" +
    _format(_date.month() + 1) +
    "/" +
    _format(_date.year())
  );
}

export function getTime(date: string) {
  const _date = moment(date);

  return _format(_date.hour()) + "h" + _format(_date.minute());
}
