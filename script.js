const questions = [
  // E/I
  {
    q: "今夜さ、友達の集まりあるんだけど…顔出す？",
    a: { text: "もちろん！人に会うの好きなんだよね", type: "E" },
    b: { text: "いや、今日は静かに過ごしたいな…", type: "I" }
  },
  {
    q: "初対面の人と2人きりになったらどうする？",
    a: { text: "自分から話題ふるよ！沈黙ムリ", type: "E" },
    b: { text: "気まずいけど…様子見しちゃうかも", type: "I" }
  },
  {
    q: "何も予定のない休日、どう過ごす？",
    a: { text: "誰か誘って出かけたい！", type: "E" },
    b: { text: "ひとりでまったり、最高の贅沢", type: "I" }
  },

{
  q: "「今日テンション高くない？何かあった？」って聞かれたら？",
  a: { text: "あ、バレた？ちょっといいことあってさ〜（ﾆﾔﾆﾔ）", type: "E" },
  b: { text: "え…普通だけど？（むしろ静かにして…）", type: "I" }
},
{
  q: "街中で友達とすれ違った。声かける？",
  a: { text: "声かけるどころか全力で手振る", type: "E" },
  b: { text: "うわ、見なかったことにしよ（そっと回避）", type: "I" }
},

  // S/N
  {
    q: "夢の中の話なんだけどさ、空飛べたら何したい？",
    a: { text: "未知の世界を旅したい！", type: "N" },
    b: { text: "高所恐怖症だし現実的に考えると無理", type: "S" }
  },
  {
    q: "仕事や課題、どっちを優先？",
    a: { text: "アイデア優先！型にはめたくない", type: "N" },
    b: { text: "まず現実を固めてからでしょ", type: "S" }
  },
  {
    q: "人に何か説明するときは？",
    a: { text: "イメージで伝えちゃうタイプ", type: "N" },
    b: { text: "順を追って具体例で説明するよ", type: "S" }
  },

{
  q: "UFOを見たって言ってる友達がいたら…",
  a: { text: "マジで!?地球外生命体来てるんじゃね？", type: "N" },
  b: { text: "多分ドローンだよ、それ", type: "S" }
},
{
  q: "自分が異世界転生したらどうなると思う？",
  a: { text: "魔王とか倒してそう。てか俺、最強でしょ", type: "N" },
  b: { text: "普通に村人Bとして静かに暮らしたい", type: "S" }
},

  // T/F
  {
    q: "友達が大失敗した時、なんて言う？",
    a: { text: "次どうするか考えようぜ", type: "T" },
    b: { text: "大丈夫？まずは落ち着こう", type: "F" }
  },
  {
    q: "判断に迷ったときは？",
    a: { text: "論理と正しさで決める", type: "T" },
    b: { text: "気持ちを優先するかな", type: "F" }
  },
  {
    q: "相手が怒ってるとき、どう対応する？",
    a: { text: "冷静に状況整理して説明する", type: "T" },
    b: { text: "まず共感して気持ちを聞く", type: "F" }
  },

{
  q: "失恋した友達が泣いてたら？",
  a: { text: "…で？次の戦略どうする？", type: "T" },
  b: { text: "泣くまで泣け。俺も泣くわ", type: "F" }
},
{
  q: "後輩がめちゃミスしてきたときの対応は？",
  a: { text: "いや、それってそもそも準備不足だよね", type: "T" },
  b: { text: "お疲れ！ミスは誰でもあるって〜", type: "F" }
},

  // J/P
  {
    q: "夏休みの予定ってどうする？",
    a: { text: "旅行計画ばっちり立てるよ", type: "J" },
    b: { text: "行き当たりばったりが楽しいじゃん", type: "P" }
  },
  {
    q: "締切に対しての姿勢は？",
    a: { text: "余裕を持って終わらせたい", type: "J" },
    b: { text: "ギリギリに詰め込むのが燃える！", type: "P" }
  },
  {
    q: "片付けとか整理整頓って…",
    a: { text: "全部ラベル分けして並べる派", type: "J" },
    b: { text: "ひとまず置いとけば？そのうちやるし", type: "P" }
  },

{
  q: "冷蔵庫にプリンが1個。どうする？",
  a: { text: "付箋貼る。『俺の』って", type: "J" },
  b: { text: "先に食べた方が勝ちだろ？", type: "P" }
},
{
  q: "夏休みの宿題っていつやってた？",
  a: { text: "最初の1週間で全部終わらせてた", type: "J" },
  b: { text: "8月31日の深夜に魂燃やしてた", type: "P" }
},
];

let index = 0;
const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuestion() {
  const q = questions[index];
  $('#question').text(q.q);


  // 進行状況の表示
  $('#progress').text(`${index + 1} / ${questions.length} 問目`);

  $('#choiceA').text(q.a.text).off('click');
  $('#choiceB').text(q.b.text).off('click');

  $('#choiceA').on('click', function () {
    highlightButton($(this));
    answer(q.a.type);
  });

  $('#choiceB').on('click', function () {
    highlightButton($(this));
    answer(q.b.type);
  });
}

function highlightButton($btn) {
  $btn.css('background-color', '#d81b60'); // 押された時の色
  setTimeout(() => {
    $btn.css('background-color', '#f48fb1'); // 元に戻す
  }, 150);
}

function answer(type) {
  scores[type]++;
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    const type = calculateMbtiType();
showResult(type);
  }
}



function calculateMbtiType() {
  return [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P"
  ].join("");
}


const mbtiResults = [
  {
    type: "ISTJ",
    traits: "責任感が強く、秩序を重んじる",
    strengthsWeaknesses: "長所：信頼性、実直さ / 短所：柔軟性に欠ける",
    common: "ルールや手順に厳格",
    rarity: "約11.6%"
  },
  {
    type: "ISFJ",
    traits: "思いやりがあり、献身的",
    strengthsWeaknesses: "長所：忠誠心、協調性 / 短所：自己主張が苦手",
    common: "他人の世話を焼きすぎる",
    rarity: "約13.8%"
  },
  {
    type: "INFJ",
    traits: "理想主義で直感的",
    strengthsWeaknesses: "長所：洞察力、共感力 / 短所：過敏、自己犠牲的",
    common: "他人の感情に敏感すぎる",
    rarity: "約1.5%"
  },
  {
    type: "INTJ",
    traits: "独立心が強く、戦略的",
    strengthsWeaknesses: "長所：分析力、計画性 / 短所：感情表現が苦手",
    common: "完璧主義で他人に厳しい",
    rarity: "約2.1%"
  },
  {
    type: "ISTP",
    traits: "実践的で柔軟性がある",
    strengthsWeaknesses: "長所：問題解決能力、冷静さ / 短所：感情表現が乏しい",
    common: "危機的状況で冷静に対処",
    rarity: "約5.4%"
  },
  {
    type: "ISFP",
    traits: "芸術的で柔和",
    strengthsWeaknesses: "長所：柔軟性、感受性 / 短所：優柔不断、内向的",
    common: "自分の世界に没頭しがち",
    rarity: "約8.8%"
  },
  {
    type: "INFP",
    traits: "理想主義で内省的",
    strengthsWeaknesses: "長所：創造性、共感力 / 短所：現実逃避、自己批判的",
    common: "小さなことに深く悩む",
    rarity: "約4.4%"
  },
  {
    type: "INTP",
    traits: "論理的で探究心が強い",
    strengthsWeaknesses: "長所：分析力、独創性 / 短所：社交性に欠ける",
    common: "理論に没頭しすぎる",
    rarity: "約3.3%"
  },
  {
    type: "ESTP",
    traits: "行動的で社交的",
    strengthsWeaknesses: "長所：適応力、エネルギッシュ / 短所：衝動的、計画性に欠ける",
    common: "スリルを求めがち",
    rarity: "約4.3%"
  },
  {
    type: "ESFP",
    traits: "陽気で人懐っこい",
    strengthsWeaknesses: "長所：社交性、楽観性 / 短所：注意散漫、深く考えない",
    common: "パーティーの中心人物",
    rarity: "約8.5%"
  },
  {
    type: "ENFP",
    traits: "熱意があり、創造的",
    strengthsWeaknesses: "長所：情熱的、柔軟性 / 短所：集中力に欠ける",
    common: "新しいアイデアを次々と出す",
    rarity: "約8.1%"
  },
  {
    type: "ENTP",
    traits: "機知に富み、論争好き",
    strengthsWeaknesses: "長所：創造性、柔軟性 / 短所：議論好きすぎる",
    common: "常に新しい挑戦を求める",
    rarity: "約3.2%"
  },
  {
    type: "ESTJ",
    traits: "組織的で現実的",
    strengthsWeaknesses: "長所：リーダーシップ、効率性 / 短所：頑固、柔軟性に欠ける",
    common: "規則や伝統を重視",
    rarity: "約8.7%"
  },
  {
    type: "ESFJ",
    traits: "社交的で協調性がある",
    strengthsWeaknesses: "長所：思いやり、組織力 / 短所：他人の評価を気にしすぎる",
    common: "他人の世話を焼きすぎる",
    rarity: "約12%"
  },
  {
    type: "ENFJ",
    traits: "カリスマ的で思いやりがある",
    strengthsWeaknesses: "長所：リーダーシップ、共感力 / 短所：自己犠牲的、過剰な期待",
    common: "他人の問題を自分のことのように感じる",
    rarity: "約2.5%"
  },
  {
    type: "ENTJ",
    traits: "自信に満ち、決断力がある",
    strengthsWeaknesses: "長所：戦略的思考、リーダーシップ / 短所：冷淡、感情表現が乏しい",
    common: "常に目標達成を目指す",
    rarity: "約1.8%"
  }
];



function showResult(resultType) {
  $('#quiz-container').hide();

  const result = mbtiResults.find(r => r.type === resultType);

  $('#result-text').text(`あなたのMBTIは ${result.type} タイプです！`);
  $('#result-image').attr('src', `img/${result.type}.png`);
  $('#mbti-traits').text(result.traits);
  $('#mbti-strengths-weaknesses').text(result.strengthsWeaknesses);
  $('#mbti-common').text(result.common);
  $('#mbti-rarity').text(result.rarity);

const bestMatch = getBestMatch(result.type);  // → ISFP
const worstMatch = getWorstMatch(result.type); // → ISFJ

$('#best-match-type').text(bestMatch);
$('#best-match-image').attr('src', `img/${bestMatch}.png`);

$('#worst-match-type').text(worstMatch);
$('#worst-match-image').attr('src', `img/${worstMatch}.png`);


  $('#result').show();
}


const mbtiTypes = [
  "ISTJ","ISFJ","INFJ","INTJ",
  "ISTP","ISFP","INFP","INTP",
  "ESTP","ESFP","ENFP","ENTP",
  "ESTJ","ESFJ","ENFJ","ENTJ"
];



// 1文字反転関数
function invertLetter(letter) {
  const map = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' };
  return map[letter] || letter;
}

// 最悪のタイプ（4文字すべて反転）
function getWorstMatch(type) {
  return type.split('').map(invertLetter).join('');
}

// 最良のタイプ（3文字反転＋最後の文字そのまま → P/Jは同じ方が相性いいという前提）
function getBestMatch(type) {
  return invertLetter(type[0]) + invertLetter(type[1]) + invertLetter(type[2]) + type[3];
}




$(document).ready(() => {
  shuffle(questions); // ←ここで質問をシャッフル
  showQuestion();
});
