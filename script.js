function toggleMode()
{
    const html=document.documentElement

    //if(html.classList.contains('light')) {
       // html.classList.remove('light')}
    //else {html.classList.add('light')}
html.classList.toggle('light')

//pegar a tag da imagem
const img= document.querySelector("#profile img")

if (html.classList.contains('light'))
img.setAttribute("src", "./asstesya/profilelight.jpg.png")

else {
    img.setAttribute("src", "./asstesya/profiledark.jpg.png")}

if (html.classList.contains('light'))
    img.setAttribute("alt", "imagem de perfil claudia no mood light")

else{
    img.setAttribute("alt", "imagem de perfil claudia no mood dark")}

}