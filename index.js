const tela = document.getElementById("tela")

const listaEpisodios = [ 
    {
        "name":   "BRIDGERTON S03 E01",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x1.mp4"
    },

    {
        "name": "BRIDGERTON S03 E02",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x2.mp4"
    },

    {
        "name": "BRIDGERTON S03 E03",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x3.mp4"
    },

    {
        "name": "BRIDGERTON S03 E04",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x4.mp4"
    },

    {
        "name": "BRIDGERTON S03 E05",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x5.mp4"
    },

    {
        "name": "BRIDGERTON S03 E06",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x6.mp4"
    },

    {
        "name": "BRIDGERTON S03 E07",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x7.mp4"
    },

    {
        "name": "BRIDGERTON S03 E08",
        "link": "http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x8.mp4"
    }
]

for (let index = 0; index < listaEpisodios.length; index++) {
    const player = document.createElement('div')
    player.setAttribute('class', 'player')

    const title = document.createElement('h3')
    title.innerText = listaEpisodios[index].name
    player.appendChild(title)
    
    const elIframe = document.createElement('iframe')
    elIframe.setAttribute('src', `http://shd1.doramasapp.xyz/sfgerg54yrt/SHD1/91239/3x${index + 1}.mp4`)
    elIframe.setAttribute('allowfullscreen', 'true')
    elIframe.setAttribute('accelerometer', 'true')
    player.appendChild(elIframe)

    tela.appendChild(player)
}
