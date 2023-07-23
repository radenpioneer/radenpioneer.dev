import { $isMenuOpen } from '../header/header.store'

$isMenuOpen.subscribe((value) => {
  if (value) {
    window.document.getElementById('html')!.classList.add('modal-is-open')
  } else {
    window.document.getElementById('html')!.classList.remove('modal-is-open')
  }
})
