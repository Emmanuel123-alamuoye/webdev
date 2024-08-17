const downloadbutton=document.getElementsByClassName('primary-btn')[0];
downloadbutton.addEventListener('click',()=>{
  const link=document.createElement('a');
  link.href=' https://emmanuel123-alamuoye.github.io/file/';
  link.download='Z26sYJf.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});