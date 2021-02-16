export const copyToClipboard = (text) => {
  const tempTextArea = document.createElement("textarea");

  document.body.appendChild(tempTextArea);
  tempTextArea.style.position = "fixed";
  tempTextArea.style.left = "0";
  tempTextArea.style.top = "0";
  tempTextArea.style.opacity = "0";
  tempTextArea.value = text;

  tempTextArea.focus();
  tempTextArea.select();

  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
};
