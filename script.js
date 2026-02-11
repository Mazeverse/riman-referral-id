function copyCode() {
  const code = document.getElementById('referralId').innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert('Referral ID copied: ' + code);
  });
}
