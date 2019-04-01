window.onload= function() {
    AboutMe.classList.add('hereAboutMe'),
    AboutM.classList.add('hereAboutM'),
    GridFirst.classList.add('raise1'),
    GridSecond.classList.add('raise2'),
    ButH.classList.add('raise3'),
    ButM.classList.add('raise4'),
    cli.classList.add('raise5');
}



GridSecond.onclick= function() {
    GridSecond.classList.add('changecolor'),
    ButM.classList.add('vanish'),
    Draw.classList.add('MoveDraw'),
    Cook.classList.add('MoveCook'),
    Sport.classList.add('MoveSport'),
    Photo.classList.add('MovePhoto');
}
