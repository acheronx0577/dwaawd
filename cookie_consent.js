(function(){
  var banner=document.getElementById('banner');
  var overlay=document.getElementById('manage-overlay');
  var done=document.getElementById('done-state');
  var doneRing=document.getElementById('done-ring');
  var doneTitle=document.getElementById('done-title');
  var doneSub=document.getElementById('done-sub');

  function finish(t){
    banner.classList.add('hidden');
    overlay.classList.remove('visible');
    if(t==='deny'){
      doneRing.style.background='var(--a1)';
      doneTitle.textContent='GOT IT.';
      doneSub.innerHTML='Only essentials active.<br>No tracking, no ads.';
    } else {
      doneRing.style.background='var(--a3)';
      doneTitle.textContent='SORTED!';
      doneSub.innerHTML='Your preferences are saved.<br>Change them anytime in settings.';
    }
    done.classList.add('visible');
  }

  document.getElementById('btn-accept').onclick=function(){
    ['t-a','t-p','t-m'].forEach(function(id){document.getElementById(id).checked=true;});
    finish('accept');
  };
  document.getElementById('btn-deny').onclick=function(){
    ['t-a','t-p','t-m'].forEach(function(id){document.getElementById(id).checked=false;});
    finish('deny');
  };
  document.getElementById('btn-manage').onclick=function(){
    banner.classList.add('hidden');
    overlay.classList.add('visible');
  };
  document.getElementById('btn-back').onclick=function(){
    overlay.classList.remove('visible');
    banner.classList.remove('hidden');
  };
  document.getElementById('btn-all').onclick=function(){
    ['t-a','t-p','t-m'].forEach(function(id){document.getElementById(id).checked=true;});
    document.getElementById('btn-save').click();
  };
  document.getElementById('btn-save').onclick=function(){
    var s=document.getElementById('saved-msg');
    s.classList.add('show');
    setTimeout(function(){s.classList.remove('show');finish('save');},1300);
  };
})();
