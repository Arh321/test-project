function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let price = USDollar.format(n)
    .toString()
    .replace(/\d/g, (x) => farsiDigits[x]);
  return new Intl.NumberFormat()
    .format(n)
    .toString()
    .replace(/\d/g, (x) => farsiDigits[x]);
}

export default toFarsiNumber;
