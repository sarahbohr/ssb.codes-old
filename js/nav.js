window.onscroll = () => { scrollFunction() }

const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 200) {
    document.querySelector(".navbar").style.top = "0"
  } else {
    document.querySelector(".navbar").style.top = "-100px"
  }
}