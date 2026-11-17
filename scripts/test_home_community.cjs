const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto').webcrypto;

function commentsSetup({stored=null,denied=false}={}) {
  const alerts=[];
  const nodes=new Map(['comments-list-box','comments-count','comm-name','comm-location','comm-topic','comm-content'].map(id=>[id,{value:'',textContent:'',innerHTML:'',querySelectorAll:()=>[]}]))
  nodes.get('comm-topic').value='美食推薦';
  const context={crypto,alert:value=>alerts.push(value),
    document:{addEventListener(){},getElementById:id=>nodes.get(id),querySelectorAll:()=>[]},
    localStorage:{getItem(){if(denied)throw Error('denied');return stored;},setItem(key,value){if(denied)throw Error('denied');stored=value;}}
  };
  vm.createContext(context);
  const html=fs.readFileSync('community.html','utf8');
  const source=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match=>match[1]).find(text=>text.includes('const DEFAULT_COMMENTS'));
  vm.runInContext(source,context);
  return {context,nodes,alerts,stored:()=>stored,run:source=>vm.runInContext(source,context)};
}

test('community escapes persisted markup in names, locations, content and times', () => {
  const data=[{id:"unsafe' onclick='alert(1)",name:'<img src=x onerror=alert(1)>',location:'<svg onload=alert(1)>',content:'<script>alert(1)</script>',time:'<img src=x>',likes:'bad'}];
  const {run,nodes}=commentsSetup({stored:JSON.stringify(data)});
  run('loadComments()');
  const html=nodes.get('comments-list-box').innerHTML;
  assert.equal(html.includes('<img src=x'),false);
  assert.equal(html.includes('<script>'),false);
  assert.ok(html.includes('&lt;script&gt;'));
  assert.equal(html.includes('onclick='),false);
  assert.ok(html.includes('data-comment-id="local_0"'));
});

test('corrupt and non-array comment storage use samples without throwing', () => {
  for(const stored of ['{broken','{"name":"test"}','null']) {
    const {run}=commentsSetup({stored});
    assert.ok(run('getStoredComments().length')>0);
    run('loadComments()');
  }
});

test('failed persistence keeps form input and reports failure instead of success', () => {
  const {nodes,run,alerts}=commentsSetup({denied:true});
  nodes.get('comm-name').value='測試';nodes.get('comm-content').value='保留我的留言';
  run('postComment()');
  assert.equal(nodes.get('comm-content').value,'保留我的留言');
  assert.equal(alerts.length,1);
  assert.ok(alerts[0].includes('無法儲存'));
});

test('saved comments have unique IDs, timestamps and zero initial likes without mutating samples', () => {
  const {nodes,run,stored,alerts}=commentsSetup();
  const originalCount=run('DEFAULT_COMMENTS.length');
  run("activeTopic='咖啡探店'");
  nodes.get('comm-name').value='測試';nodes.get('comm-content').value='本機留言';
  run('postComment()');
  const saved=JSON.parse(stored());
  assert.equal(saved[0].likes,0);
  assert.ok(saved[0].createdAt>0);
  assert.equal(saved.length,originalCount+1);
  assert.equal(run('DEFAULT_COMMENTS.length'),originalCount);
  assert.equal(run('activeTopic'),'全部');
  assert.equal(nodes.get('comm-content').value,'');
  assert.ok(alerts[0].includes('尚未公開發布'));
});

test('theme cards navigate to their actual theme and preserve the selected language', () => {
  const nodes=new Map(['trending-capsule-row','themes-grid-container'].map(id=>[id,{innerHTML:'',querySelectorAll:()=>[]}]))
  const context={URL,URLSearchParams,document:{addEventListener(){},getElementById:id=>nodes.get(id)},window:{location:{}},
    THEMES_DATA:[{id:"northcoast",name:'主題 "北海岸"',shortName:'北海岸',icon:'🌊',count:3}],
    TOP_ACTIVITIES_6:[{activityId:'123-example',name:'<script>title</script>',img:'https://example.test/img.jpg',localImg:'https://example.test/fallback.jpg'}]
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync('js/app.js','utf8'),context);
  vm.runInContext("currentLang='ja';filterByTheme('northcoast');renderThemesSection();renderTrendingSection();",context);
  assert.equal(context.window.location.href,'themes.html?theme=northcoast&lang=ja');
  assert.ok(nodes.get('themes-grid-container').innerHTML.includes('theme=northcoast&amp;lang=ja'));
  assert.ok(nodes.get('themes-grid-container').innerHTML.includes('<a class="theme-icon-card"'));
  assert.equal(nodes.get('trending-capsule-row').innerHTML.includes('<script>title'),false);
  assert.equal(nodes.get('trending-capsule-row').innerHTML.includes('onclick='),false);
  assert.ok(nodes.get('trending-capsule-row').innerHTML.includes('href="https://www.klook.com/'));
});
