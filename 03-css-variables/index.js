const inputs = document.querySelectorAll('.controls input'); // it's not an array but a nodelist, we can transform it into an Array to use its methods too, as nodelists' methods are limited

function handleUpdate() {
  // 1. getting the value out of the suffixes, using 'dataset' that picks all from html where there's "data-"
  // (we can add more custom "data-")
  // we create this variable so that can add sizing property 'px' in the next step
  const suffix = this.dataset.sizing || ''; // sizing or nothing -> as color has no sizing
  // 2. selecting the variable -> by selecting the whole document and updating it with the change
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
