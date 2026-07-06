/* ==========================================
   SyncMentors - Application Logic
========================================== */

// --- アプリケーション状態 ---
const state = {
  user: {
    name: "ハギぺにちゃん",
    level: 14,
    xp: 2800,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=creator1"
  },
  checkin: {
    sleep: null,
    mood: null,
    exercise: false,
    recorded: false
  },
  missions: {
    checkin: { id: "mission-item-checkin", completed: false, xp: 100 },
    read: { id: "mission-item-read", completed: false, xp: 50 },
    mentor: { id: "mission-item-mentor", completed: false, xp: 50 }
  },
  chatHistory: [],
  libraryArticles: [
    {
      id: "1",
      title: "Unreal Engine 5.4におけるグラフィック最適化テクニック",
      category: "tech",
      categoryName: "技術スタック",
      banner: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=600&auto=format&fit=crop",
      summary: "最新のUnreal EngineにおけるNaniteやLumenのメモリ消費を抑え、安定したフレームレートを維持するための設定と検証方法を徹底解説します。",
      content: `
        <div class="modal-article">
          <span class="trend-tag tech">技術スタック</span>
          <h2>Unreal Engine 5.4におけるグラフィック最適化テクニック</h2>
          <div class="modal-article-banner" style="background-image: url('https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=600&auto=format&fit=crop');"></div>
          <div class="modal-article-text">
            <p>Unreal Engine 5.4では、レンダリングエンジンのさらなる最適化が進められました。しかし、高品質なLumen反射やNaniteジオメトリを多用すると、依然としてターゲット環境（特に家庭用ゲーム機やミドルエンドPC）でのパフォーマンス低下を招きます。</p>
            <br>
            <h3>1. Naniteのオーバードローとパフォーマンス検証</h3>
            <p>Naniteは基本的に非常に高速ですが、極端に微細なポリゴンが密集するエリアでは、ピクセルあたりのオーバードローが発生しGPU負荷が増大します。ビューポート表示モードを「Naniteの視覚化 > オーバーダイナミクス（Overdraw）」に切り替え、赤く光る過密エリアをデシメートまたはリダクションしてください。</p>
            <br>
            <h3>2. Lumenの設定チューニング</h3>
            <p>ポストプロセスボリュームにおいて、「Lumenシーンのディテール（Lumen Scene Detail）」をデフォルトの1.0から0.5〜0.8に下げることで、間接照明のクオリティを維持しつつ、光線レイキャストのコストを劇的に抑えられます。</p>
            <br>
            <p>※本コラムは、派遣先でのプロジェクトや自主制作ポートフォリオの動作最適化にぜひお役立てください！</p>
          </div>
        </div>
      `
    },
    {
      id: "2",
      title: "長時間のデスクワークを乗り切る！肩こり解消ストレッチ",
      category: "health",
      categoryName: "健康経営",
      banner: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
      summary: "PCの前で長時間作業をする開発者向けに、座ったままで簡単に行える首・肩周りのストレッチ方法を紹介。疲れを溜め込まない習慣を作りましょう。",
      content: `
        <div class="modal-article">
          <span class="trend-tag health">健康経営</span>
          <h2>長時間のデスクワークを乗り切る！肩こり解消ストレッチ</h2>
          <div class="modal-article-banner" style="background-image: url('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop');"></div>
          <div class="modal-article-text">
            <p>ゲーム開発は、モデリング、コーディング、デバッグなど、1日10時間以上座りっぱなしになることも珍しくありません。血流の悪化は、慢性的な頭痛やモチベーションの低下を招きます。ここではオフィスや自宅で3分でできるストレッチを紹介します。</p>
            <br>
            <h3>肩甲骨はがしストレッチ（所要時間：1分）</h3>
            <p>1. 両手を肩の上に置き、肘で大きな円を描くようにゆっくりと後ろへ回します。<br>
            2. 肩甲骨が中央に寄るのを意識しながら、5回大きく回しましょう。<br>
            3. 同様に、前回しも5回行います。</p>
            <br>
            <h3>胸の大胸筋ストレッチ（所要時間：1分）</h3>
            <p>椅子に深く座り、背中の後ろで両手を組みます。そのまま胸を大きく張りながら、組んだ両手を斜め後ろ下に引っ張るように伸ばします。深呼吸を3回繰り返しましょう。これにより、巻き肩を解消できます。</p>
            <br>
            <p>こまめなストレッチと1時間に1回の水分補給が、長期的なパフォーマンス維持への第一歩です！</p>
          </div>
        </div>
      `
    },
    {
      id: "3",
      title: "ゲーム業界での市場価値を高める！ポートフォリオ設計術",
      category: "career",
      categoryName: "キャリア・転職",
      banner: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      summary: "派遣から直接雇用、または大手スタジオへのステップアップを目指す際に、採用担当者の目を引くポートフォリオ構成と効果的な実績の見せ方を伝授します。",
      content: `
        <div class="modal-article">
          <span class="trend-tag career">キャリア・転職</span>
          <h2>ゲーム業界での市場価値を高める！ポートフォリオ設計術</h2>
          <div class="modal-article-banner" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop');"></div>
          <div class="modal-article-text">
            <p>ゲーム開発会社の採用担当者がポートフォリオを見る時間は、1次審査ではわずか数分と言われています。その中で「この人に任せたい」と思わせるための設計が市場価値を左右します。</p>
            <br>
            <h3>1. 「最も自信のある作品」を1番上に置く</h3>
            <p>時系列順ではなく、最高クオリティの作品を最初に配置してください。ファーストインプレッションで全てが決まります。</p>
            <br>
            <h3>2. 制作プロセスと課題解決を言語化する</h3>
            <p>完成品画像だけでなく、「どのような課題があり（例：ポリゴン数を削減しつつ質感を維持する）、どのような工夫で解決したか」というプロセスを箇条書きで記載しましょう。AIツールをどう活用したか、などもアピールポイントになります。</p>
            <br>
            <p>当アプリの「ゲーム広場」で仲間からフィードバックをもらい、ブラッシュアップしていきましょう！</p>
          </div>
        </div>
      `
    },
    {
      id: "4",
      title: "睡眠の質を高めるための、デジタルデトックスのすすめ",
      category: "health",
      categoryName: "健康経営",
      banner: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      summary: "就寝前のスマートフォンの利用が脳に与える影響と、深い睡眠を確保するための就寝1時間前のルーティン作成方法について解説します。",
      content: `
        <div class="modal-article">
          <span class="trend-tag health">健康経営</span>
          <h2>睡眠の質を高めるための、デジタルデトックスのすすめ</h2>
          <div class="modal-article-banner" style="background-image: url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop');"></div>
          <div class="modal-article-text">
            <p>画面のブルーライトは、睡眠ホルモン「メラトニン」の分泌を抑制し、脳を昼間と同じ覚醒状態にしてしまいます。翌日の開発パフォーマンス低下を防ぐための睡眠対策です。</p>
            <br>
            <h3>就寝1時間前からのスマート消灯</h3>
            <p>就寝の60分前にはPCやスマートフォンの画面を見るのをやめ、部屋の照明を少し落とすか、暖色系のライトに切り替えましょう。読書や軽いストレッチを行うと、副交感神経が優位になり入眠がスムーズになります。</p>
            <br>
            <h3>朝一番の太陽光</h3>
            <p>朝起きたらすぐにカーテンを開けて太陽の光を浴びましょう。これによって体内時計がリセットされ、夜の適切な時間に自然な眠気が訪れるようになります。</p>
          </div>
        </div>
      `
    }
  ]
};

// --- DOM 要素の取得 ---
document.addEventListener("DOMContentLoaded", () => {
  // アイコン描画
  lucide.createIcons();

  const modeToggle = document.getElementById("mode-toggle");
  const labelUser = document.getElementById("label-user");
  const labelAdmin = document.getElementById("label-admin");
  const navUser = document.getElementById("nav-user");
  const navAdmin = document.getElementById("nav-admin");
  const headerProfile = document.getElementById("header-profile");
  const sidebarHealthWidget = document.getElementById("sidebar-health-widget");
  const sections = document.querySelectorAll(".content-section");
  const navItems = document.querySelectorAll(".nav-item");

  // --- 1. ユーザー / 管理者 表示モード切り替え ---
  modeToggle.addEventListener("change", (e) => {
    const isAdmin = e.target.checked;
    
    if (isAdmin) {
      labelUser.classList.remove("active");
      labelAdmin.classList.add("active");
      
      navUser.classList.add("hidden");
      navAdmin.classList.remove("hidden");
      
      headerProfile.classList.add("hidden");
      sidebarHealthWidget.classList.add("hidden");
      
      // 管理者ダッシュボードへ自動遷移
      switchSection("admin-dashboard");
      // 管理者メニューのアクティブ状態を設定
      setActiveNavItem("nav-admin-dashboard");
    } else {
      labelUser.classList.add("active");
      labelAdmin.classList.remove("active");
      
      navUser.classList.remove("hidden");
      navAdmin.classList.add("hidden");
      
      headerProfile.classList.remove("hidden");
      sidebarHealthWidget.classList.remove("hidden");
      
      // 一般ダッシュボードへ自動遷移
      switchSection("dashboard");
      // 一般メニューのアクティブ状態を設定
      setActiveNavItem("nav-dashboard");
    }
  });

  // --- 2. ナビゲーションタブ切り替え ---
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = item.getAttribute("data-target");
      switchSection(target);
      
      // アクティブなナビアイテムを切り替え
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
    });
  });

  function switchSection(targetId) {
    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  function setActiveNavItem(id) {
    navItems.forEach(item => {
      if (item.id === id) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // --- 3. デイリーチェックイン処理 ---
  const sleepInput = document.getElementById("checkin-sleep");
  const sleepValueText = document.getElementById("sleep-value");
  const moodButtons = document.querySelectorAll(".mood-btn");
  const checkinForm = document.getElementById("checkin-form");
  const miniSleep = document.getElementById("mini-sleep");
  const miniMood = document.getElementById("mini-mood");

  // 睡眠スライダーのリアルタイム表示
  sleepInput.addEventListener("input", (e) => {
    sleepValueText.textContent = e.target.value;
  });

  // 気分ボタンの排他選択
  moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      moodButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.checkin.mood = btn.getAttribute("data-mood");
    });
  });

  // チェックインの送信
  checkinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.checkin.sleep = sleepInput.value;
    state.checkin.exercise = document.getElementById("checkin-exercise").checked;
    state.checkin.recorded = true;

    if (!state.checkin.mood) {
      alert("今日の気分・コンディションを選択してください！");
      return;
    }

    // ウィジェット更新
    miniSleep.textContent = `${state.checkin.sleep}h`;
    let moodEmoji = "😊";
    if (state.checkin.mood === "normal") moodEmoji = "😐";
    if (state.checkin.mood === "tired") moodEmoji = "🥱";
    if (state.checkin.mood === "stressed") moodEmoji = "😣";
    miniMood.textContent = moodEmoji;

    // ミッション達成
    completeMission("checkin");
    alert("本日の健康チェックインを記録しました！ミッション達成（+100 EXP）");
  });

  // --- 4. デイリーミッション管理 ---
  function completeMission(missionKey) {
    if (state.missions[missionKey] && !state.missions[missionKey].completed) {
      state.missions[missionKey].completed = true;
      const element = document.getElementById(state.missions[missionKey].id);
      if (element) {
        element.classList.add("completed");
        // アイコンを完了マークにする
        const icon = element.querySelector(".mission-icon");
        if (icon) {
          icon.setAttribute("data-lucide", "check-circle");
          lucide.createIcons();
        }
      }
      
      // EXPを加算
      state.user.xp += state.missions[missionKey].xp;
      updateMissionProgress();
      updateHeaderProfile();
    }
  }

  function updateMissionProgress() {
    const total = Object.keys(state.missions).length;
    const completedCount = Object.values(state.missions).filter(m => m.completed).length;
    const percent = Math.round((completedCount / total) * 100);
    
    const progressFill = document.getElementById("mission-progress");
    const progressPercent = document.getElementById("mission-percent");
    
    if (progressFill && progressPercent) {
      progressFill.style.width = `${percent}%`;
      progressPercent.textContent = `${percent}%`;
    }

    // 管理画面のチェックイン率を更新（モックアップ用インタラクション）
    const adminCheckinRate = document.getElementById("admin-checkin-rate");
    if (adminCheckinRate) {
      // ユーザーがチェックインしたら、全体の数値が少し上がる演出
      adminCheckinRate.textContent = completedCount > 0 ? "79.8%" : "78.5%";
    }
  }

  function updateHeaderProfile() {
    // 3000 EXPでレベルアップするダミーロジック
    if (state.user.xp >= 3000 && state.user.level === 14) {
      state.user.level = 15;
      const levelEl = document.querySelector(".profile-level");
      if (levelEl) levelEl.textContent = `Lv.${state.user.level} クリエイター`;
      alert("🎉 レベルアップしました！ Lv.15 になりました！");
    }
  }

  // --- 5. AIメンタリングチャットロジック ---
  const chatMessagesContainer = document.getElementById("chat-messages-container");
  const chatInput = document.getElementById("chat-input");
  const btnChatSend = document.getElementById("btn-chat-send");
  const suggestionBtns = document.querySelectorAll(".suggestion-btn");

  btnChatSend.addEventListener("click", () => {
    sendUserMessage();
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendUserMessage();
    }
  });

  // プリセット提案ボタンクリック
  suggestionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const promptText = btn.getAttribute("data-prompt");
      chatInput.value = promptText;
      sendUserMessage();
    });
  });

  function sendUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // ユーザーメッセージ追加
    addMessageToChat("user", text);
    chatInput.value = "";

    // ミッション達成
    completeMission("mentor");

    // AIの疑似タイピング開始
    showAiTypingIndicator();

    // 1.2秒後に応答
    setTimeout(() => {
      removeAiTypingIndicator();
      const aiReply = getAiResponse(text);
      addMessageToChat("ai", aiReply);
    }, 1200);
  }

  function addMessageToChat(sender, text) {
    const timeStr = new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
    const messageEl = document.createElement("div");
    messageEl.className = `chat-message ${sender}`;

    const avatarUrl = sender === "user" ? state.user.avatar : "https://api.dicebear.com/7.x/bottts/svg?seed=mentor-ai";

    messageEl.innerHTML = `
      <div class="message-avatar">
        <img src="${avatarUrl}" alt="${sender}">
      </div>
      <div class="message-content">
        <p>${text}</p>
        <span class="message-time">${timeStr}</span>
      </div>
    `;

    chatMessagesContainer.appendChild(messageEl);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  function showAiTypingIndicator() {
    const indicatorEl = document.createElement("div");
    indicatorEl.className = "chat-message ai typing-indicator";
    indicatorEl.id = "chat-typing-indicator";
    indicatorEl.innerHTML = `
      <div class="message-avatar">
        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=mentor-ai" alt="AI">
      </div>
      <div class="message-content">
        <p>シグマが考え中...</p>
      </div>
    `;
    chatMessagesContainer.appendChild(indicatorEl);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  function removeAiTypingIndicator() {
    const indicator = document.getElementById("chat-typing-indicator");
    if (indicator) {
      indicator.remove();
    }
  }

  function getAiResponse(inputText) {
    const lowerText = inputText.toLowerCase();

    // 体調・健康・腰痛
    if (lowerText.includes("腰痛") || lowerText.includes("痛") || lowerText.includes("体調") || lowerText.includes("疲れ") || lowerText.includes("しんどい")) {
      return "腰痛や体調不良、本当にお辛いですよね。ゲーム開発やデスクワークでは、どうしても同じ姿勢が続いて血流が滞りやすくなります。まずは30分〜1時間に一度、肩甲骨を後ろに引くストレッチを試してみてください。また、学習ライブラリにある『肩こり解消ストレッチ』も役立つ情報が満載ですので、よろしければ読んでみてくださいね。今日のご自身の体調チェックインでも疲労が多めな場合は、少し休む時間を意識して確保してください。";
    }
    // キャリア・スキル・3D・モデラー・Unity・Unreal
    if (lowerText.includes("スキル") || lowerText.includes("キャリア") || lowerText.includes("モデラー") || lowerText.includes("unity") || lowerText.includes("unreal") || lowerText.includes("ue") || lowerText.includes("学習")) {
      return "キャリアについてのご相談ですね。素晴らしい成長意欲です！現在ゲーム業界では、ゲームエンジン（Unity/UE）に加えて、Blender等の3Dツール、および『生成AIの活用力』があるクリエイターの市場価値が急上昇しています。まずは当アプリの『スキル・ポートフォリオ』画面で現在のスキルバランスを確認し、気になる技術コラムを学習ライブラリで呼んでみましょう。また、ご自身で作ったミニゲームやアセットがあれば、『ゲーム広場』に投稿して他の開発者からフィードバックをもらうのも非常におすすめですよ！";
    }
    // コミュニケーション・人間関係・職場・派遣先
    if (lowerText.includes("コミュニ") || lowerText.includes("人間関係") || lowerText.includes("職場") || lowerText.includes("派遣先") || lowerText.includes("相談")) {
      return "派遣先での人間関係やコミュニケーションは、環境が変わることもあって気苦労が多い部分ですよね。コツとしては、まず『技術的な進捗報告』を朝会などで小さく高頻度に行うことです。業務上の進捗が見えることで信頼関係が生まれ、雑談や困りごとの相談もしやすくなりますよ。一人で抱え込みすぎず、営業担当者にも気軽に現状を共有してくださいね。必要であれば、私から営業担当（管理者画面）側に、間接的に状況やケアの必要性を匿名シグナルとして共有し、サポートに入ってもらうことも可能です。";
    }

    // 汎用回答
    return "メッセージありがとうございます。ハギぺにちゃんがクリエイティブな仕事と、健康的な暮らしを両立できるよう、私シグマが全力で伴走します。何か悩みがあれば、健康チェックインの記録なども含め、どんな些細なことでもお話ししてくださいね。";
  }

  // --- 6. 学習ライブラリのコラムフィルタ・詳細表示 ---
  const filterButtons = document.querySelectorAll(".filter-btn");
  const articleCards = document.querySelectorAll(".library-article-card");
  const modalContainer = document.getElementById("modal-container");
  const modalBodyContent = document.getElementById("modal-body-content");
  const btnModalClose = document.getElementById("btn-modal-close");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const category = btn.getAttribute("data-category");
      articleCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 記事を読むイベント
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-read-article")) {
      const articleId = e.target.getAttribute("data-article-id");
      const article = state.libraryArticles.find(a => a.id === articleId);
      
      if (article) {
        openModal(article.content);
        // ミッション「学習ライブラリで記事を1本読む」を完了
        completeMission("read");
      }
    }
  });

  // モーダル制御
  btnModalClose.addEventListener("click", closeModal);
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) closeModal();
  });

  function openModal(htmlContent) {
    modalBodyContent.innerHTML = htmlContent;
    modalContainer.classList.add("active");
  }

  function closeModal() {
    modalContainer.classList.remove("active");
  }

  // --- 7. コピー機能（リファラルリンク） ---
  const btnCopyReferral = document.getElementById("btn-copy-referral");
  const referralLinkInput = document.getElementById("referral-link-input");

  if (btnCopyReferral) {
    btnCopyReferral.addEventListener("click", () => {
      referralLinkInput.select();
      referralLinkInput.setSelectionRange(0, 99999); // モバイル対応
      
      // コピー実行
      navigator.clipboard.writeText(referralLinkInput.value).then(() => {
        btnCopyReferral.innerHTML = `<i data-lucide="check"></i> コピー完了!`;
        lucide.createIcons();
        
        setTimeout(() => {
          btnCopyReferral.innerHTML = `<i data-lucide="copy"></i> コピー`;
          lucide.createIcons();
        }, 2000);
      });
    });
  }

  // --- 8. ゲーム広場：ゲームプレイ & 新規投稿のアップロードモック ---
  const btnOpenUploadModal = document.getElementById("btn-open-upload-modal");
  const plazaPostsContainer = document.getElementById("plaza-posts-container");

  // ゲームプレイ開始モック
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-play-game")) {
      const playHtml = `
        <div style="text-align: center; padding: 2rem;">
          <h2 style="margin-bottom: 1rem;">🎮 CyberPulse を読み込み中...</h2>
          <div style="width: 100%; height: 250px; background: #000; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1.5px solid var(--neon-blue); box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);">
            <div style="color: var(--neon-blue); text-align: center;">
              <i data-lucide="loader-2" class="animate-spin" style="width: 48px; height: 48px; margin-bottom: 0.5rem; display: inline-block;"></i>
              <p style="font-weight: 700; font-size: 0.9rem;">WebGLアセットを最適化しています</p>
            </div>
          </div>
          <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="document.getElementById('btn-modal-close').click()">閉じる</button>
        </div>
      `;
      openModal(playHtml);
      lucide.createIcons();
    }
  });

  // いいね機能の切り替え
  document.addEventListener("click", (e) => {
    const likeBtn = e.target.closest(".action-btn-like");
    if (likeBtn) {
      likeBtn.classList.toggle("liked");
      const countSpan = likeBtn.querySelector(".like-count");
      let count = parseInt(countSpan.textContent);
      
      if (likeBtn.classList.contains("liked")) {
        countSpan.textContent = count + 1;
        likeBtn.querySelector("i").setAttribute("data-lucide", "heart");
      } else {
        countSpan.textContent = count - 1;
        likeBtn.querySelector("i").setAttribute("data-lucide", "thumbs-up");
      }
      lucide.createIcons();
    }
  });

  // 作品投稿モーダル
  if (btnOpenUploadModal) {
    btnOpenUploadModal.addEventListener("click", () => {
      const uploadFormHtml = `
        <div class="modal-upload-form">
          <h3>🎮 作品・ミニゲームを投稿する</h3>
          <div class="upload-drag-area">
            <i data-lucide="upload-cloud"></i>
            <p>ゲームのWebGLビルド(zip) または 作品画像をここにドラッグ＆ドロップ</p>
            <span style="font-size: 0.7rem; color: var(--text-muted);">対応ファイル: .zip, .png, .jpg (最大 50MB)</span>
          </div>
          
          <div class="input-group">
            <label>タイトル</label>
            <input type="text" id="upload-title" placeholder="例: 生成AIで自動生成するパズルゲーム" class="text-input-styled">
          </div>
          
          <div class="input-group">
            <label>紹介文・アピールポイント</label>
            <textarea id="upload-desc" placeholder="どのような技術を使い、どういう工夫を施したかを記入してください。" class="text-input-styled" style="height: 100px; resize: none;"></textarea>
          </div>

          <div class="input-group">
            <label>タグ (スペース区切り)</label>
            <input type="text" id="upload-tags" placeholder="例: Unity WebGL AI" class="text-input-styled">
          </div>

          <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem;">
            <button class="btn btn-outline" onclick="document.getElementById('btn-modal-close').click()">キャンセル</button>
            <button class="btn btn-primary" id="btn-upload-submit">投稿を公開する</button>
          </div>
        </div>
      `;
      openModal(uploadFormHtml);
      lucide.createIcons();

      // 新規投稿処理の紐付け
      const btnUploadSubmit = document.getElementById("btn-upload-submit");
      btnUploadSubmit.addEventListener("click", () => {
        const title = document.getElementById("upload-title").value.trim();
        const desc = document.getElementById("upload-desc").value.trim();
        const tagsInput = document.getElementById("upload-tags").value.trim();

        if (!title || !desc) {
          alert("タイトルと紹介文は必須入力です！");
          return;
        }

        // タグの配列変換
        const tags = tagsInput ? tagsInput.split(/\s+/).map(t => `#${t}`) : ["#NewProject"];
        
        // 投稿の動的追加
        const newPost = document.createElement("div");
        newPost.className = "glass-card plaza-card";
        newPost.innerHTML = `
          <div class="plaza-media-preview" style="background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=350&auto=format&fit=crop');">
            <span class="badge badge-game">🎮 ミニゲーム</span>
          </div>
          <div class="plaza-card-body">
            <div class="creator-info">
              <img src="${state.user.avatar}" alt="Avatar" class="avatar-sm">
              <div>
                <span class="creator-name">${state.user.name} (${state.user.level})</span>
                <span class="post-time">たった今</span>
              </div>
            </div>
            <h3 class="post-title">${title}</h3>
            <p class="post-desc">${desc}</p>
            <div class="post-tags">
              ${tags.map(t => `<span>${t}</span>`).join("")}
            </div>
            <div class="post-actions">
              <button class="action-btn-like">
                <i data-lucide="thumbs-up"></i> <span class="like-count">0</span>
              </button>
              <button class="action-btn-comment">
                <i data-lucide="message-square"></i> <span>0 コメント</span>
              </button>
              <button class="btn btn-sm btn-primary">プレイする</button>
            </div>
          </div>
        `;

        // コンテナの最上部に新規追加
        plazaPostsContainer.insertBefore(newPost, plazaPostsContainer.firstChild);
        lucide.createIcons();
        closeModal();
        alert("🎉 作品をゲーム広場へ公開しました！");
      });
    });
  }

});
