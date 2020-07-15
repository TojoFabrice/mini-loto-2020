import Country from "world-countries";

export const countries = Country.map((country) => ({
  name: country.translations.fra.official,
  flag: country.flag,
  key: country.cca2,
  code: country.name.official + " " + "(" + country.cca2 + ")",
}));
