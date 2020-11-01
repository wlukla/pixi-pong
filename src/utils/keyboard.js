export const createKeyboardHandler = (value) => {
  const key = {
    value,
    isPressed: false,
    onPress: undefined,
    onRelease: undefined,
  }

  const downHandler = (e) => {
    e.preventDefault();

    if (e.code === key.value && !key.isPressed && key.onPress) {
      key.onPress();
      key.isPressed = true;
    }
  }

  const upHandler = (e) => {
    e.preventDefault();

    if (e.code === key.value && key.isPressed && key.onRelease) {
      key.onRelease();
      key.isPressed = false;
    }
  }

  window.addEventListener('keydown', downHandler, false);
  window.addEventListener('keyup', upHandler, false);

  key.unsubscribe = () => {
    window.removeEventListener('keydown', downHandler);
    window.removeEventListener('keyup', upHandler);
  }

  return key;
}