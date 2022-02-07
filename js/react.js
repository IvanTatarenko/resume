const experiences = [
    {href: "https://uk.wikipedia.org/wiki/HTML", title: "HTML", src: "img/icon_html.svg"},
    {href: "https://uk.wikipedia.org/wiki/CSS", title: "CSS", src: "img/icon_css.svg"},
    {href: "https://uk.wikipedia.org/wiki/C_Sharp", title: "C#", src: "img/icon_с.svg"},
    {href: "https://uk.wikipedia.org/wiki/MySQL", title: "MySQL", src: "img/icon_mysql.svg"},
    {href: "https://uk.wikipedia.org/wiki/Adobe_Illustrator", title: "Illustrator", src: "img/icon_ai.svg"},
    {href: "https://uk.wikipedia.org/wiki/Adobe_Photoshop", title: "Photoshop", src: "img/icon_ps.svg"},
    {href: "https://uk.wikipedia.org/wiki/Git", title: "Git", src: "img/icon_git.svg"},
    {href: "https://uk.wikipedia.org/wiki/GitHub", title: "GitHub", src: "img/icon_github.svg"},
    {href: "https://uk.wikipedia.org/wiki/PHP", title: "PHP", src: "img/icon_php.svg"},
    {href: "https://uk.wikipedia.org/wiki/Python", title: "Python", src: "img/icon_python.svg"},
    {href: "https://uk.wikipedia.org/wiki/Visual_Studio_Code", title: "VS Code", src: "img/icon_vscode.svg"},
    {href: "https://uk.wikipedia.org/wiki/WordPress", title: "WordPress", src: "img/icon_wordpress.svg"}
]

function creatExperience(experience){
    return `
    <a href="${experience.href}" target="_blank" title="${experience.title}"><img class = "icon_img" src="${experience.src}" alt="${experience.title}" height="65" width="65"></a>
    `
}

const templates = experiences.map(experience => creatExperience(experience))
const html = templates.join(' ')

document.querySelector('#bloc4').innerHTML = html