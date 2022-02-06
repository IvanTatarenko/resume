// The locale our app first shows
const defaultLocale = "en";
const supportedLocales = ["uk", "en"];
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};
// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  const initialLocale = 
    supportedOrDefault(browserLocales(true));
  setLocale(initialLocale);
  bindLocaleSwitcher(initialLocale);
});
// Load translations for the given locale and translate
// the page to this locale
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
// Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`../resume/lang/${newLocale}.json`);
  return await response.json();
}
// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
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
    
    // Set the locale to the selected option[value]
    setLocale(e.target.value);
    if(e.target.value == "en"){
      var tag_css = document.createElement('link');
      tag_css.rel = 'stylesheet';
      tag_css.href = '../resume/style_en.css';
      tag_css.type = 'text/css';
      var tag_head = document.getElementsByTagName('head');
      tag_head[0].appendChild(tag_css);
    }
  };
  if(defaultLocale == "en"){
    var tag_css = document.createElement('link');
    tag_css.rel = 'stylesheet';
    tag_css.href = '../resume/style_en.css';
    tag_css.type = 'text/css';
    var tag_head = document.getElementsByTagName('head');
    tag_head[0].appendChild(tag_css);
  }
}
