const games = [];
const stringifiedGameObjects = [];
const parsedObjects = [];

games.push(
    new Game(
        440, 
        `Team Fortress 2`, 
        `Valve's flagship team class based first person shooter`,
        `https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1665425286`,
    ),
    new Game(
        730,
        `Counter Strike: Global Offensive`,
        `Valve's hit tactical first person shooter`,
        `https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1668125812`
    ),
    new Game(
        960090,
        `Bloons TD 6`,
        `The legendary tower defence strategy game. Straight out of NZ`,
        `https://cdn.akamai.steamstatic.com/steam/apps/960090/header.jpg?t=1668396558`
    ),
    new Game(
        394360,
        `Hearts of Iron 4`,
        `Play as your favourite nation in the greatest world war 2 simulator on the macro scale`,
        `https://cdn.akamai.steamstatic.com/steam/apps/394360/header.jpg?t=1671469258`
    ),
    new Game(
        638970,
        `Yakuza 0`,
        `Play as the legendary characters Kiryu Kazuma and Goro Majima in 1980's Japan`,
        `https://cdn.akamai.steamstatic.com/steam/apps/638970/header.jpg?t=1671625198`
    )
)

const stringifyElements = () => {
    games.forEach((element) => {
        stringifiedGameObjects.push(
            JSON.stringify(element)
        );
    });

    // JSON DATA MET ESCAPE CHARACTERS
    console.log(stringifiedGameObjects);
}

const parseElements = () => {
    stringifiedGameObjects.forEach((element) => {
        parsedObjects.push(
            JSON.parse(element)
        );
    });
}

const printObjects = () => {
    document.body.innerHTML = `<div id="wrapper" class="grid"></div>`
    const wrapper = document.querySelector(`#wrapper`);

    parsedObjects.forEach((element) => {
        wrapper.innerHTML += 
        `<div>
            ${element.id}<br>
            ${element.title}<br>
            ${element.description}<br>
            <img src="${element.imageURL}" alt="${element.imageURL}">
        </div>`
    });
}

stringifyElements();
parseElements();
printObjects();