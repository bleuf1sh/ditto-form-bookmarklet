const uniqPrefix = `Programming_0b0110_Days_A_Week`;

function RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__getLocalStorageKey(el) {
  const elId = `_${el.id}_${el.type}_${el.getAttribute('aria-describedby')}`;

  return `${uniqPrefix}__${elId}`;
}

function RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__saveAllInputs() {
  console.log(`saveAllInputsToCookie...`);
  let saveInputsCount = 0;
  (document.querySelectorAll('input')).forEach((inputEl) => {
    const inputVal = inputEl.value;
    if (!inputVal) { return; }

    localStorage.setItem(RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__getLocalStorageKey(inputEl), inputVal);
    saveInputsCount += 1;
  });
  console.log(`saveAllInputsToCookie... ${saveInputsCount} done`);
  alert(`Saved ${saveInputsCount} inputs`);
}

function RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__restoreAllInputs() {
  console.log(`restoreAllInputsToCookie...`);
  let restoredInputsCount = 0;
  (document.querySelectorAll('input')).forEach((inputEl) => {
    if (inputEl.value) { return; }

    const savedValue = localStorage.getItem(RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__getLocalStorageKey(inputEl));
    if (savedValue) {
      inputEl.value = savedValue;
      const event = new Event('input', {
        bubbles: true,
        cancelable: true,
      });

      inputEl.dispatchEvent(event);
      restoredInputsCount += 1;
    }
  });
  console.log(`restoreAllInputsToCookie... ${restoredInputsCount} done`);
  alert(`Restored ${restoredInputsCount} inputs`);
}


function RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__showPrompt() {
  const promptEl = document.createElement('div');
  promptEl.style.position = 'fixed';
  promptEl.style.top = '0';
  promptEl.style.left = '0';
  promptEl.style.right = '0';
  promptEl.style.zIndex = '9999';
  promptEl.style.background = 'darkolivegreen';
  promptEl.style.margin = '10px';
  promptEl.style.padding = '10px';
  promptEl.style.alignContent = 'center';
  promptEl.style.textAlign = 'center';
  promptEl.style.display = 'flex';
  promptEl.style.flexDirection = 'column';

  promptEl.innerHTML = `
  <button>CLOSE</button>
  <button>SAVE</button>
  <button>RESTORE</button>
  `;

  const buttons = promptEl.querySelectorAll('button');
  buttons.forEach((el) => {
    el.style.height = '20vh';
    el.style.margin = '8px';
  });

  buttons[0].onclick = () => {
    promptEl.remove();
  };
  buttons[1].onclick = () => {
    RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__saveAllInputs();
    promptEl.remove();
  };
  buttons[2].onclick = () => {
    RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__restoreAllInputs();
    promptEl.remove();
  };

  document.body.append(promptEl);
}

RANDOM_PREFIX_TO_AVOID_SCOPE_ISSUES__showPrompt();
