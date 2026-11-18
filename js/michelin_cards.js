/** Blank areas of a restaurant card open its article; map/booking links retain their own actions. */
document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('michelin-cards-grid');if(!grid)return;
  grid.addEventListener('click',event=>{
    if(event.defaultPrevented || event.button!==0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.target.closest('a,button,input,select,textarea') || window.getSelection()?.toString())return;
    const card=event.target.closest('.michelin-card');const article=card?.querySelector('a[data-michelin-article]');if(article)window.location.assign(article.href);
  });
});
