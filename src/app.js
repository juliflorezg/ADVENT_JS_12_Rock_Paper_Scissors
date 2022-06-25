// setTimeout(() => {
//   console.clear()
//   console.log(location.href)
//   // window.location = `location.href${winner.html}`
//   // window.location = `${location.href}/winner.html`
//   console.log(location.href)
//   window.location = `winner.html`
//   window.location = ``
// }, 2000);

// setTimeout(() => {
//   location.assign('/winner.html')
// }, 1000);

//~ Code for INDEX html file
if (location.pathname === '/') {
  const $rockBtn = document.getElementById('rock')

  const loadWinnerPage = userChoice => {
    // debugger
    let PCChoice = Math.floor(Math.random() * 3) // 0, 1, 2
    console.log({ userChoice }) // '0', '1', '2'
    console.log({ PCChoice }) // 0, 1, 2

    location.assign(`/winner.html?user=${userChoice}&computer=${PCChoice}`)
  }

  //   $rockBtn.addEventListener('click', e => {
  //     console.log(e.target)
  //     loadWinnerPage(e.target.dataset.index)
  //   })

  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.matches('button > img') || e.target.matches('button')) {
      console.log(e.target)
      console.log(e.target.closest('button'))
      console.log(e.target.closest('button').dataset.index)
      loadWinnerPage(e.target.closest('button').dataset.index)
    }
  })

  console.log($rockBtn)
} else if (location.pathname === '/winner.html') {
  //~ Code for WINNER html file
  const $playAgainBtn = document.querySelector('.play-again')
  const url = new URLSearchParams(document.location.search)

  const userChoice = url.get('user')
  const PCChoice = url.get('computer')

  function setBodyClass(resultClass) {
    const bodyClasses = ['its-tie', 'you-win', 'computer-wins']

    //filter classes which are not the class passed
    const classesToRemove = bodyClasses.filter(
      classname => classname !== resultClass
    )
    classesToRemove.forEach(classname =>
      document.body.classList.remove(classname)
    )

    document.body.classList.add(resultClass)
  }

  function setGameImages(userChoice, PCChoice) {
    const $userImage = document.querySelector('.your-pick > img')
    const $PCImage = document.querySelector('.computer-pick > img')
    // debugger
    switch (userChoice) {
      case '0':
        {
          $userImage.setAttribute('src', './assets/rock.png')
          $userImage.setAttribute('alt', 'Rock')
          $userImage.classList.remove('hide')
        }
        break
      case '1':
        {
          $userImage.setAttribute('src', './assets/paper.png')
          $userImage.setAttribute('alt', 'Paper')
          $userImage.classList.remove('hide')
        }
        break
      case '2':
        {
          $userImage.setAttribute('src', './assets/scissors.png')
          $userImage.setAttribute('alt', 'Scissors')
          $userImage.classList.remove('hide')
        }
        break
    }
    switch (PCChoice) {
      case '0':
        {
          $PCImage.setAttribute('src', './assets/rock.png')
          $PCImage.setAttribute('alt', 'Rock')
          $PCImage.classList.remove('hide')
        }
        break
      case '1':
        {
          $PCImage.setAttribute('src', './assets/paper.png')
          $PCImage.setAttribute('alt', 'Paper')
          $PCImage.classList.remove('hide')
        }
        break
      case '2':
        {
          $PCImage.setAttribute('src', './assets/scissors.png')
          $PCImage.setAttribute('alt', 'Scissors')
          $PCImage.classList.remove('hide')
        }
        break
    }
  }

  switch (userChoice) {
    case '0': {
      //rock
      switch (PCChoice) {
        case '0': //rock
          {
            console.log('rock vs rock')
            console.log('TIE')
            // location.assign('/winner.html?user=0&computer=0')
            setBodyClass('its-tie')
            setGameImages(userChoice, PCChoice)
          }
          break
        case '1': //paper
          {
            console.log('rock vs paper')
            console.log('PC WINS')
            setBodyClass('computer-wins')
            setGameImages(userChoice, PCChoice)
          }
          break
        case '2': //scissors
          {
            console.log('rock vs scissors')
            console.log('USER WINS')
            setBodyClass('you-win')
            setGameImages(userChoice, PCChoice)
          }
          break
      }
      break
    }
    case '1': {
      //paper
      switch (PCChoice) {
        case '0': //rock
          {
            console.log('paper vs rock')
            console.log('USER WINS')
            setBodyClass('you-win')
            setGameImages(userChoice, PCChoice)
          }
          break
        case '1': //paper
          {
            console.log('paper vs paper')
            console.log('TIE')
            setBodyClass('its-tie')
            setGameImages(userChoice, PCChoice)
          }
          break
        case '2': //scissors
          {
            console.log('paper vs scissors')
            console.log('PC WINS')
            setBodyClass('computer-wins')
            setGameImages(userChoice, PCChoice)
          }
          break
      }
      break
    }
    case '2': {
      //scissors
      switch (PCChoice) {
        case '0': //rock
          {
            console.log('scissors vs rock')
            console.log('PC WINS')
            setBodyClass('computer-wins')
            setGameImages(userChoice, PCChoice)
          }
          break
        case '1': //paper
          {
            console.log('scissors vs paper')
            console.log('USER WINS')
            setBodyClass('you-win')
            setGameImages(userChoice, PCChoice)
          }
          break
        case '2': //scissors
          {
            console.log('scissors vs scissors')
            console.log('TIE')
            setBodyClass('its-tie')
            setGameImages(userChoice, PCChoice)
          }
          break
      }
      break
    }
  }

  const currentPath = location.pathname

  console.log(currentPath)
  console.log($playAgainBtn)
  console.log(userChoice)
  console.log(PCChoice)

  $playAgainBtn.addEventListener('click', () => {
    location.assign('/')
  })

  //   setTimeout(() => {
  //   }, 5000);
}
