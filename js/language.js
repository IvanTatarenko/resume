
const defaultLocale = "uk";
const supportedLocales = ["uk", "en"];
let curentLocale;
let locale;
let translations = {};
document.addEventListener("DOMContentLoaded", () => {
  const initialLocale = 
    supportedOrDefault(browserLocales(true));
  setLocale(initialLocale);
  bindLocaleSwitcher(initialLocale);
});
async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations = await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  translatePage();
}
function isSupported(locale) {
  return supportedLocales.indexOf(locale) > -1;
}
function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}
function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale,
  );
}
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`../resume/lang/${newLocale}.json`);
  return await response.json();
}
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  
  const translation = translations[key];
  const translation_title = translations[key + ".title"];
  const translation_alt = translations[key + ".alt"];
  if(element.innerText != ""){
    element.innerText = translation;
  }
  if(element.title != ""){
    element.title = translation_title;
  }
  if (element.alt != ""){
    element.alt = translation_alt;
  }
  
}
function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector("[data-i18n-switcher]");
  switcher.value = initialValue;
  switcher.onchange = (e) => {
    setLocale(e.target.value);
  };
}
