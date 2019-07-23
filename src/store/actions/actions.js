import * as actionTypes from './actionTypes';

export function startButtonClicked() {
  return {
    type: actionTypes.START_BUTTON_CLICKED
  }
}

export function startMenuBlur() {
  return {
    type: actionTypes.START_MENU_BLUR
  }
}

//Opening Actions
export function openNotepad() {
  return {
    type: actionTypes.OPEN_NOTEPAD
  }
}

export function openAbout() {
  return {
    type: actionTypes.OPEN_ABOUT
  }
}

export function openModal() {
  return {
    type: actionTypes.OPEN_MODAL
  }
}

//Focus Actions
export function focusNotepad() {
  return {
    type: actionTypes.FOCUS_NOTEPAD
  }
}

export function focusAbout() {
  return {
    type: actionTypes.FOCUS_ABOUT
  }
}

//Blurring Actions
export function blurNotepad() {
  return {
    type: actionTypes.BLUR_NOTEPAD
  }
}

export function blurAbout() {
  return {
    type: actionTypes.BLUR_ABOUT
  }
}

//Minimize Actions
export function minimizeNotepad() {
  return {
    type: actionTypes.MINIMIZE_NOTEPAD
  }
}

export function minimizeAbout() {
  return {
    type: actionTypes.MINIMIZE_ABOUT
  }
}