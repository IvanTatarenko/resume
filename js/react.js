
const imgSkils = [
  {href: "https://uk.wikipedia.org/wiki/HTML", title: "HTML", src: "img/icon_html.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/CSS", title: "CSS", src: "img/icon_css.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/C_Sharp", title: "C#", src: "img/icon_с.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/MySQL", title: "MySQL", src: "img/icon_mysql.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/Adobe_Illustrator", title: "Illustrator", src: "img/icon_ai.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/Adobe_Photoshop", title: "Photoshop", src: "img/icon_ps.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/Git", title: "Git", src: "img/icon_git.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/GitHub", title: "GitHub", src: "img/icon_github.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/PHP", title: "PHP", src: "img/icon_php.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/Python", title: "Python", src: "img/icon_python.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/Visual_Studio_Code", title: "VS Code", src: "img/icon_vscode.svg", className: "icon_img"},
  {href: "https://uk.wikipedia.org/wiki/WordPress", title: "WordPress", src: "img/icon_wordpress.svg", className: "icon_img"}
]
const imgOther = [
  {href: "https://github.com/IvanTatarenko", title: "github", src: "img/icon_github.svg", className: "icon_other_img"},
  {href: "https://www.linkedin.com/in/ivan-tatarenko-ba1aa5158/", title: "linkedin", src: "img/icon_li.svg", className: "icon_other_img"},
  {href: "https://www.instagram.com/vakum_xyukum/", title: "instagram", src: "img/icon_inst.svg", className: "icon_other_img"}
]
const Experience_text = [
  {data_i18n_key: "tr1", data_i18n_key2: "tr11", text1: "", text2: "Термін", text3: "Опис"},
  {data_i18n_key: "tr2", data_i18n_key2: "tr22", text1: "Закінчив Київський коледж будівництва, архітектури та дизайну", text2: "06.2014", text3: "Інженер по комунікаціям. Велика увага при навчанні приділялася математиці та точним наукам"},
  {data_i18n_key: "tr3", data_i18n_key2: "tr33", text1: "Військова служба", text2: "05.2015 - 10.2016", text3: "Бігав та стріляв:)"},
  {data_i18n_key: "tr4", data_i18n_key2: "tr44", text1: "Інженер технагляду за будівництвом", text2: "11.2016 - 05.2017", text3: "Контроль за дотриманням норм для правил виконання ремонтних робіт та контроль документації"},
  {data_i18n_key: "tr5", data_i18n_key2: "tr55", text1: "Графічний дизайнер freelance", text2: "04.2017 - 04.2019", text3: "Виконував широкий спектр робіт з графікою. Серед яких: ретуш фото, дизайн поліграфії, дизайн веб сайтів, малювання окремих елементів веб сайтів, створення векторних зображень для стоків, підготовка макетів до друку згідно з вимогами поліграфії."},
  {data_i18n_key: "tr6", data_i18n_key2: "tr66", text1: "Дизайнер в Express Print", text2: "06.2017 - 10.2018", text3: "В обов'зки входило обслуговування клієнтів фірми. Найчастіші завдання: друк різноманітної поліграфії, дизайн  поліграфії, комплексний дизайн друкованої продукції фірм, підготовка макетів до друку згідно з вимогами поліграфії."},
  {data_i18n_key: "tr7", data_i18n_key2: "tr77", text1: "Дизайнер в KPI Print", text2: "11.2018 - 03.2019", text3: "В обов'зки входило обслуговування клієнтів фірми. Найчастіші завдання: друк різноманітної поліграфії, широкоформатний друк, дизайн  поліграфії, комплексний дизайн друкованої продукції фірм, підготовка макетів до друку згідно з вимогами поліграфії."},
  {data_i18n_key: "tr8", data_i18n_key2: "tr88", text1: "Приватний підприємець e commerce", text2: "04.2019 - 12.2021", text3: "Займався обслуговуванням сайту (WordPress + WooCommerce), акаунту Instagram, рекламних акаунтів Google Ads та Facebook Ads. Розробив та покращував десктопну SRM на базі Windows Forms, C# та Mysql, яка допомогала вести облік клієнтів, замовлень та бухгалтерський облік."}
  
]
function IconURL(props) {
  const imgs = props.img;
  const Items = imgs.map((img) =>
    <a href={img.href} target="_blank" title={img.title} key={img.href}>
    <img className ={img.className} src={img.src} alt={img.title} /></a>
  );
  return (Items);
}
function Experience(props) {
  const items = props.items;
  const objects = items.map((item) => 
    <tr key={item.text1}>
      <th data-i18n-key={item.data_i18n_key}>{item.text1}</th>
      <th data-i18n-key={item.data_i18n_key + item.data_i18n_key2}>{item.text2}</th>
      <th data-i18n-key={item.data_i18n_key2}>{item.text3}</th>
    </tr>
  );
  return(objects);
}
ReactDOM.render(
  <IconURL img={imgSkils} />,
  document.getElementById('bloc4')
);
ReactDOM.render(
  <IconURL img={imgOther} />,
  document.getElementById('bloc_icon_other')
);

ReactDOM.render(
  <Experience items={Experience_text} />,
  document.getElementById('bloc3')
);


 








