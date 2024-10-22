let isHappyTicket = function (numberyo) {
  numberyo = numberyo.toString();

  let sumFirst = 0;
  let sumLast = 0;

  for (let i = 0; i < numberyo.length / 2; i++) {
    sumFirst += Number.parseInt(numberyo[i]);
  }

  for (let i = numberyo.length / 2; i < numberyo.length; i++) {
    sumLast += Number.parseInt(numberyo[i]);
  }

  if (numberyo.length % 2 !== 0) {
    return false;
  }

  return sumLast === sumFirst;
};
