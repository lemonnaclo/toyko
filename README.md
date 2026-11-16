# 도쿄 ㅣ 치이카와 토벌여행

2026.11.26–30 도쿄 여행 일정 웹앱. 날짜별 일정, Google 지도, 방문 체크, 메모를 지원합니다. 메모와 체크는 기기의 브라우저에만 저장되며 다른 PC로 자동 이동하지 않습니다.

## 다른 PC에서 이어서 작업하기

현재 PC에서 작성한 구글 시트 연동 수정본은 **`work/google-sheets-handoff` 브랜치**에 보관합니다. 운영 `main`과 분리한 작업 중인 코드이며, 실제 시트 연동·브라우저·배포 검증은 아직 남아 있습니다.

```sh
git clone --branch work/google-sheets-handoff https://github.com/lemonnaclo/toyko.git
cd toyko
node --test tests/handoff.test.cjs
python -m http.server 8000
```

이미 저장소가 있는 다른 PC에서는 미커밋 변경을 먼저 보관한 뒤 다음 명령으로 받으세요.

```sh
git fetch origin
git switch work/google-sheets-handoff
git pull --ff-only origin work/google-sheets-handoff
```

Node.js 18 이상과 로컬 미리보기를 위한 Python 3가 있으면 됩니다. npm 설치나 빌드가 없는 정적 사이트입니다. 서버 실행 후 브라우저에서 `http://localhost:8000`을 여세요. Python 명령이 `python3`인 환경에서는 바꿔 실행하세요.

코덱스에서 이 저장소 폴더를 열고 아래 문장을 전달하세요.

> AGENTS.md와 CURRENT_STATE.md를 먼저 읽고, HANDOFF.md와 UPDATE_LOG.md도 확인해서 구글 시트 연동 작업을 이어가줘. 이 브랜치의 Apps Script 구현과 기존 CSV 패치는 서로 다른 구현이니 섞지 말고, 이미 작성된 날짜별 구글 시트를 보존해줘. 검증되지 않은 항목을 확인하고 PR로 정리해줘.

## 먼저 읽을 문서

- [AGENTS.md](AGENTS.md): 코덱스용 작업 지침과 읽는 순서.
- [CURRENT_STATE.md](CURRENT_STATE.md): 2026-11-16 기준 실제 코드 상태, 두 구현의 차이, 다음 작업 및 검증 범위.
- [HANDOFF.md](HANDOFF.md): 기존 날짜별 구글 시트 구조와 CSV 방식 인계 기록. 기존 시트 링크도 여기에 있습니다.
- [UPDATE_LOG.md](UPDATE_LOG.md): 작업 이력. 마지막 날짜의 기록을 먼저 확인하세요.

## 이 브랜치의 구글 시트 연결

이 브랜치는 Apps Script JSON을 30초마다 읽는 별도 구현입니다. `sheets-config.js`의 `endpoint`와 `sheetUrl`은 아직 비어 있습니다. 연결 전에는 기존 5일, 24개 일정을 보여줍니다. 열린 탭의 자동 갱신, 지금 동기화, 브라우저별 연결 설정, 연결 해제를 구현했습니다. 오류가 발생하면 화면의 현재 일정을 유지합니다. 새로고침 후 연결 실패 시 기본 일정이 표시됩니다.

시트의 한 행이 일정 하나이며 열 이름은 `ID`, `날짜`, `시작`, `종료`, `일정`, `분류`, `상세 내용`, `장소 검색어`, `이동 메모`, `예산`, `예약 상태`, `일 제목`, `일 설명`입니다. 날짜는 `2026-11-26`, 시간은 `09:30` 형태의 텍스트입니다. ID는 전체에서 고유해야 하며 행 이동 시 유지해야 방문 체크가 보존됩니다. 입력은 날짜·시작 시간 순으로 표시됩니다. 종료·예산은 선택 항목이며 임의 값을 채우지 않았습니다.

**이미 다른 작업에서 편집된 날짜별 구글 시트는 초기화하지 마세요.** 그 시트의 5개 날짜 탭과 집계 탭은 이 13열 형식과 다릅니다. 연결 방식은 CURRENT_STATE.md를 읽고 조정해야 합니다.

새 테스트 시트에서 Apps Script 방식을 검증하려면:

1. 새 시트에서 확장 프로그램 → Apps Script를 엽니다.
2. `google-apps-script/Code.gs`와 `google-apps-script/Seed.gs`를 각각 붙여 넣습니다.
3. `setupItinerary`를 한 번 실행하고 권한을 허용하면 `일정` 탭이 만들어집니다. 내용이 있는 기존 `일정` 탭은 덮어쓰지 않습니다.
4. 웹 앱으로 배포하고 실행 사용자를 본인, 읽기 접근을 모든 사용자로 설정합니다. 해당 설정이 허용되는 계정이어야 합니다.
5. `/exec`로 끝나는 URL을 사이트의 연결 설정에 입력합니다. 모든 기기에 공통 적용하려면 `sheets-config.js`의 `endpoint`에 넣어 커밋합니다. `sheetUrl`은 편집 링크입니다. 브라우저 입력으로 연결한 주소는 해당 브라우저에만 저장됩니다.

익명 읽기로 배포한 일정은 누구나 볼 수 있습니다. 여권·예약번호·인증정보는 저장소나 공개 일정에 넣지 마세요. 사이트는 읽기 전용이며 브라우저 메모와 체크를 시트에 전송하지 않습니다. 상단 항공·호텔 요약과 하단 여행 기간은 고정 내용입니다.

## 검증 명령

```sh
node --check app.js
node --check sheets.js
node --check sheet-sync.js
node --check sheets-config.js
node --test tests/handoff.test.cjs
git diff --check
```

자동 검사는 입력 검증과 기존 일정 보존을 확인합니다. 실제 Google 응답, CORS, 화면 배치와 자동 갱신은 별도 브라우저 확인이 필요합니다. `scripts/prepare-sheet-seed.cjs`는 기본 일정으로 `Seed.gs`를 재생성하는 개발 도구입니다.

GitHub Pages: Settings → Pages → Deploy from a branch → main / (root).

캐릭터 이미지의 권리는 원저작자에게 있습니다. 개인 여행 일정 용도입니다.
