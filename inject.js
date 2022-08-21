const css = `
@keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  .spin::before {
    animation: 30s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #1c87c9;
    border-bottom-left-radius: 100px;
    border-radius: 50%;
    content: "";
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }


`

const styles = document.createElement("style")
styles.innerHTML = css
document.head.appendChild(styles)

const cover = document.createElement("div")
cover.style.width = "100vw"
cover.style.height = "10000vh"
cover.style.zIndex = 1000000
cover.style.backgroundColor = "#656566"

cover.style.position = "absolute"
cover.style.top = "0px"
cover.style.left = "0px"

document.body.style.overflow = "hidden"

document.body.appendChild(cover)

const spinner = document.createElement("div")
spinner.className = "spin"
cover.appendChild(spinner)

