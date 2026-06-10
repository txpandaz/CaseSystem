const itemsData = [
    { id: "i1", text: "ปูนไว้ในการครอบครอง", fine: 3000, time: 5, note: "ต่อ 1 ชิ้น" },
    { id: "i2", text: "สายไฟไว้ในการครอบครอง", fine: 3000, time: 5, note: "ต่อ 1 ชิ้น" },
    { id: "i3", text: "เงินผิดกฏหมาย", fine: 0, time: 10, isRedMoney: true, note: "ค่าปรับ X10 จากยอดเงินแดง / พบเงินแดงจำคุก 10 นาทีเหมา" },
    { id: "i4", text: "ใบกระท่อม", fine: 100, time: 0, note: "ต่อ 1 ใบ / ยึดไม่จำคุก" },
    { id: "i5", text: "แพ็คกระท่อม", fine: 3000, time: 10, note: "ต่อ 1 แพ็ค" }
];

const normalData = [
    { id: "n1", text: "หลบหนีการจับกุม", fine: 3000, time: 15, note: "คดีทั่วไป" },
    { id: "n2", text: "พื้นที่สุ่มเสี่ยง", fine: 3000, time: 5, note: "คดีทั่วไป" },
    { id: "n3", text: "ใส่หน้ากากปิดบังใบหน้า", fine: 10000, time: 10, note: "หากเตือนแล้ว 1 ครั้ง สามารถจับกุมและค้นตัวได้เลย" },
    { id: "n4", text: "ไม่ให้ความร่วมมือกับเจ้าหน้าที่", fine: 50000, time: 30, note: "คดีทั่วไป" },
    { id: "n5", text: "แจ้งความเท็จ", fine: 50000, time: 20, note: "คดีทั่วไป" },
    { id: "n6", text: "ถืออาวุธต่อหน้าเจ้าหน้าที่", fine: 25000, time: 15, note: "คดีทั่วไป" },
    { id: "n7", text: "ทำลายหลักฐาน ต่อหน้าเจ้าหน้าที่", fine: 50000, time: 15, note: "คดีทั่วไป" },
    { id: "n8", text: "กระทำความผิดซึ่งหน้า", fine: 20000, time: 15, note: "ใช้กับคดีงานดำเท่านั้น" },
    { id: "n9", text: "ทะเลาะวิวาท", fine: 50000, time: 15, note: "คดีทั่วไป" },
    { id: "n10", text: "ช่วยเหลือผู้กระทำผิดโดยซึ่งหน้า", fine: 30000, time: 30, note: "คดีทั่วไป" }
];

const severeData = [
    { id: "s1", text: "แอบอ้างเป็นหน่วยงานหรือเจ้าหน้าที่", fine: 300000, time: 60, note: "ใส่เครื่องแบบ หรือเสื้อที่มีเครื่องหมายหน่วยงาน" },
    { id: "s2", text: "ดูหมิ่นและข่มขู่หน่วยงาน", fine: 100000, time: 60, note: "ปรับเพิ่มทีละ 100,000 สูงสุด 1,000,000 IC" },
    { id: "s3", text: "หลบหนีหลังการจับกุม", fine: 50000, time: 30, note: "หากใส่กุญแจมือแล้วหนี เจ้าหน้าที่สามารถใช้มาตรการเด็ดขาดได้" },
    { id: "s4", text: "สร้างความวุ่นวาย ก่อกวนเจ้าหน้าที่", fine: 300000, time: 60, note: "ใช้เสียงดังเกินเหตุ, บีบแตร, ก่อกวนความสงบ" },
    { id: "s5", text: "ขโมยยานพาหนะผู้อื่นโดยเจตนา", fine: 100000, time: 30, note: "ผู้เสียหายเรียกค่าเสียหายได้สูงสุด 50,000 IC" },
    { id: "s6", text: "ทำลายทรัพย์สินของหน่วยงาน", fine: 0, time: 60, note: "บั้มรถ/ฮอ ของเจ้าหน้าที่ ค่าปรับ X3" },
    { id: "s7", text: "ทำร้ายร่างกายหน่วยงาน", fine: 500000, time: 60, note: "ข้อหาร้ายแรง" },
    { id: "s8", text: "ก่อเหตุบริเวณพื้นที่สำนักงาน", fine: 0, time: 120, note: "ค่าปรับ X3 / จำคุก 2 ชั่วโมง (คำนวณสุทธิแล้ว)" },
    { id: "s9", text: "ขัดขวางการทำงานของเจ้าหน้าที่", fine: 50000, time: 30, note: "ถือเป็นการช่วยเหลือผู้กระทำผิดและสมรู้ร่วมคิด" },
    { id: "s10", text: "ขโมยรถหน่วยงาน", fine: 500000, time: 120, note: "ต้องมีสตอรี่ก่อนเท่านั้น ไม่เช่นนั้นโดนโทษประเทศ" },
    { id: "s11", text: "โดนประกาศหมายเรียก / Blacklist", fine: 300000, time: 90, note: "ข้อหาร้ายแรง" },
    { id: "s12", text: "ฝ่าฝืนวงเคอร์ฟิว", fine: 50000, time: 15, note: "ข้อหาร้ายแรง" },
    { id: "s13", text: "หลีกเลี่ยงหมายเรียกของเจ้าหน้าที่", fine: 500000, time: 0, note: "จำคุก X2 สุทธิเป็น 180 นาทีแล้ว" },
    { id: "s14", text: "ทำร้ายร่างกายประชาชน", fine: 50000, time: 30, note: "ผู้เสียหายเรียกค่าเสียหายสูงสุด 100,000 IC" },
    { id: "s15", text: "แหกคุกทุกกรณี", fine: 100000, time: 30, note: "หากใช้บั๊กโดนโทษกฎประเทศ" },
    { id: "s16", text: "บุกรุกสถานที่ราชการ [คุก]", fine: 300000, time: 30, note: "ข้อหาร้ายแรง" },
    { id: "s17", text: "อุ้มอำพรางคดีโดยไม่ผ่านสภา", fine: 100000, time: 30, note: "เจ้าหน้าที่ใช้มาตรการพิเศษได้ทันที" }
];

const modifierData = [
    { id: "m_escape_water", text: "หลบหนีลงน้ำ", fineText: "ปรับ X2", timeText: "คุก +30 นาที", note: "กรณีขับขี่หรือว่ายน้ำหลบหนีลงพื้นที่ทางน้ำ" },
    { id: "m_escape_mountain", text: "หลบหนีขึ้นเขา", fineText: "ปรับ X2", timeText: "คุก +30 นาที", note: "กรณีจงใจใช้ยานพาหนะปีนป่ายพื้นที่เขาสูงชัน" },
    { id: "m_escape_city", text: "หลบหนีออกนอกเมือง", fineText: "ปรับ X2", timeText: "คุก +30 นาที", note: "กรณีขับขี่รถเตลิดออกนอกเขตพื้นที่โซนเมืองปกติ" },
    { id: "m_accomplice", text: "สมรู้ร่วมคิด", fineText: "ลดปรับ 50%", timeText: "ลดคุก 50%", note: "คิดเป็นครึ่งหนึ่งของโทษคดีหลัก" },
    { id: "m_preRe", text: "ทำงานดำก่อนประกาศรีประเทศ 15 นาที", fineText: "ปรับ X10", timeText: "ตามเดิม", note: "โทษทวีคูณช่วงใกล้รีเมือง" },
    { id: "m_onFoot", text: "เดินเท้าทำงานผิดกฏหมายทุกชนิด", fineText: "ปรับ X5", timeText: "คุก X5", note: "ทวีคูณ X5 ทั้งใบเสร็จ" }
];

const selectedOfficers = new Set();

const webhookUrl = "https://discord.com/api/webhooks/1513913594700628089/0b4pWUSNFBwnhrez5pMMoKdysCakVthPXEq-wjuTZYwpOoWze-O74_s8GSzvrXNO68JY"; // ใส่ URL ของคุณที่นี่

let itemQtys = {};
let checkStates = {};
let globalBail = false;
let currentTotalMoney = 0;
let pinnedStates = JSON.parse(localStorage.getItem('pinnedCases')) || {};

let officersListGlobal = [];
let currentCaseDetails = [];

let currentNormalTime = 0;
let currentSevereTime = 0;
let currentBailMoney = 0;

function togglePin(id) {
    pinnedStates[id] = !pinnedStates[id];
    localStorage.setItem('pinnedCases', JSON.stringify(pinnedStates));
    renderAll();
}

function renderAll() {
    renderItemsTable();
    renderCheckboxes('section-normal', normalData);
    renderCheckboxes('section-severe', severeData);
    renderModifiers();
    renderFavorites();
}

function renderFavorites() {
    const container = document.getElementById("section-favorite");
    container.innerHTML = "";

    const favorites = [
        ...itemsData,
        ...normalData,
        ...severeData,
        ...modifierData
    ].filter(x => pinnedStates[x.id]);

    if (favorites.length === 0) {
        container.innerHTML = `
            <div style="padding:20px;text-align:center;color:#999;">
                ⭐ ยังไม่มีรายการโปรด
            </div>`;
        return;
    }

    favorites.forEach(law => {

        let chooseHtml = "";

        // ของมีจำนวน (items)
        if (itemsData.some(x => x.id === law.id)) {
            chooseHtml = `

                <div class="qty-control">

                    <button class="qty-btn minus" onclick="changeItemQty('${law.id}', -1)">
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <input
                        class="qty-input"
                        id="fav-qty-${law.id}"
                        type="number"
                        min="0"
                        value="${itemQtys[law.id] || 0}"
                        oninput="setItemQty('${law.id}', this.value)"
                    />

                    <button class="qty-btn plus" onclick="changeItemQty('${law.id}', 1)">
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>
            `;
        }

        // modifier / checkbox type
        else {
            chooseHtml = `
                <button class="btn-choose ${checkStates[law.id] ? 'selected' : ''}"
                    id="fav-check-${law.id}"
                    onclick="toggleRowCheck('${law.id}')">
                    Choose
                </button>
            `;
        }

        container.innerHTML += `
            <div class="row-item">

                <button class="btn-pin active"
                    onclick="togglePin('${law.id}')">
                    <i class="fa-solid fa-star"></i>
                </button>

                <div class="law-name">
                    ${law.text}
                    <span class="law-note">${law.note || ""}</span>
                </div>

                <div class="text-center">
                    ${law.fineText || (law.fine ?? "-")}
                </div>

                <div class="text-center">
                    ${law.timeText || ((law.time ?? "-") + (law.time != null ? "m" : ""))}
                </div>

                <div class="text-center">
                    ${chooseHtml}
                </div>

            </div>
        `;
    });
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active-content'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active-content');
}

function renderItemsTable() {
    const container = document.getElementById('section-items');
    container.innerHTML = '';
    
    const sortedItems = [...itemsData].sort((a, b) => {
        return (pinnedStates[b.id] === true) - (pinnedStates[a.id] === true);
    });

    sortedItems.forEach(law => {
        const isPinned = pinnedStates[law.id] ? 'active' : '';
        container.innerHTML += `
            <div class="row-item">
                <button class="btn-pin ${isPinned}" onclick="togglePin('${law.id}')"><i class="fa-solid fa-star"></i></button>
                <div class="law-name">${law.text}<span class="law-note">${law.note}</span></div>
                <div class="text-center">${law.fine.toLocaleString()}</div>
                <div class="text-center">${law.time}m</div>
                <div class="text-center">
                    <div class="qty-control">

                        <button class="qty-btn minus" onclick="changeItemQty('${law.id}', -1)">
                            <i class="fa-solid fa-minus"></i>
                        </button>

                        <input
                            class="qty-input"
                            id="qty-${law.id}"
                            type="number"
                            min="0"
                            value="${itemQtys[law.id] || 0}"
                            oninput="setItemQty('${law.id}', this.value)"
                        />

                        <button class="qty-btn plus" onclick="changeItemQty('${law.id}', 1)">
                            <i class="fa-solid fa-plus"></i>
                        </button>

                    </div>
                </div>
            </div>
        `;
    });
}

function renderCheckboxes(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const sortedData = [...data].sort((a, b) => {
        return (pinnedStates[b.id] === true) - (pinnedStates[a.id] === true);
    });

    sortedData.forEach(law => {
        const isPinned = pinnedStates[law.id] ? 'active' : '';
        container.innerHTML += `
            <div class="row-item">
                <button class="btn-pin ${isPinned}" onclick="togglePin('${law.id}')"><i class="fa-solid fa-star"></i></button>
                <div class="law-name">${law.text}<span class="law-note">${law.note}</span></div>
                <div class="text-center">${law.fine.toLocaleString()}</div>
                <div class="text-center">${law.time}m</div>
                <div class="text-center">
                    <button class="btn-choose ${checkStates[law.id] ? 'selected' : ''}" id="btn-check-${law.id}" onclick="toggleRowCheck('${law.id}')">Choose</button>
                </div>
            </div>
        `;
    });
}

function renderModifiers() {
    const container = document.getElementById('section-modifiers');
    container.innerHTML = '';

    const sortedModifiers = [...modifierData].sort((a, b) => {
        return (pinnedStates[b.id] === true) - (pinnedStates[a.id] === true);
    });

    sortedModifiers.forEach(mod => {
        const isPinned = pinnedStates[mod.id] ? 'active' : '';
        container.innerHTML += `
            <div class="row-item">
                <button class="btn-pin ${isPinned}" onclick="togglePin('${mod.id}')"><i class="fa-solid fa-star"></i></button>
                <div class="law-name">
                    <i class="fa-solid fa-gear" style="color: #58a6ff;"></i> ${mod.text}
                    <span class="law-note">${mod.note}</span>
                </div>
                <div class="text-center" style="color: #fcc419; font-weight: bold;">${mod.fineText}</div>
                <div class="text-center" style="color: #ff6b6b; font-weight: bold;">${mod.timeText}</div>
                <div class="text-center">
                    <button class="btn-choose ${checkStates[mod.id] ? 'selected' : ''}" id="btn-check-${mod.id}" onclick="toggleRowCheck('${mod.id}')">Choose</button>
                </div>
            </div>
        `;
    });
}

renderItemsTable();
renderCheckboxes('section-normal', normalData);
renderCheckboxes('section-severe', severeData);
renderModifiers();

function changeItemQty(id, delta) {
    if (!itemQtys[id]) itemQtys[id] = 0;

    itemQtys[id] += delta;
    if (itemQtys[id] < 0) itemQtys[id] = 0;

    syncQtyUI(id);
    calculate();
}

function setItemQty(id, value) {
    itemQtys[id] = parseInt(value) || 0;
    calculate();
}

function syncQtyUI(id) {
    const val = itemQtys[id] || 0;

    const main = document.querySelector(`#qty-${id}`);
    if (main) main.value = val;

    const fav = document.querySelector(`#fav-qty-${id}`);
    if (fav) fav.value = val;
}

function updateQty(id, value) {

    if (value !== undefined) {
        itemQtys[id] = parseInt(value) || 0;
    } 

    else {
        const el = document.getElementById(`qty-${id}`);
        if (el) {
            itemQtys[id] = parseInt(el.value) || 0;
        }
    }

    calculate();
}

function toggleRowCheck(id) {
    checkStates[id] = !checkStates[id];
    const btn = document.getElementById(`btn-check-${id}`);
    if(checkStates[id]) {
        btn.classList.add('selected');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Choose';
    } else {
        btn.classList.remove('selected');
        btn.innerText = 'Choose';
    }
    calculate();
}

function toggleGlobalBail() {
    globalBail = !globalBail;
    const btn = document.getElementById('global-bail-btn');
    if (globalBail) {
        btn.classList.add('active', 'blue');
        btn.innerHTML = '<i class="fa-solid fa-lock"></i> ขอประกันตัว (เปิดใช้งาน)';
    } else {
        btn.classList.remove('active', 'blue');
        btn.innerHTML = '<i class="fa-solid fa-unlock"></i> ขอประกันตัว (ปิดอยู่)';
    }
    calculate();
}

function calculate() {
    let rawFine = 0;
    let normalTime = 0; 
    let severeTime = 0; 
    let totalBailMoney = 0;
    let caseList = [];
    currentCaseDetails = [];

    itemsData.forEach(law => {
        const q = itemQtys[law.id];
        if(q > 0) {
            let shortText = law.text.replace("ไว้ในการครอบครอง", "").trim();
            if(law.isRedMoney) {
                rawFine += (q * 10); 
                normalTime += law.time; 

                caseList.push(`${shortText} x${q.toLocaleString()}`);

                currentCaseDetails.push({
                    text: `${shortText} x${q.toLocaleString()}`,
                    fine: q * 10,
                    time: law.time
                });
            } else {
                rawFine += (q * law.fine);
                normalTime += (q * law.time);
                const fine = q * law.fine;
                const time = q * law.time;

                caseList.push(`${shortText} x${q}`);

                currentCaseDetails.push({
                    text: `${shortText} x${q}`,
                    fine: fine,
                    time: time
                });
            }
        }
    });

    normalData.forEach(law => {
        if(checkStates[law.id]) {
            rawFine += law.fine;
            normalTime += law.time;
            caseList.push(law.text);

            currentCaseDetails.push({
                text: law.text,
                fine: law.fine,
                time: law.time
            });
        }
    });

    severeData.forEach(law => {
        if(checkStates[law.id]) {
            rawFine += law.fine; 
            if (law.id === 's13') {
                severeTime += 180;
            } else {
                severeTime += law.time;
            }
            caseList.push(law.text);

            let jail = law.id == "s13" ? 180 : law.time;

            currentCaseDetails.push({
                text: law.text,
                fine: law.fine,
                time: jail
            });
        }
    });

    let addedMultiplier = 0; 
    let timeMultiplier = 1;
    let additionalTime = 0;

    if (checkStates['s6']) addedMultiplier += 3; 
    if (checkStates['s8']) addedMultiplier += 3; 

    if (checkStates['m_escape_water']) { 
        addedMultiplier += 2;   
        additionalTime += 30; 
        caseList.push("หลบหนีลงน้ำ");
    }
    if (checkStates['m_escape_mountain']) { 
        addedMultiplier += 2;   
        additionalTime += 30; 
        caseList.push("หลบหนีขึ้นเขา");
    }
    if (checkStates['m_escape_city']) { 
        addedMultiplier += 2;   
        additionalTime += 30; 
        caseList.push("หลบหนีออกนอกเมือง");
    }
    
    if (checkStates['m_preRe']) { 
        addedMultiplier += 10;  
        caseList.push("ทำงานดำก่อนประกาศรีประเทศ");
    }
    if (checkStates['m_onFoot']) { 
        addedMultiplier += 5;   
        timeMultiplier = Math.max(timeMultiplier, 5); 
        caseList.push("เดินเท้าทำงานผิดกฏหมาย");
    }

    let fineMultiplier = (addedMultiplier > 0) ? addedMultiplier : 1;
    let finalFine = rawFine * fineMultiplier;
    
    if (checkStates['m_accomplice']) {
        finalFine *= 0.5;
        normalTime *= 0.5;
        severeTime *= 0.5;
        additionalTime *= 0.5;
        caseList.push("สมรู้ร่วมคิด");
    }

    normalTime = (normalTime * timeMultiplier) + additionalTime;
    severeTime = (severeTime * timeMultiplier);

    if (globalBail) {
        totalBailMoney = normalTime * 300; 
        finalTime = severeTime; 
        caseList.push("ประกันตัว");
    } else {
        finalTime = normalTime + severeTime;
        totalBailMoney = 0;
    }

    let totalMoneyToPay = finalFine + totalBailMoney;
    currentTotalMoney = Math.round(totalMoneyToPay);

    document.getElementById('res-fine').innerText = Math.round(finalFine).toLocaleString();
    document.getElementById('res-bail').innerText = Math.round(totalBailMoney).toLocaleString();
    document.getElementById('res-time').innerText = Math.round(finalTime).toLocaleString();
    document.getElementById('res-total-money').innerText = Math.round(totalMoneyToPay).toLocaleString();
    
    document.getElementById('ui-fine-multiplier').innerText = fineMultiplier;
    document.getElementById('ui-time-multiplier').innerText = timeMultiplier;
    
    const listContainer = document.getElementById('case-log-list');
    if(caseList.length > 0) {
        listContainer.innerHTML = caseList.map(item => `
            <div class="bill-row">
                <div class="bill-row-name">- ${item}</div>
                <div class="bill-row-val">Active</div>
            </div>
        `).join('');
    } else {
        listContainer.innerHTML = `<div style="color: var(--text-muted); text-align: center; margin-top: auto; margin-bottom: auto;">ไม่มีการเลือกคดีหรือของผิดกฎหมาย</div>`;
    }

    currentNormalTime = normalTime;
    currentSevereTime = severeTime;
    currentBailMoney = totalBailMoney;
}

function copyFineOnly() {
    if (currentTotalMoney <= 0) { alert("ยังไม่มียอดชำระเงินครับ!"); return; }
    const btn = document.getElementById('btn-copy-fine');
    navigator.clipboard.writeText(currentTotalMoney).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> คัดลอกตัวเลขแล้ว!';
        btn.classList.add('copied');
        setTimeout(() => { 
            btn.innerHTML = '<i class="fa-solid fa-copy"></i>'; 
            btn.classList.remove('copied');
        }, 1500);
    });
}

function copyLogToClipboard() {
    const billRows = document.querySelectorAll('#case-log-list .bill-row');
    
    if (billRows.length === 0 || (billRows.length === 1 && billRows[0].innerText.includes("ไม่มีการเลือกคดี"))) {
        alert("กรุณาเลือกคดีก่อนทำการคัดลอกครับ");
        return;
    }

    const cases = [];
    billRows.forEach(row => {
        const nameElement = row.querySelector('.bill-row-name');
        if (nameElement) {
            let caseName = nameElement.innerText.replace(/^-\s*/, '').trim();
            cases.push(caseName);
        }
    });
    
    const textToCopy = cases.join(' + ');
    const btn = document.getElementById('btn-copy-log');
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> คัดลอกสำเร็จ!';
        btn.classList.add('copied');
        
        setTimeout(() => { 
            btn.innerHTML = '<i class="fa-solid fa-copy"></i>'; 
            btn.classList.remove('copied');
        }, 1500);
    }).catch(err => {
        console.error('ไม่สามารถคัดลอกข้อความได้: ', err);
    });
}

function copyTimeOnly() {
    const timeSpan = document.getElementById('res-time');
    const currentTime = timeSpan ? parseInt(timeSpan.innerText) : 0;
    
    if (currentTime <= 0) { 
        alert("ยังไม่มีเวลาจำคุกให้คัดลอกครับ!"); 
        return; 
    }
    
    const btn = document.getElementById('btn-copy-time');
    navigator.clipboard.writeText(currentTime).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.classList.add('copied');
        setTimeout(() => { 
            btn.innerHTML = '<i class="fa-solid fa-copy"></i>'; 
            btn.classList.remove('copied');
        }, 1200);
    });
}

function resetAll() {

    document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
    document.querySelectorAll('.btn-choose').forEach(btn => {
        btn.classList.remove('selected');
        btn.innerText = 'Choose';
    });
    
    const bailBtn = document.getElementById('global-bail-btn');
    bailBtn.classList.remove('active', 'blue');
    bailBtn.innerHTML = '<i class="fa-solid fa-unlock"></i>ขอประกันตัว (ปิดอยู่)';
    
    for (let key in itemQtys) { itemQtys[key] = 0; }
    for (let key in checkStates) { checkStates[key] = false; }
    globalBail = false;
    
    const previewContainer = document.getElementById('file-preview-list');
    previewContainer.innerHTML = '<span class="placeholder-text"><i class="fa-solid fa-cloud-arrow-up"></i> กด Ctrl+V เพื่อวางรูปภาพ</span>';
    
    calculate();
}

async function submitCase() {
    const nameInput = document.getElementById('header-user-name');
    const suspectName = nameInput ? nameInput.value.trim() : "";
    const myId = localStorage.getItem('myDiscordId');
    const myName = localStorage.getItem('myUsername'); 

    console.log("Login Check:", { myId, myName });

    if (!myId || myId === 'null' || !myName || myName === 'null') {
        iziToast.error({
            title: 'ยังไม่ได้ Login!',
            message: 'กรุณาทำการ Login ก่อนใช้งานระบบ',
            position: 'bottomLeft',
            timeout: 2000,
        });
        return;
    }

    if (!suspectName) {
        iziToast.warning({
            title: 'ลืมใส่ชื่อผู้ต้องหา!',
            message: 'กรุณากรอกชื่อผู้ต้องหาก่อนส่งคดี',
            position: 'bottomLeft',
            timeout: 2000,
        });
        return;
    }
    const billRows = document.querySelectorAll('#case-log-list .bill-row');
    if (billRows.length === 0) {

        iziToast.warning({
            title: 'ยังไม่ได้เลือกข้อหา!',
            message: 'กรุณาเลือกรายการคดีก่อนส่ง',
            position: 'bottomLeft',
            timeout: 2000,
        });
        return;
    }

    const previewImg = document.querySelector('.preview-img');
    if (!previewImg) {
        iziToast.warning({
            title: 'ไม่มีรูปภาพหลักฐาน!',
            message: 'กรุณาวางรูปภาพ เพื่อเป็นหลักฐานก่อนกดบันทึกคดี',
            position: 'bottomLeft',
            timeout: 2000,
        });
        return;
    }

    const fineValue = parseInt(document.getElementById('res-fine').innerText.replace(/,/g, '')) || 0;
    const bailValue = parseInt(document.getElementById('res-bail').innerText.replace(/,/g, '')) || 0;
    const time = document.getElementById('res-time').innerText;
    const totalToPay = fineValue + bailValue;

    let bailDetail = "ไม่มี";

    if (globalBail) {
        bailDetail =
        `${currentNormalTime.toLocaleString()} นาที (+${currentBailMoney.toLocaleString()} บ. | -${currentNormalTime.toLocaleString()} น.)`;
    }

    let officerIds = [...selectedOfficers];

    if (!officerIds.includes(myId)) {
        officerIds.unshift(myId);
    }
    const officerText = officerIds.map(id => `• <@${id}> ${id === myId ? '(ผู้บันทึก)' : ''}`).join('\n');
    const cases = currentCaseDetails.map(c=>{
        let fineText =
            typeof c.fine === "number"
            ? c.fine.toLocaleString()+" บ."
            : c.fine;

        let timeText =
            typeof c.time === "number"
            ? c.time+" น."
            : c.time;

        return `• ${c.text} (${fineText} | ${timeText})`;

    }).join('\n');

    const formData = new FormData();

    const payload = {
        embeds: [{
            title: "👮 รายงานสถานะคดี | บันทึกข้อมูล",
            color: 0x2f3136,
            fields: [
                { 
                    name: "👤 ผู้ต้องหา", 
                    value: `\`\`\`${suspectName}\`\`\``, 
                    inline: false 
                },
                { 
                    name: "⏳ จำคุก", 
                    value: `\`\`\`${time} นาที\`\`\``, 
                    inline: true 
                },
                { 
                    name: "💰 ค่าปรับ (รวมประกัน)", 
                    value: `\`\`\`${totalToPay.toLocaleString()} บาท\`\`\``, 
                    inline: true 
                },
                {
                    name:"⚖️ รายละเอียดข้อหา",
                    value:`\`\`\`\n${cases}\n\`\`\``,
                    inline:false
                },
                {
                    name:"⏳ ประกันเวลา",
                    value:`\`\`\`${bailDetail}\`\`\``,
                    inline:false
                },
                { name: "👮 เจ้าหน้าที่", value: officerText, inline: false }
            ],

            footer: {
                text: `PANDA System | ${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}`
            }
        }]
    };

    formData.append('payload_json', JSON.stringify(payload));

    if (previewImg) {
        const response = await fetch(previewImg.src);
        const blob = await response.blob();
        formData.append('file', blob, 'evidence.png');
    }

    const scrollY = window.scrollY;

    try {

        iziToast.success({
            title: 'ส่งคดีสำเร็จ!',
            message: 'ส่งข้อมูลเรียบร้อย',
            position: 'bottomLeft',
            timeout: 2000,
        });

        fetch(webhookUrl,{
            method:'POST',
            body:formData
        }).catch(console.error);

        resetAll();

        if (nameInput) nameInput.value = '';

        selectedOfficers.clear();
        renderOfficerList(officersListGlobal);
        
    } catch (e) {
        console.error(e);
        iziToast.error({
            title: 'กรุณาติดต่อ ผู้พัฒนา!',
            message: 'ไม่สามารถส่งข้อมูลไปยัง Discord ได้',
            position: 'bottomLeft',
            timeout: 2000,
        });
    }

    window.scrollTo(0, scrollY);
}

document.body.addEventListener('paste', (event) => {
    const items = event.clipboardData.items;
    
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
            const blob = items[i].getAsFile();
            const reader = new FileReader();

            reader.onload = async function(e) {
                const previewContainer = document.getElementById('file-preview-list');
                const placeholder = previewContainer.querySelector('.placeholder-text');
                if (placeholder) placeholder.remove();

                const wrapper = document.createElement('div');
                wrapper.className = 'img-wrapper';

                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-img';

                const removeBtn = document.createElement('div');
                removeBtn.className = 'img-remove';
                removeBtn.innerHTML = '×';
                
                removeBtn.onclick = (ev) => {
                    ev.stopPropagation();
                    wrapper.remove();
                    if (previewContainer.children.length === 0) {
                        previewContainer.innerHTML = '<span class="placeholder-text"><i class="fa-solid fa-cloud-arrow-up"></i> กด Ctrl+V เพื่อวางรูปภาพ</span>';
                    }
                };

                img.onclick = () => {
                    openImagePreview(img.src);
                };

                wrapper.appendChild(img);
                wrapper.appendChild(removeBtn);
                previewContainer.appendChild(wrapper);

            };
            reader.readAsDataURL(blob);
            event.preventDefault();
        }
    }
});

async function loadOfficersFromSheet() {

    const url = "https://script.google.com/macros/s/AKfycbzwtKBNu2Enq58I56DeaQ093KTWNt0PHQQwnxkm2_r1ghwOJ3-qmA52f83ZJhldOblh/exec"; 
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        officersListGlobal = data;
        renderOfficerList(officersListGlobal);
    } catch (error) {
        console.error("ดึงข้อมูลไม่ได้:", error);
    }
}

function renderOfficerList(officers) {
    const container = document.getElementById('officer-list-container');
    container.innerHTML = '';

    const myId = localStorage.getItem('myDiscordId');

    officers.forEach(off => {
        if (off.id === myId) return;

        const row = document.createElement('div');
        row.className = 'officer-row';

        if (selectedOfficers.has(off.id)) {
            row.classList.add('selected');
        }

        row.innerHTML = `
            <span class="officer-name">${off.name}</span>
        `;

        row.onclick = () => {
            if (selectedOfficers.has(off.id)) {
                selectedOfficers.delete(off.id);
                row.classList.remove('selected');
            } else {
                selectedOfficers.add(off.id);
                row.classList.add('selected');
            }

            updateSelectedOfficerUI();
        };

        container.appendChild(row);
    });
}

function updateSelectedOfficerUI() {
    const box = document.getElementById('selected-officer-list');

    const names = officersListGlobal
        .filter(o => selectedOfficers.has(o.id))
        .map(o => `• ${o.name}`);

    box.innerHTML = names.length
        ? names.join('<br>')
        : '- ยังไม่ได้เลือก';
}

function filterOfficers() {

    const input = document.getElementById('officer-search').value.toLowerCase();
    
    const container = document.getElementById('officer-list-container');
    const rows = container.getElementsByClassName('officer-row');
    
    for (let i = 0; i < rows.length; i++) {
        const name = rows[i].innerText.toLowerCase();
        
        if (name.includes(input)) {
            rows[i].style.display = "flex";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function getCleanName(rawName) {
    if (!rawName) return "ไม่ระบุชื่อ";
    
    const index = rawName.indexOf(']');
    
    if (index !== -1) {
        return rawName.substring(index + 1).trim();
    }

    return rawName.trim();
}

function updateHeaderBadge(fullName) {
    const cleanName = getCleanName(fullName);
    const badgeSpan = document.getElementById('header-user-name');
    if (badgeSpan) {
        badgeSpan.innerText = cleanName;
    }
}

async function submitTake12() {
    const nameInput = document.getElementById('header-user-name');
    const suspectName = nameInput ? nameInput.value.trim() : "";

    const myId = localStorage.getItem('myDiscordId');
    const myName = localStorage.getItem('myUsername');

    const previewImg = document.querySelector('.preview-img');

    if (!myId || !myName) {
       iziToast.error({
            title: 'ยังไม่ได้ Login!',
            message: 'กรุณาทำการ Login ก่อนใช้งานระบบ',
            position: 'bottomLeft',
            timeout: 2000,
        });
        return;
    }

    if (!previewImg) {
        iziToast.warning({
            title: 'ไม่มีรูปภาพหลักฐาน!',
            message: 'กรุณาวางรูปภาพ เพื่อเป็นหลักฐานก่อนกดบันทึกคดี',
            position: 'bottomLeft',
            timeout: 2000,
        });
        return;
    }

    const officerIds = [...selectedOfficers];

    if (!officerIds.includes(myId)) {
        officerIds.unshift(myId);
    }

    const officerText = officerIds
        .map(id => `• <@${id}> ${id === myId ? '(ผู้ส่ง)' : ''}`)
        .join('\n');

    const formData = new FormData();

    const payload = {
        embeds: [{
            title: "📸 TAKE 2",
            color: 0x2f3136,

            fields: [
                {
                    name: "👮 เจ้าหน้าที่",
                    value: officerText || "ไม่มี",
                    inline: false
                },
            ],

            // image: {
            //     url: "attachment://evidence.png"
            // },

            footer: {
                text: `TAKE 2 | ${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}`
            }
        }]
    };

    formData.append("payload_json", JSON.stringify(payload));

    const response = await fetch(previewImg.src);
    const blob = await response.blob();
    formData.append("file", blob, "evidence.png");

    resetAll();

    try {
        iziToast.success({
            title: 'ส่ง Take 2 สำเร็จ',
            message: 'ลงบันทึกเรียบร้อย',
            position: 'bottomLeft',
            timeout: 2000,
        });

        await fetch(webhookUrl, {
            method: "POST",
            body: formData
        });

    } catch (err) {
        console.error(err);
        iziToast.error({
            title: 'กรุณาติดต่อ ผู้พัฒนา!',
            message: 'ไม่สามารถส่งข้อมูลไปยัง Discord ได้',
            position: 'bottomLeft',
            timeout: 2000,
        });
    }
}

document.addEventListener('keydown', (e) => {
    const keyMap = {
        'F1': 'n1', 'F2': 'n2', 'F3': 'n3'
    };
    if (keyMap[e.key]) {
        toggleRowCheck(keyMap[e.key]);
    }
});

const savedName = localStorage.getItem('userName');
if(savedName) document.getElementById('header-user-name').value = savedName;

renderAll();
loadOfficersFromSheet();
