globalThis.TOKYO_TRIP_DATA = {
  "updated": "2026-11-22 · 11/26 치이카와 랜드 이케부쿠로 PARCO점 추가",
  "sheetURL": "https://docs.google.com/spreadsheets/d/1S_EChUSGHmsXd0v90_FIPwIPon9KxXUxQNMkaunEnfA/edit#gid=1828076283",
  "summaryCSV": "https://docs.google.com/spreadsheets/d/1S_EChUSGHmsXd0v90_FIPwIPon9KxXUxQNMkaunEnfA/export?format=csv&gid=1828076283",
  "days": [
    {
      "id": "2026-11-26",
      "date": "11.26",
      "dow": "목",
      "region": "입국·이케부쿠로",
      "title": "도착한 날은 가볍게",
      "summary": {
        "morning": "12:15 나리타 도착(기존 항공정보)",
        "afternoon": "입국 → 숙소 짐 보관 → 이케부쿠로 PARCO 치이카와 랜드",
        "evening": "저녁·휴식",
        "adjust": "치이카와 랜드 우선. 입국 지연·입장 제한 시 유동 조정"
      },
      "route": [
        "나리타",
        "이케부쿠로 숙소",
        "이케부쿠로 PARCO 치이카와 랜드"
      ],
      "stops": [
        {
          "id": "2026-11-26-1215-4c341753",
          "start": "12:15",
          "end": "13:45",
          "kind": "항공정보",
          "name": "나리타 도착·입국·수하물",
          "detail": "터미널·공항역까지 이동",
          "adjust": "입국 지연 시 뒤 쇼핑부터 줄이기",
          "url": "https://www.google.com/maps/search/?api=1&query=Narita+Airport",
          "reserved": false
        },
        {
          "id": "2026-11-26-1345-f39e6d68",
          "start": "13:45",
          "end": "15:30",
          "kind": "이동",
          "name": "공항 → 이케부쿠로 숙소",
          "detail": "스카이라이너 닛포리 환승 → JR 이케부쿠로 → 숙소 도보",
          "adjust": "열차 시각 미조회. 출발이 늦으면 전체 일정 뒤로 이동",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-26-1530-5f6c38cb",
          "start": "15:30",
          "end": "16:00",
          "kind": "숙소",
          "name": "짐 보관·체크인 확인",
          "detail": "실제 예약 숙소 기준",
          "adjust": "호텔명·짐 보관 가능 여부 미확인",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-26-1600-chiikawaland-parco",
          "start": "16:00",
          "end": "17:00",
          "kind": "방문 예정 · 입장 확인",
          "name": "치이카와 랜드 이케부쿠로 PARCO점",
          "detail": "첫날 우선 방문. 11/27부터 추첨제 전환 예정이며 추첨 결과는 아직 미발표(사용자 제공 정보). 11/26 입장 조건도 방문 전 공식 공지 확인.",
          "adjust": "입장 확정 아님. 현장 대기·입장 제한 시 무리하지 말고 주변 쇼핑으로 대체.",
          "url": "https://www.google.com/maps/search/?api=1&query=Chiikawa+Land+Ikebukuro+PARCO",
          "reserved": false,
          "required": true
        },
        {
          "id": "2026-11-26-1700-ikebukuro-flex",
          "start": "17:00",
          "end": "17:30",
          "kind": "선택",
          "name": "PARCO 주변 짧은 쇼핑",
          "detail": "치이카와 랜드 방문 후 남는 시간에만 역 주변을 둘러봐요.",
          "adjust": "랜드 입장·쇼핑이 길어지면 생략",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+PARCO",
          "reserved": false,
          "candidateGroups": [
            "ikebukuro"
          ]
        },
        {
          "id": "2026-11-26-1730-21dae001",
          "start": "17:30",
          "end": "18:30",
          "kind": "식사",
          "name": "이케부쿠로 저녁",
          "detail": "숙소 가까운 식당 선택",
          "adjust": "식당 예약 없음. 줄이 길면 다른 곳",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-26-1830-122316e3",
          "start": "18:30",
          "end": "19:30",
          "kind": "여유",
          "name": "필요한 물품 구매 또는 숙소 휴식",
          "detail": "필요한 옷이 있을 때만 들르고, 아니면 숙소에서 쉬어도 좋아요.",
          "adjust": "도착 피로가 크면 쇼핑 생략",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false,
          "candidateGroups": [
            "ikebukuro-clothes"
          ]
        },
        {
          "id": "2026-11-26-1930-5a3e9015",
          "start": "19:30",
          "end": "20:00",
          "kind": "준비",
          "name": "내일 파크 티켓·현장 안내 확인",
          "detail": "숙소에서 확인",
          "adjust": "예약 화면·입장 구간·본인확인 안내 확인",
          "url": "",
          "reserved": false
        }
      ]
    },
    {
      "id": "2026-11-27",
      "date": "11.27",
      "dow": "금",
      "region": "파크·긴자·대형 다이소",
      "title": "치이카와 파크, 긴자 쇼핑과 다이소",
      "summary": {
        "morning": "11:40–12:00 파크 입장 예약",
        "afternoon": "파크·점심 → 긴자 이토야·무인양품·로프트 중 2곳",
        "evening": "17:30–18:15 대형 다이소 → 저녁 → 숙소",
        "adjust": "긴자 우선. 전시 삭제. 파크가 늦어지면 선택 매장 수를 줄이고 다이소는 제품·재고 확인 후 방문"
      },
      "route": [
        "이케부쿠로",
        "치이카와 파크",
        "긴자 쇼핑",
        "다이소 긴자 대형점",
        "숙소"
      ],
      "stops": [
        {
          "id": "2026-11-27-0900-7321c7bf",
          "start": "09:00",
          "end": "10:00",
          "kind": "식사",
          "name": "아침·외출 준비",
          "detail": "이케부쿠로 숙소권",
          "adjust": "오전 다른 지역 방문은 넣지 않기",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-27-1040-487b3718",
          "start": "10:40",
          "end": "11:10",
          "kind": "이동",
          "name": "치이카와 파크로 이동",
          "detail": "실제 숙소에서 도보 경로 확인",
          "adjust": "11:10 전후 도착은 여유를 위한 목표",
          "url": "https://www.google.com/maps/search/?api=1&query=%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F%E3%83%91%E3%83%BC%E3%82%AF+%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3",
          "reserved": false
        },
        {
          "id": "2026-11-27-1110-96820523",
          "start": "11:10",
          "end": "11:40",
          "kind": "준비",
          "name": "티켓·입장 줄·현장 안내 확인",
          "detail": "현장에서 입구 확인",
          "adjust": "파크 예약은 랜드 입장권과 별개",
          "url": "https://www.google.com/maps/search/?api=1&query=%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F%E3%83%91%E3%83%BC%E3%82%AF+%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3",
          "reserved": false
        },
        {
          "id": "2026-11-27-1140-e64c899e",
          "start": "11:40",
          "end": "14:00",
          "kind": "예약 확정",
          "name": "치이카와 파크 관람·쇼핑",
          "legacyKey": "1-2",
          "detail": "예약 입장 구간 11:40–12:00",
          "adjust": "11:40–12:00는 사용자 제공 예약 정보이며 티켓 화면 재확인. 14:00은 예상 퇴장 시각. 현금 불가·재입장 원칙적 불가·큰 짐 보관함 없음.",
          "url": "https://www.google.com/maps/search/?api=1&query=%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F%E3%83%91%E3%83%BC%E3%82%AF+%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3",
          "reserved": true
        },
        {
          "id": "2026-11-27-1400-6d33e765",
          "start": "14:00",
          "end": "15:00",
          "kind": "식사",
          "name": "퇴장 후 점심·휴식",
          "detail": "선샤인시티 주변",
          "adjust": "퇴장 시각에 따라 유동적",
          "url": "https://www.google.com/maps/search/?api=1&query=Sunshine+City+Ikebukuro",
          "reserved": false
        },
        {
          "id": "2026-11-27-1500-449c4134",
          "start": "15:00",
          "end": "16:00",
          "kind": "이동",
          "name": "이케부쿠로 → 긴자",
          "detail": "마루노우치선 긴자 직통 후보 + 도보",
          "adjust": "열차·도보 약 40~55분 가안. 지치면 이케부쿠로 잔류",
          "url": "https://www.google.com/maps/search/?api=1&query=Ginza+Station",
          "reserved": false
        },
        {
          "id": "2026-11-27-1600-b36184a4",
          "start": "16:00",
          "end": "17:30",
          "kind": "선택",
          "name": "긴자 이토야·무인양품·로프트 중 2곳",
          "detail": "아래 매장 중 2곳 정도를 골라요. 교바시까지 갈 때는 긴자 안의 매장을 줄여요.",
          "adjust": "몽벨 교바시·Feiler를 고르면 다른 매장과 교체",
          "url": "https://www.google.com/maps/search/?api=1&query=Ginza+Itoya",
          "reserved": false,
          "candidateGroups": [
            "ginza"
          ]
        },
        {
          "id": "2026-11-27-1730-daiso",
          "start": "17:30",
          "end": "18:15",
          "kind": "구매·확인",
          "name": "다이소 긴자 대형점 · 닌텐도 가방 확인",
          "detail": "마로니에 게이트 긴자2 6층의 공식 대형점. 긴자 쇼핑 매장에서 도보로 이동하고 건물 6층으로 올라가요. 45분 확보. 닌텐도 가방은 정확한 제품·모델 확인 대기이며 판매·재고 미확인.",
          "adjust": "공식 영업 11:00–21:00. 공식 앱에서 해당 매장·상품명으로 재고 확인 후 방문. 재고가 없으면 헛걸음하지 않도록 구매 계획을 바꾸고, 가방 규격·호환 모델은 현물로 확인.",
          "url": "https://www.google.com/maps/search/?api=1&query=DAISO%20%E3%83%9E%E3%83%AD%E3%83%8B%E3%82%A8%E3%82%B2%E3%83%BC%E3%83%88%E9%8A%80%E5%BA%A7%E5%BA%97%20%E9%8A%80%E5%BA%A73-2-1",
          "officialURL": "https://www.daiso-sangyo.co.jp/shop/detail/009168",
          "stockURL": "https://www.daiso-sangyo.co.jp/app",
          "reserved": false,
          "required": true,
          "candidateGroups": [
            "daiso-ginza"
          ],
          "travelMode": "walking"
        },
        {
          "id": "2026-11-27-1730-d960d099",
          "start": "18:15",
          "end": "19:15",
          "kind": "식사",
          "name": "긴자 카페·저녁",
          "detail": "쇼핑한 권역에서 선택",
          "adjust": "다이소 쇼핑 뒤 같은 긴자 권역에서 저녁. 도쿄역 추가 쇼핑은 남은 체력·시간이 충분할 때 이 구간과 교체.",
          "url": "https://www.google.com/maps/search/?api=1&query=Ginza+Tokyo",
          "reserved": false
        },
        {
          "id": "2026-11-27-1830-e9dbdc9d",
          "start": "19:15",
          "end": "20:15",
          "kind": "이동",
          "name": "숙소 복귀",
          "detail": "마루노우치선 이케부쿠로 방향 + 도보",
          "adjust": "짐이 많으면 다른 지역 추가 방문 생략",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        }
      ],
      "regionOverride": "파크·긴자·대형 다이소",
      "summaryOverride": {
        "morning": "11:40–12:00 파크 입장 예약",
        "afternoon": "파크·점심 → 긴자 이토야·무인양품·로프트 중 2곳",
        "evening": "17:30–18:15 대형 다이소 → 저녁 → 숙소",
        "adjust": "긴자 우선. 전시 삭제. 파크가 늦어지면 선택 매장 수를 줄이고 다이소는 제품·재고 확인 후 방문"
      },
      "alert": "11/27은 파크 → 긴자 쇼핑으로 복원. 긴자 16:00–17:30, 다이소 대형점 17:30–18:15. 닌텐도 가방은 제품명·모델 확인 후 재고 조회가 필요해요."
    },
    {
      "id": "2026-11-28",
      "date": "11.28",
      "dow": "토",
      "region": "닛포리·갓파바시",
      "title": "원단과 그릇을 만나는 날",
      "summary": {
        "morning": "원단·TOMATO 쇼핑",
        "afternoon": "그릇·유리 쇼핑 (Seven Uniform 토요일 휴무)",
        "evening": "숙소권 휴식",
        "adjust": "비즈 우선이면 아사쿠사바시와 한 구역 교체"
      },
      "route": [
        "이케부쿠로",
        "닛포리",
        "갓파바시",
        "숙소"
      ],
      "stops": [
        {
          "id": "2026-11-28-0900-065d7ca0",
          "start": "09:00",
          "end": "09:40",
          "kind": "이동",
          "name": "이케부쿠로 → 닛포리",
          "detail": "JR 야마노테선 + 원단거리 도보",
          "adjust": "당일 영업 확인 후 출발. 일요일로 미루지 않는 기본안",
          "url": "https://www.google.com/maps/search/?api=1&query=Nippori+Station",
          "reserved": false
        },
        {
          "id": "2026-11-28-0940-32f3243a",
          "start": "09:40",
          "end": "10:30",
          "kind": "여유",
          "name": "원단거리 위치 확인·커피",
          "detail": "TOMATO 주변 동선 파악",
          "adjust": "개점 전에는 식사·휴식. 10:30 개점은 최신 공식 확인 필요",
          "url": "https://www.google.com/maps/search/?api=1&query=Nippori+Fabric+Town",
          "reserved": false
        },
        {
          "id": "2026-11-28-1030-d4930971",
          "start": "10:30",
          "end": "12:00",
          "kind": "선택",
          "name": "TOMATO·원단거리 쇼핑",
          "detail": "원단거리와 같은 건물의 층별 후보를 구분해 살펴봐요.",
          "adjust": "모든 건물 방문 대신 원하는 소재 우선. 운영·재고 미확인",
          "url": "https://www.google.com/maps/search/?api=1&query=TOMATO+Notions-kan+Nippori",
          "reserved": false,
          "candidateGroups": [
            "nippori"
          ]
        },
        {
          "id": "2026-11-28-1200-13e83134",
          "start": "12:00",
          "end": "13:00",
          "kind": "식사",
          "name": "닛포리 점심·짐 정리",
          "detail": "역 주변 또는 이동 전 식사",
          "adjust": "구매한 짐이 많으면 오후를 줄이기",
          "url": "https://www.google.com/maps/search/?api=1&query=Nippori+Station",
          "reserved": false
        },
        {
          "id": "2026-11-28-1300-d9576658",
          "start": "13:00",
          "end": "13:45",
          "kind": "이동",
          "name": "닛포리 → 갓파바시",
          "detail": "JR 우에노 → 긴자선 다와라마치 → 도보 후보",
          "adjust": "도보·환승 포함 30~45분 가안",
          "url": "https://www.google.com/maps/search/?api=1&query=Kappabashi+Dougu+Street",
          "reserved": false
        },
        {
          "id": "2026-11-28-1345-5c7443c3",
          "start": "13:45",
          "end": "16:15",
          "kind": "선택",
          "name": "갓파바시 그릇·유리 쇼핑",
          "detail": "TSUCHI-YA 등 그릇·유리 후보를 골라요. Seven Uniform은 토요일 휴무로 방문 제외.",
          "adjust": "조합 기준점은 개별 매장이 아니며, TAKASO 저장 핀은 조리기기 시연점. 관심 매장 2~3곳만 선택.",
          "url": "https://www.google.com/maps/search/?api=1&query=Kappabashi+Dougu+Street",
          "reserved": false,
          "candidateGroups": [
            "kappabashi"
          ]
        },
        {
          "id": "2026-11-28-1615-2dad861c",
          "start": "16:15",
          "end": "17:15",
          "kind": "이동",
          "name": "이케부쿠로 복귀 또는 짧은 휴식",
          "detail": "다와라마치 → 우에노 → 이케부쿠로 후보",
          "adjust": "아사쿠사바시는 기존 구역과 교체. 매장 마감 뒤 추가하지 않기",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-28-1715-c7cbfa09",
          "start": "17:15",
          "end": "18:30",
          "kind": "식사",
          "name": "숙소권 저녁·휴식",
          "detail": "추가 쇼핑은 체력에 따라 선택",
          "adjust": "스카이트리 치이카와 지점은 필수 아님",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        }
      ],
      "alert": "Seven Uniform은 토요일 정기휴무입니다. 11/28에는 제외하고 그릇·유리 매장 위주로 골라요."
    },
    {
      "id": "2026-11-29",
      "date": "11.29",
      "dow": "일",
      "region": "기치조지·SCRAP·보리스·시부야",
      "title": "기치조지에서 보리스와 포켓몬센터까지",
      "summary": {
        "morning": "11시 페이퍼메세지·서쪽 골목 → 12시 이후 사브로",
        "afternoon": "14:00 기치조지 출발 → 15:00 SCRAP 본사 외관 10분 → 15:45–16:45 보리스 잡화점",
        "evening": "보리스 → 17:25–18:25 시부야 PARCO 포켓몬센터 → 귀환",
        "adjust": "SCRAP은 외관만 5~10분. 이동이 지연되면 SCRAP을 생략하고 보리스·포켓몬센터 우선"
      },
      "route": [
        "이케부쿠로",
        "기치조지",
        "SCRAP 본사 외관",
        "보리스 잡화점",
        "시부야 PARCO · 포켓몬센터",
        "숙소"
      ],
      "stops": [
        {
          "id": "2026-11-29-0930-44788aab",
          "start": "09:30",
          "end": "10:30",
          "kind": "이동",
          "name": "이케부쿠로 → 기치조지",
          "detail": "JR 신주쿠 → 주오선 기치조지 + 도보",
          "adjust": "환승·도보 40~55분 가안. 기치조지는 방문 유지",
          "url": "https://www.google.com/maps/search/?api=1&query=Kichijoji+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1030-9a324cb4",
          "start": "10:30",
          "end": "11:00",
          "kind": "여유",
          "name": "북쪽 골목 위치 확인·커피",
          "detail": "역 북쪽 → 관심 가게 쪽",
          "adjust": "개점 시각에 따라 순서 변경. 공원은 필수 아님",
          "url": "https://www.google.com/maps/search/?api=1&query=Kichijoji+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1100-0271cf7e",
          "start": "11:00",
          "end": "12:30",
          "kind": "선택",
          "name": "문구·유리·잡화 중 선택",
          "detail": "11:00 페이퍼메세지 또는 유리 매장 → 12:00 이후 사브로. 모두 방문하는 일정은 아니에요.",
          "adjust": "사브로 개점은 12:00. 먼저 들를 가게를 1곳 고르고 이동 여유 10~15분 확보. 늦어지면 사브로를 점심 후로 옮기기.",
          "url": "https://www.google.com/maps/search/?api=1&query=36+Sublo+Kichijoji",
          "reserved": false,
          "candidateGroups": [
            "kichijoji-shops"
          ]
        },
        {
          "id": "2026-11-29-1230-38dea057",
          "start": "12:30",
          "end": "13:30",
          "kind": "식사",
          "name": "기치조지 점심",
          "detail": "북쪽 골목에서 영업 중인 식당을 보며 점심 장소를 골라요.",
          "adjust": "줄이 길면 다른 식당. 특정 식당 예약 없음",
          "url": "https://www.google.com/maps/search/?api=1&query=Harmonica+Yokocho",
          "reserved": false,
          "candidateGroups": [
            "kichijoji-lunch"
          ]
        },
        {
          "id": "2026-11-29-1330-a781b635",
          "start": "13:30",
          "end": "14:00",
          "kind": "선택",
          "name": "추가 잡화 쇼핑 또는 카페",
          "detail": "잡화 골목을 더 보거나 카페에서 쉬는 코스로 바꿔도 좋아요.",
          "adjust": "SCRAP 본사 외관 방문을 위해 14:00에 기치조지 출발. 추가 카페는 줄이기.",
          "url": "https://www.google.com/maps/search/?api=1&query=Kichijoji+Petit+Mura",
          "reserved": false,
          "candidateGroups": [
            "kichijoji-break"
          ]
        },
        {
          "id": "2026-11-29-1430-to-boris",
          "start": "14:00",
          "end": "15:00",
          "kind": "이동",
          "name": "기치조지 → SCRAP 본사",
          "detail": "기치조지에서 센다가야·기타산도 권역으로 이동. JR 주오·소부선 및 도보 후보.",
          "adjust": "이동 60분은 여유를 둔 가안이며, 당일 열차·도보 경로 확인. 방문은 외관만.",
          "url": "https://www.google.com/maps/search/?api=1&query=SCRAP+%E5%8D%83%E9%A7%84%E3%83%B6%E8%B0%B75-8-2",
          "reserved": false
        },
        {
          "id": "2026-11-29-scrap-hq-exterior",
          "start": "15:00",
          "end": "15:10",
          "kind": "외관 방문",
          "name": "SCRAP 도쿄 본사 · 건물 외관",
          "detail": "리얼 탈출 게임 제작사 SCRAP 본사 건물 외관만 5~10분 구경. 주소: 東京都渋谷区千駄ヶ谷5-8-2 イワオアネックス北館1階.",
          "adjust": "일반 견학·내부 입장 일정 아님. 업무용 사무실이므로 직원·출입자에게 방해되지 않도록 외부에서만 확인.",
          "url": "https://www.google.com/maps/search/?api=1&query=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BESCRAP+%E5%8D%83%E9%A7%84%E3%83%B6%E8%B0%B75-8-2",
          "officialURL": "https://www.scrapmagazine.com/about/company-profile/",
          "reserved": false
        },
        {
          "id": "2026-11-29-scrap-to-boris",
          "start": "15:10",
          "end": "15:45",
          "kind": "이동",
          "name": "SCRAP 본사 → 보리스 잡화점",
          "detail": "센다가야에서 진구마에 보리스 잡화점으로 이동. 도보·대중교통 경로 당일 확인.",
          "adjust": "35분은 예상 이동 여유. 지연될 경우 본사 외관 관람을 생략하고 보리스 필수 일정 우선.",
          "url": "https://www.google.com/maps/search/?api=1&query=%E3%83%9C%E3%83%AA%E3%82%B9%E9%9B%91%E8%B2%A8%E5%BA%97",
          "reserved": false
        },
        {
          "id": "2026-11-29-1545-boris",
          "start": "15:45",
          "end": "16:45",
          "kind": "꼭 방문",
          "name": "보리스 잡화점 · 히구치 유코",
          "detail": "1층 갤러리·상품 구경에 1시간 확보. 공식 안내 11:00–19:00, 수요일 휴무. 현금 없이 결제할 수단을 챙겨요.",
          "adjust": "사용자 지정 필수 방문, 예약 시간은 아님. 공식상 전시·행사 첫날만 예약제이며 그 외 영업일은 예약 불필요. 2층은 부정기휴무·중간 휴식 가능.",
          "url": "https://www.google.com/maps?cid=10783324310941095014",
          "reserved": false,
          "required": true,
          "candidateGroups": [
            "boris"
          ]
        },
        {
          "id": "2026-11-29-1645-to-shibuya-parco",
          "start": "16:45",
          "end": "17:25",
          "kind": "이동",
          "name": "보리스 잡화점 → 시부야 PARCO",
          "detail": "오모테산도·하라주쿠 권역에서 시부야 PARCO까지 도보 이동 후보. 40분 여유 확보.",
          "adjust": "걷기 힘들거나 늦어지면 대중교통으로 변경. 실제 경로와 혼잡은 당일 지도에서 확인.",
          "url": "https://www.google.com/maps/search/?api=1&query=Shibuya+PARCO",
          "reserved": false,
          "travelMode": "walking"
        },
        {
          "id": "2026-11-29-pokemon-shibuya",
          "start": "17:25",
          "end": "18:25",
          "kind": "꼭 방문",
          "name": "포켓몬센터 시부야 · 시부야 PARCO 6층",
          "detail": "포켓몬 굿즈 쇼핑 1시간. 도쿄도 시부야구 우다가와초 15-1, 시부야 PARCO 6층. 공식 영업시간 10:00–21:00.",
          "adjust": "신주쿠 PARCO가 아닌 시부야 PARCO입니다. 주말 혼잡·입장 방식·특정 상품 판매 조건은 방문 전 공식 안내 확인.",
          "url": "https://www.google.com/maps/search/?api=1&query=Pokemon+Center+Shibuya+PARCO",
          "officialURL": "https://shop.pokemon.co.jp/ja/shop/pokemoncenter-shibuya/",
          "reserved": false,
          "required": true
        },
        {
          "id": "2026-11-29-1730-90a2648d",
          "start": "18:25",
          "end": "19:20",
          "kind": "이동",
          "name": "시부야 → 이케부쿠로 숙소 귀환",
          "detail": "시부야역 → JR 야마노테선 이케부쿠로 방향 + 숙소 도보 후보",
          "adjust": "시부야 PARCO에서 역까지 도보·역내 이동 포함한 가안. 열차 시각 당일 확인",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1830-5be957ed",
          "start": "19:20",
          "end": "20:00",
          "kind": "식사",
          "name": "마지막 저녁",
          "detail": "숙소권에서 편하게 식사",
          "adjust": "쇼핑 미련보다 귀국 준비 여유 확보",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1930-9233cd1b",
          "start": "20:00",
          "end": "21:00",
          "kind": "준비",
          "name": "짐 정리·공항 열차 확인",
          "detail": "여권·항공권·수하물·터미널 점검",
          "adjust": "공항 09:00 도착에 맞는 실제 열차를 선택",
          "url": "",
          "reserved": false
        }
      ],
      "alert": "11/29 기치조지 → SCRAP 본사 외관(15:00, 10분) → 보리스 잡화점(15:45) → 시부야 포켓몬센터(17:25). 본사 내부 입장 없음. 보리스·포켓몬센터 필수.",
      "regionOverride": "기치조지·SCRAP·보리스·시부야",
      "summaryOverride": {
        "morning": "11시 페이퍼메세지·서쪽 골목 → 12시 이후 사브로",
        "afternoon": "14:00 기치조지 출발 → 15:00 SCRAP 본사 외관 10분 → 15:45–16:45 보리스 잡화점",
        "evening": "보리스 → 17:25–18:25 시부야 PARCO 포켓몬센터 → 귀환",
        "adjust": "SCRAP은 외관만 5~10분. 이동이 지연되면 SCRAP을 생략하고 보리스·포켓몬센터 우선"
      }
    },
    {
      "id": "2026-11-30",
      "date": "11.30",
      "dow": "월",
      "region": "출국",
      "title": "여유 있게, 다시 집으로",
      "summary": {
        "morning": "09:00 나리타 도착 목표",
        "afternoon": "12:05 나리타 출발(기존 항공정보)",
        "evening": "15:10 인천 도착(기존 항공정보)",
        "adjust": "실제 열차·터미널·항공권 재확인"
      },
      "route": [
        "이케부쿠로",
        "닛포리 환승",
        "나리타",
        "인천"
      ],
      "stops": [
        {
          "id": "2026-11-30-0630-5906e291",
          "start": "06:30",
          "end": "07:00",
          "kind": "준비",
          "name": "기상·체크아웃 준비",
          "detail": "여권·항공권·기념품 최종 확인",
          "adjust": "호텔의 이른 체크아웃 방법 확인",
          "url": "",
          "reserved": false
        },
        {
          "id": "2026-11-30-0700-3fa6dd8b",
          "start": "07:00",
          "end": "07:15",
          "kind": "숙소",
          "name": "체크아웃·역으로 출발",
          "detail": "실제 숙소에서 역까지 도보",
          "adjust": "예약 숙소 거리·엘리베이터 동선에 따라 앞당기기",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-30-0715-e0e95f64",
          "start": "07:15",
          "end": "09:00",
          "kind": "이동",
          "name": "이케부쿠로 → 닛포리 → 나리타",
          "detail": "JR + 스카이라이너 후보",
          "adjust": "07:15는 특정 열차 출발시각이 아님. 실제 열차·항공사 터미널 확인",
          "url": "https://www.google.com/maps/search/?api=1&query=Narita+Airport",
          "reserved": false
        },
        {
          "id": "2026-11-30-0900-794c6a95",
          "start": "09:00",
          "end": "11:00",
          "kind": "항공정보",
          "name": "세관 면세 확인 → 수하물 위탁·보안검색",
          "detail": "면세 구매 시 여권·물품 전부를 소지해 먼저 세관 확인. 이후 항공사 수하물 위탁·보안검색·출국심사.",
          "adjust": "2026/11/1 구매분부터 세금 포함 결제 후 환급 방식. 위탁 후 물품을 꺼내 세관 확인할 수 없음. 항공사 마감 우선, 공항 09:00 도착은 가안.",
          "url": "https://www.google.com/maps/search/?api=1&query=Narita+Airport",
          "reserved": false
        },
        {
          "id": "2026-11-30-1100-b1a8ec17",
          "start": "11:00",
          "end": "12:05",
          "kind": "항공정보",
          "name": "탑승구 이동·탑승 준비",
          "detail": "항공사 안내 마감 우선",
          "adjust": "12:05 출발은 기존 일정 정보. 항공권과 재대조",
          "url": "https://www.google.com/maps/search/?api=1&query=Narita+Airport",
          "reserved": false
        },
        {
          "id": "2026-11-30-1205-356dca1c",
          "start": "12:05",
          "end": "15:10",
          "kind": "항공정보",
          "name": "나리타 → 인천",
          "detail": "기존 일정 기준, 한일 시차 없음",
          "adjust": "항공편 번호·시각·예약 완료 여부 재확인",
          "url": "https://www.google.com/maps/search/?api=1&query=Incheon+International+Airport",
          "reserved": false,
          "legacyKey": "4-3"
        }
      ],
      "alert": "면세 환급: 여권·구매 물품 전부를 소지해 세관 확인부터. 수하물 위탁·보안검색 전에 끝내야 합니다."
    }
  ],
  "places": [
    {
      "id": "place-3",
      "area": "이케부쿠로",
      "name": "Evangelion Store Tokyo-01",
      "address": "Ikebukuro PARCO Main Building, 6F, 1 Chome-28-2 Minamiikebukuro, Toshima City, Tokyo 171-0022 일본",
      "url": "https://www.google.com/maps?cid=8298772091744559483",
      "lat": 35.7307756,
      "lng": 139.7124392,
      "when": "11/26 목",
      "status": "도착일 후보",
      "note": "도착 후 이케부쿠로 도보권에서 관심 매장 선택. 파르코·선샤인 쇼핑은 파크 방문일에도 가능하므로 중복 방문을 줄임. 캐릭터 매장은 원하는 상품이 있으면 한 곳만으로도 충분.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "에반게리온 스토어",
      "tone": "character",
      "description": "에반게리온 관련 상품을 보고 싶을 때의 후보. 저장된 위치는 이케부쿠로 PARCO 본관 6층으로, 파르코를 들를 때 함께 확인하기 좋아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도는 이케부쿠로 PARCO 본관6F의 エヴァンゲリオンストアトウキョウ-01로 응답.",
        "remaining": "시도한 브랜드 지점 URL은 404로 반환돼 현행 공식 지점 안내 확인 부족. 404만으로 폐업을 뜻하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-7",
      "area": "이케부쿠로",
      "name": "유니클로",
      "address": "일본 〒170-0013 Tokyo, Toshima City, Higashiikebukuro, 1 Chome−21−4 1階",
      "url": "https://www.google.com/maps?cid=9343123237379285295",
      "lat": 35.7300281,
      "lng": 139.7154827,
      "when": "11/26 목",
      "status": "도착일 후보",
      "note": "도착 후 이케부쿠로 도보권에서 관심 매장 선택. 파르코·선샤인 쇼핑은 파크 방문일에도 가능하므로 중복 방문을 줄임. 캐릭터 매장은 원하는 상품이 있으면 한 곳만으로도 충분.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "유니클로",
      "tone": "outdoor",
      "description": "히가시이케부쿠로 1-21-4에 저장한 지점. 여행 중 필요한 옷을 살 때만 선택하고, 이미 준비가 됐다면 생략해도 돼요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "지도는 東池袋1-21-4의 유니클로 지점으로 응답. 공식 Store Locator 페이지까지 확인.",
        "remaining": "공식 페이지 응답에서 해당 지점 주소·영업 상세를 읽지 못해 운영시간 확인 필요.",
        "sources": []
      }
    },
    {
      "id": "place-47",
      "area": "이케부쿠로",
      "name": "KIDDY LAND",
      "address": "일본 〒170-6002 Tokyo, Toshima City, Higashiikebukuro, 3 Chome−1−2 サンシャインシティ 専門店街アルパ 2F",
      "url": "https://www.google.com/maps?cid=12236781073094397083",
      "lat": 35.7291104,
      "lng": 139.7194608,
      "when": "11/26 목",
      "status": "도착일 후보",
      "note": "도착 후 이케부쿠로 도보권에서 관심 매장 선택. 파르코·선샤인 쇼핑은 파크 방문일에도 가능하므로 중복 방문을 줄임. 캐릭터 매장은 원하는 상품이 있으면 한 곳만으로도 충분.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "KIDDY LAND",
      "tone": "character",
      "description": "선샤인시티 알파 2층에 저장한 캐릭터 상품 매장. 파르코 쪽과는 다른 권역이니 원하는 상품이 있는 쪽을 골라요. 치이카와 관련 입장 공지는 별도 확인이 필요해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "선샤인시티 アルパ2F 東池袋3-1-2, 10:00–20:00. 공식 주소와 지도 일치.",
        "remaining": "치이카와 랜드 입장·정리권은 일반 키디랜드 운영과 별개로 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.kiddyland.co.jp/shoplist/ikebukuro_sunshine/"
          }
        ]
      }
    },
    {
      "id": "place-49",
      "area": "이케부쿠로",
      "name": "이케부쿠로 파르코",
      "address": "1 Chome-28-2 Minamiikebukuro, Toshima City, Tokyo 171-8557 일본",
      "url": "https://www.google.com/maps?cid=17630143392211855215",
      "lat": 35.7308568,
      "lng": 139.7123844,
      "when": "11/26 목",
      "status": "도착일 후보",
      "note": "도착 후 이케부쿠로 도보권에서 관심 매장 선택. 파르코·선샤인 쇼핑은 파크 방문일에도 가능하므로 중복 방문을 줄임. 캐릭터 매장은 원하는 상품이 있으면 한 곳만으로도 충분.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "이케부쿠로 PARCO",
      "tone": "character",
      "description": "역 동쪽의 파르코 쇼핑 후보. 에반게리온 스토어와 같은 건물로 저장돼 있어 묶기 좋아요. 특정 캐릭터 매장의 현재 층·입장 방식은 방문 전 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "이케부쿠로PARCO 공식 사이트와 저장 핀을 대조.",
        "remaining": "개별 매장 층·휴무·행사는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://ikebukuro.parco.jp/"
          }
        ]
      }
    },
    {
      "id": "place-54",
      "area": "나리타 공항·지바",
      "name": "나리타 국제 공항",
      "address": "1-1 Furugome, Narita, Chiba 282-0004 일본",
      "url": "https://www.google.com/maps?cid=15379275550635268769",
      "lat": 35.770178,
      "lng": 140.3843215,
      "when": "11/26 입국·11/30 출국",
      "status": "공항 이동",
      "note": "기존 항공정보: 11/26 12:15 나리타 도착, 11/30 12:05 출발. 이케부쿠로 ↔ JR 닛포리 ↔ 게이세이 스카이라이너 후보. 11/30 09:00 공항 도착 목표, 터미널·열차 시각 별도 확인.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "나리타 공식 공항 사이트와 저장 핀을 대조. 2026/11/1 면세 환급 변경은 별도 공식 안내 확인.",
        "remaining": "항공편·터미널·체크인 마감·공항 열차는 예약 정보와 대조 필요.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.narita-airport.jp/ja/"
          }
        ]
      }
    },
    {
      "id": "place-55",
      "area": "이케부쿠로",
      "name": "치이카와 파크",
      "address": "일본 〒170-0013 Tokyo, Toshima City, Higashiikebukuro, 3 Chome−3−5 サンシャインシティ アネックス B1・1F",
      "url": "https://www.google.com/maps?cid=14155347735030942810",
      "lat": 35.7298854,
      "lng": 139.7173041,
      "when": "11/27 금 11:40–12:00 입장",
      "status": "유일한 고정 예약",
      "note": "기존 일정에 기록된 입장 구간. 관람·쇼핑 시간을 넉넉히 잡고 오후 출발은 퇴장 후 결정.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "치이카와 파크 공식 주소 東池袋3-3-5 Annex B1·1F와 지도 일치. FAQ·티켓 안내에서 현금 불가, Asoview 판매 확인.",
        "remaining": "11/27 11:40–12:00 예약은 사용자 제공 일정. 실제 예약 화면은 독립적으로 검증하지 못함.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://chiikawapark-tokyo.jp/"
          },
          {
            "label": "공식 FAQ",
            "url": "https://chiikawapark-tokyo.jp/faq/"
          },
          {
            "label": "공식 티켓",
            "url": "https://chiikawapark-tokyo.jp/ticket/"
          }
        ]
      }
    },
    {
      "id": "place-11",
      "area": "긴자·교바시·유라쿠초",
      "name": "몽벨 도쿄 교바시점",
      "address": "東京スクエアガーデン １, ２階, 3 Chome-1-1 Kyobashi, Chuo City, Tokyo 104-0031 일본",
      "url": "https://www.google.com/maps?cid=18111296058751286170",
      "lat": 35.6756552,
      "lng": 139.7690568,
      "when": "11/27 금 오후",
      "status": "기본 코스 후보",
      "note": "파크 후 긴자·교바시. 5곳 완주가 아니라 취향에 따라 2~3곳 선택. Feiler는 장소명·좌표 기준 긴자 분류, 메모로 다른 매장으로 바꾸지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "몽벨 교바시",
      "tone": "outdoor",
      "description": "아웃도어 의류·용품을 살펴볼 후보. 저장된 위치는 교바시 도쿄 스퀘어가든 1·2층이에요. 긴자 중심 매장들보다 북동쪽이므로 관심 있을 때 동선을 늘려요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "도쿄교바시점 京橋3-1-1 1·2F, 11:00–21:00. 지도와 공식 주소 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://store.montbell.jp/search/shopinfo/?shop_no=678502"
          }
        ]
      }
    },
    {
      "id": "place-33",
      "area": "긴자·교바시·유라쿠초",
      "name": "긴자 로프트",
      "address": "ベルビア館, 1階～5階, 2 Chome-4-6 Ginza, Chuo City, Tokyo 104-0061 일본",
      "url": "https://www.google.com/maps?cid=3620508382511668300",
      "lat": 35.6741115,
      "lng": 139.766261,
      "when": "11/27 금 오후",
      "status": "기본 코스 후보",
      "note": "파크 후 긴자·교바시. 5곳 완주가 아니라 취향에 따라 2~3곳 선택. Feiler는 장소명·좌표 기준 긴자 분류, 메모로 다른 매장으로 바꾸지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "긴자 로프트",
      "tone": "paper",
      "description": "문구·생활 잡화 구경 후보. 긴자 2-4-6에 저장돼 있어 이토야·무인양품과 같은 긴자 쇼핑 구간으로 묶을 수 있어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "긴자로프트 銀座2-4-6 ベルビア館1–5F. 지도와 공식 지점 주소 일치.",
        "remaining": "매장·면세 카운터 영업시간은 각각 확인. 환급 방식은 국세청·공항 최신 안내 우선.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.loft.co.jp/ginzaloft/"
          }
        ]
      }
    },
    {
      "id": "place-34",
      "area": "긴자·교바시·유라쿠초",
      "name": "무인양품 긴자",
      "address": "3 Chome-3-5 Ginza, Chuo City, Tokyo 104-0061 일본",
      "url": "https://www.google.com/maps?cid=771702428473144825",
      "lat": 35.673214,
      "lng": 139.7653677,
      "when": "11/27 금 오후",
      "status": "기본 코스 후보",
      "note": "파크 후 긴자·교바시. 5곳 완주가 아니라 취향에 따라 2~3곳 선택. Feiler는 장소명·좌표 기준 긴자 분류, 메모로 다른 매장으로 바꾸지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "무인양품 긴자",
      "tone": "browse",
      "description": "생활용품·의류·문구를 한 번에 살펴볼 후보. 저장된 위치는 긴자 3-3-5예요. 살 것이 많다면 이후 매장을 줄이고 짐을 숙소에 가져가도 좋아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도는 銀座3-3-5의 무인양품 긴자로 응답.",
        "remaining": "공식 지점 링크가 점검 안내로 연결되어 지점 영업·휴무 검증 부족. 사이트 점검은 매장 휴업을 의미하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-35",
      "area": "긴자·교바시·유라쿠초",
      "name": "긴자 이토야",
      "address": "2 Chome-7-15 Ginza, Chuo City, Tokyo 104-0061 일본",
      "url": "https://www.google.com/maps?cid=9979308774657714368",
      "lat": 35.6731273,
      "lng": 139.7672138,
      "when": "11/27 금 오후",
      "status": "기본 코스 후보",
      "note": "파크 후 긴자·교바시. 5곳 완주가 아니라 취향에 따라 2~3곳 선택. Feiler는 장소명·좌표 기준 긴자 분류, 메모로 다른 매장으로 바꾸지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "긴자 이토야",
      "tone": "paper",
      "description": "문구·종이 제품을 보고 싶을 때 우선 살펴볼 후보. 긴자 2-7-15에 저장돼 있어 긴자 로프트와 같은 구역에서 비교해보기 좋아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "긴자 이토야 銀座2-7-15. 지도와 공식 지점 주소 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.ito-ya.co.jp/ginza/"
          }
        ]
      }
    },
    {
      "id": "place-39",
      "area": "긴자·교바시·유라쿠초",
      "name": "Feiler Ginza",
      "address": "東京都中央区銀座4-4-1 1F",
      "url": "https://www.google.com/maps?cid=9295772223182406052",
      "lat": 35.6724604,
      "lng": 139.7651295,
      "when": "11/27 금 오후",
      "status": "기본 코스 후보",
      "note": "파크 후 긴자·교바시. 5곳 완주가 아니라 취향에 따라 2~3곳 선택. Feiler는 장소명·좌표 기준 긴자 분류, 메모로 다른 매장으로 바꾸지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "FEILER 긴자본점",
      "tone": "browse",
      "description": "공식 주소를 확인한 페이러 긴자본점(긴자 4-4-1 1층). 손수건·패브릭 소품 후보이며, 히구치 유코의 보리스 잡화점과는 다른 매장입니다.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "フェイラー銀座本店 銀座4-4-1 1F. 누락 주소를 공식 매장 목록과 지도로 대조해 보완.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.feiler-jp.com/shoplist/"
          }
        ]
      }
    },
    {
      "id": "place-6",
      "area": "도쿄역·니혼바시",
      "name": "Pokémon Center DX",
      "address": "일본 〒103-0027 Tokyo, Chuo City, Nihonbashi, 2 Chome−11−2 髙島屋S.C.東館 5F",
      "url": "https://www.google.com/maps?cid=17206393884080941756",
      "lat": 35.6802902,
      "lng": 139.7742695,
      "when": "일정 제외",
      "status": "방문하지 않음",
      "note": "사용자 관심 없음: Pokémon Center DX 제외. 니혼바시를 포켓몬 목적으로 방문하지 않음.",
      "excluded": true,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "포켓몬센터 도쿄DX 지점 안내 확인. 사용자 요청에 따라 여행 코스에서는 제외.",
        "remaining": "방문 제외 상태 유지.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://shop.pokemon.co.jp/ja/shop/pokemoncenter-tokyodx/"
          }
        ]
      }
    },
    {
      "id": "place-51",
      "area": "도쿄역·니혼바시",
      "name": "Chiikawa Land TOKYO Station",
      "address": "JR Tokyo Station, 1 Chome-9-1 Marunouchi, Chiyoda City, Tokyo 100-0005 일본",
      "url": "https://www.google.com/maps?cid=1773287088112808875",
      "lat": 35.6821886,
      "lng": 139.7686315,
      "when": "기존 동선과 겹칠 때",
      "status": "추가 치이카와 매장 선택",
      "note": "치이카와 랜드 전 지점 방문 불필요. 이케부쿠로에서 원하는 쇼핑을 했으면 생략. 도쿄역은 긴자와 조합할 때만, 스카이트리는 동쪽 코스를 바꿀 만큼 가고 싶을 때만 고려. 방문 지점 수를 목표로 삼지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "치이카와 랜드 도쿄역",
      "tone": "character",
      "description": "도쿄역 안에 저장한 치이카와 상품 매장. 캐릭터스트리트와 같은 구역이므로 추가 쇼핑이 필요할 때만 선택해요. 예약·정리권 여부는 해당 날짜의 공식 공지를 확인해야 해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "치이카와 공식 TOKYO Station 페이지에서 해당 지점 예약 경로 확인. 파크와 별도의 상품점.",
        "remaining": "11/26–30 실제 날짜별 예약·정리권 여부는 미확인. 예약은 상품 재고 확보가 아님.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://chiikawa-info.jp/chiikawaland/tokyo/"
          }
        ]
      }
    },
    {
      "id": "place-52",
      "area": "도쿄역·니혼바시",
      "name": "도쿄 캐릭터스트리트",
      "address": "일본 〒100-0005 Tokyo, Chiyoda City, Marunouchi, 1 Chome−9−1 東京駅一番街 B1",
      "url": "https://www.google.com/maps?cid=1169765817995755207",
      "lat": 35.6820335,
      "lng": 139.7686549,
      "when": "기존 동선과 겹칠 때",
      "status": "추가 치이카와 매장 선택",
      "note": "치이카와 랜드 전 지점 방문 불필요. 이케부쿠로에서 원하는 쇼핑을 했으면 생략. 도쿄역은 긴자와 조합할 때만, 스카이트리는 동쪽 코스를 바꿀 만큼 가고 싶을 때만 고려. 방문 지점 수를 목표로 삼지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "도쿄 캐릭터스트리트",
      "tone": "character",
      "description": "도쿄역 이치방가이 지하 1층에 저장한 캐릭터 쇼핑 구역. 개별 매장 하나가 아니라 여러 매장을 구경하는 후보예요. 치이카와 랜드와 중복 왕복하지 않아도 돼요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "도쿄역 캐릭터스트리트 공식 온라인플라자 확인. 저장 지도는 이치방가이 B1 쇼핑 구역.",
        "remaining": "온라인플라자 안내만으로 모든 오프라인 매장 운영을 보장하지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://e-shop.tokyoeki-1bangai.co.jp/shop/default.aspx"
          }
        ]
      }
    },
    {
      "id": "place-24",
      "area": "긴자·교바시·유라쿠초",
      "name": "Oedo Antique Market",
      "address": "",
      "url": "https://www.google.com/maps?cid=9543162483212471229",
      "lat": 35.6773272,
      "lng": 139.7645021,
      "when": "11/26–30 방문 후보 제외",
      "status": "여행 기간 개최 예정 없음",
      "note": "주최자·도쿄국제포럼 공식 일정 교차 확인: 11월 남은 개최일 11/23, 다음 12/12·20. 이번 여행 기간에는 개최 예정이 없어 시장 방문 후보에서 제외.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일정 불일치",
        "scope": "주최자와 개최장 모두 2026년 11월 남은 일정은 11/23, 다음은 12/12·20으로 안내. 11/26–30 개최 예정 없음.",
        "remaining": "2026/11/18 게시 일정 기준. 변경 시 공식 일정 재확인.",
        "sources": [
          {
            "label": "주최자 일정",
            "url": "https://www.antique-market.jp/english/"
          },
          {
            "label": "도쿄국제포럼 일정",
            "url": "https://www.t-i-forum.co.jp/visitors/antique/"
          }
        ]
      }
    },
    {
      "id": "place-21",
      "area": "아사쿠사바시",
      "name": "West Five Asakusabashi",
      "address": "1 Chome-23-1 Asakusabashi, Taito City, Tokyo 111-0053 일본",
      "url": "https://www.google.com/maps?cid=16674280593912479251",
      "lat": 35.6975939,
      "lng": 139.783879,
      "when": "11/28 토 교체안",
      "status": "비즈·부자재 우선일 때",
      "note": "JR 아사쿠사바시역 주변 도보권 3곳. 닛포리 또는 갓파바시 중 한 구역을 줄이거나 빼고 대체. 세 구역을 모두 오래 쇼핑하는 일정은 피함.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "West Five",
      "tone": "craft",
      "description": "목록에 체인·마감 장식 등 부자재 관심 장소로 저장한 곳. 아사쿠사바시 1-23-1에 있어 역 주변 부자재 쇼핑 코스로 묶어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "WEST5 浅草橋1-23-1. 평일·토 10:00–18:30, 일·공휴일 10:00–18:00. 공식 주소와 지도 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.toho-shoji.com/west5-%e6%b5%85%e8%8d%89%e6%a9%8b%e5%ba%97/"
          }
        ]
      }
    },
    {
      "id": "place-22",
      "area": "아사쿠사바시",
      "name": "Kiwa Seisakujo Asakusabashi",
      "address": "일본 〒111-0053 Tokyo, Taito City, Asakusabashi, 2 Chome−1−10 貴和製作所本店ビル 1F-4F",
      "url": "https://www.google.com/maps?cid=1947670456211472275",
      "lat": 35.698673,
      "lng": 139.7869052,
      "when": "11/28 토 교체안",
      "status": "비즈·부자재 우선일 때",
      "note": "JR 아사쿠사바시역 주변 도보권 3곳. 닛포리 또는 갓파바시 중 한 구역을 줄이거나 빼고 대체. 세 구역을 모두 오래 쇼핑하는 일정은 피함.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "기와제작소 본점",
      "tone": "craft",
      "description": "비즈·펜던트를 살펴볼 후보. 저장된 위치는 아사쿠사바시 2-1-10, 기와제작소 본점 건물이에요. Parts Club과 함께 비교할 곳으로 골라볼 수 있어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "기와제작소 본점 浅草橋2-1-10 1–4F. 월–토 09:30–18:30, 일·공휴일 10:00–18:00.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://kiwaseisakujo.com/store/honten/"
          }
        ]
      }
    },
    {
      "id": "place-23",
      "area": "아사쿠사바시",
      "name": "Parts Club Main Store",
      "address": "1 Chome-20-1 Yanagibashi, Taito City, Tokyo 111-0052 일본",
      "url": "https://www.google.com/maps?cid=2807724431473019074",
      "lat": 35.6974429,
      "lng": 139.7865748,
      "when": "11/28 토 교체안",
      "status": "비즈·부자재 우선일 때",
      "note": "JR 아사쿠사바시역 주변 도보권 3곳. 닛포리 또는 갓파바시 중 한 구역을 줄이거나 빼고 대체. 세 구역을 모두 오래 쇼핑하는 일정은 피함.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "PARTS CLUB 본점",
      "tone": "craft",
      "description": "비즈·펜던트 쇼핑 후보. 야나기바시 1-20-1에 저장돼 있어 아사쿠사바시 부자재 구역에서 함께 살펴보기 좋아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도는 柳橋1-20-1의 Parts Club 본점으로 응답.",
        "remaining": "공식 지점 URL이 HTTP403으로 접근 제한되어 현행 영업을 검증하지 못함. 폐업으로 단정하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-50",
      "area": "오시아게·스카이트리",
      "name": "치이카와 랜드 도쿄스카이트리타운·소라마치점",
      "address": "일본 〒131-0045 Tokyo, Sumida City, Oshiage, 1 Chome−1−2 東京スカイツリータウン 東京ソラマチ 3F",
      "url": "https://www.google.com/maps?cid=4721133530954638500",
      "lat": 35.7104097,
      "lng": 139.8129999,
      "when": "기존 동선과 겹칠 때",
      "status": "추가 치이카와 매장 선택",
      "note": "치이카와 랜드 전 지점 방문 불필요. 이케부쿠로에서 원하는 쇼핑을 했으면 생략. 도쿄역은 긴자와 조합할 때만, 스카이트리는 동쪽 코스를 바꿀 만큼 가고 싶을 때만 고려. 방문 지점 수를 목표로 삼지 않음.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "치이카와 공식 소라마치 지점 페이지 확인. 상품점으로 파크와 별도이며 지점별 입장 안내 확인 경로가 있음.",
        "remaining": "11/26–30 실제 날짜별 정리권·예약 필요 여부는 미확인. 무예약·현장 정리권을 보장하지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://chiikawa-info.jp/chiikawaland/solamachi/"
          }
        ]
      }
    },
    {
      "id": "place-53",
      "area": "우에노",
      "name": "우에노",
      "address": "일본 〒110-0005 도쿄도 다이토구",
      "url": "https://www.google.com/maps?cid=11221431823746921662",
      "lat": 35.7087296,
      "lng": 139.7741538,
      "when": "11/28 토 교체안",
      "status": "우에노 산책",
      "note": "장소명이 우에노인 넓은 지역 항목. 환승 때 짧은 식사·산책 후보이며 별도 관광지로 강제 배정하지 않음.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "우에노는 넓은 지역 단위 저장 항목. 갓파바시로 이동하는 경유 지역으로만 활용.",
        "remaining": "특정 매장·미술관·시장으로 확정된 핀이 아니므로 개별 입장·영업시간을 붙이지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-27",
      "area": "닛포리",
      "name": "Tomato Select-kan",
      "address": "일본 〒116-0014 Tokyo, Arakawa City, Higashinippori, 5 Chome−33−8 トマト ノーション館 2F",
      "url": "https://www.google.com/maps?cid=17329054790751103273",
      "lat": 35.72852,
      "lng": 139.7754656,
      "when": "11/28 토 오전",
      "status": "기본 코스 후보",
      "note": "이케부쿠로 → JR 야마노테선 닛포리 → 원단거리 도보. 거리 구경과 TOMATO 한 건물 중심으로 묶음. 층별 두 항목은 별도 지역 방문으로 세지 않음. 영업 확인 필요.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "TOMATO Select-kan",
      "tone": "craft",
      "description": "지도에 히가시닛포리 5-33-8 노션관 2층 Select-kan으로 저장한 핀입니다. 현행 공식 목록에서 Select 명칭·2층 구분은 확인 부족이라 아래 노션관과 같은 건물의 한 쇼핑 구간으로만 잡아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "지도에는 ノーション館 2F의 Select-kan으로 표시. 공식 현행 매장 목록에는 노션관을 안내하나 Select 명칭·2층 구분은 확인 부족.",
        "remaining": "현재 2층 명칭·입장·판매층은 현장 확인. 독립 매장 두 곳으로 계산하지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.nippori-tomato-onlineshop.com/pages/shi-dian-pu-qing-bao-ben-guan-2025-9-1"
          }
        ]
      }
    },
    {
      "id": "place-37",
      "area": "닛포리",
      "name": "NIPPORI FABRIC TOWN",
      "address": "6 Chome-17-6 Higashinippori, Arakawa City, Tokyo 116-0014 일본",
      "url": "https://www.google.com/maps?cid=5115279316992093659",
      "lat": 35.7284489,
      "lng": 139.7733819,
      "when": "11/28 토 오전",
      "status": "기본 코스 후보",
      "note": "이케부쿠로 → JR 야마노테선 닛포리 → 원단거리 도보. 거리 구경과 TOMATO 한 건물 중심으로 묶음. 층별 두 항목은 별도 지역 방문으로 세지 않음. 영업 확인 필요.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "닛포리 원단거리",
      "tone": "craft",
      "description": "원단·부자재 가게들을 둘러보는 거리 단위 후보. TOMATO 한 건물에만 머물거나 주변 가게를 더 볼지 구매 목적과 짐의 양에 맞춰 정해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "닛포리 원단거리는 상점가 단위. 공식 조합 안내와 지도를 대조. 단일 상점이나 공통 영업시간으로 취급하지 않음.",
        "remaining": "각 점포 영업은 별도. 조합 사무실 주소와 저장된 거리 핀 주소는 다름.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.nippori-senigai.com/"
          }
        ]
      }
    },
    {
      "id": "place-38",
      "area": "닛포리",
      "name": "TOMATO Notions-kan",
      "address": "일본 〒116-0014 Tokyo, Arakawa City, Higashinippori, 5 Chome−33−8 トマト ノーション館 1F",
      "url": "https://www.google.com/maps?cid=18009546472339398745",
      "lat": 35.728483,
      "lng": 139.7754456,
      "when": "11/28 토 오전",
      "status": "기본 코스 후보",
      "note": "이케부쿠로 → JR 야마노테선 닛포리 → 원단거리 도보. 거리 구경과 TOMATO 한 건물 중심으로 묶음. 층별 두 항목은 별도 지역 방문으로 세지 않음. 영업 확인 필요.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "TOMATO Notions-kan",
      "tone": "craft",
      "description": "히가시닛포리 5-33-8 노션관. 공식 운영사·상점가가 10:30–18:00, 일·공휴일 휴무로 안내합니다. 실·단추·도구 등 부자재 후보이며 층별 취급은 현장에서 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "ノーション館 東日暮里5-33-8. 공식 운영사와 상점가가 모두 10:30–18:00·일/공휴일 휴무를 안내.",
        "remaining": "1층·2층 세부 판매 구역은 현장에서 확인.",
        "sources": [
          {
            "label": "TOMATO 공식 매장",
            "url": "https://www.nippori-tomato-onlineshop.com/pages/shi-dian-pu-qing-bao-ben-guan-2025-9-1"
          },
          {
            "label": "닛포리 상점가 지점 안내",
            "url": "https://www.nippori-senigai.com/shopno/tomato-notion/"
          }
        ]
      }
    },
    {
      "id": "place-4",
      "area": "아사쿠사·갓파바시",
      "name": "Seven Uniform",
      "address": "일본 〒111-0035 Tokyo, Taito City, Nishiasakusa, 1 Chome−5−17 第2京成ビル 1F",
      "url": "https://www.google.com/maps?cid=10567520280451807035",
      "lat": 35.7121073,
      "lng": 139.7885986,
      "when": "11/28 방문 제외 · 평일에만 재검토",
      "status": "11/28 토 정기휴무",
      "note": "11/28 토요일 방문 제외. 평일 별도 방문은 파크 예약·기치조지 필수 일정을 해치지 않을 때만 검토.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Seven Uniform",
      "tone": "craft",
      "description": "앞치마·업무복 매장. 저장 지점은 니시아사쿠사 1-5-17 1층입니다. 공식 안내상 월–금 10:00–17:30, 토·일·공휴일 휴무라 11/28에는 들를 수 없어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "저장 지점은 西浅草1-5-17. 공식 직영점 안내: 월–금 10:00–17:30, 토·일·공휴일 휴무.",
        "remaining": "11/28(토) 방문 제외. 공식 상점가의 西浅草3-9-3 항목은 다른 주소이므로 혼동하지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.seven-uniform.co.jp/company/shop/"
          }
        ]
      },
      "visitWarning": "11/28(토) 정기휴무 · 이날 방문 제외"
    },
    {
      "id": "place-16",
      "area": "아사쿠사·갓파바시",
      "name": "Takenokodo",
      "address": "3 Chome-17-13 Matsugaya, Taito City, Tokyo 111-0036 일본",
      "url": "https://www.google.com/maps?cid=8322898996687887898",
      "lat": 35.71588759999999,
      "lng": 139.7889331,
      "when": "11/28 토 오후",
      "status": "기본 코스 후보",
      "note": "닛포리 → 우에노 경유 → 갓파바시. 5곳 완주 대신 관심 매장 2~3곳과 골목 산책. 당일 영업·마감 우선 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "竹子堂 (Takenokodo)",
      "tone": "browse",
      "description": "마쓰가야 3-17-13의 골동품·미술품 매입 상담·매매점입니다. 자유 관람형 앤티크 소매점인지 확인되지 않아, 근처 골목을 볼 때 외관·현장 안내만 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "松が谷3-17-13. 공식 안내는 골동품·미술품 등의 매입 상담·매매이며 지도명도 買取竹子堂.",
        "remaining": "자유롭게 구경하는 소매점인지·당일 방문 가능한지는 확인 필요.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.takenokohori.com/"
          }
        ]
      }
    },
    {
      "id": "place-17",
      "area": "아사쿠사·갓파바시",
      "name": "TAKASO デモ&キッチン (다카하시 총본점)",
      "address": "1 Chome-9-13 Matsugaya, Taito City, Tokyo 111-0036 일본",
      "url": "https://www.google.com/maps?cid=10384531620015108929",
      "lat": 35.711371,
      "lng": 139.7882007,
      "when": "11/28 토 오후",
      "status": "기본 코스 후보",
      "note": "원래 지도 핀을 유지. 유리·양식기 부문과 다른 지점이므로 목적에 맞춰 선택.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "TAKASO 데모·키친",
      "tone": "craft",
      "description": "저장 좌표는 마쓰가야 1-9-13의 조리기기 시연·판매 지점입니다. 유리 식기점으로 안내했던 설명을 정정했어요. 유리·양식기는 별도 지점인 니시아사쿠사 1-4-7입니다.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "松が谷1-9-13은 TAKASO デモ&キッチン. 유리 식기 부문은 별도 주소 西浅草1-4-7.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.takaso.jp/shop-2/kitchen/"
          },
          {
            "label": "별도 유리·양식기 지점",
            "url": "https://www.takaso.jp/shop-2/tableware/"
          }
        ]
      },
      "originalName": "Takahashi Sōhonten"
    },
    {
      "id": "place-18",
      "area": "아사쿠사·갓파바시",
      "name": "TSUCHI-YA ガラスの器と工芸",
      "address": "2 Chome-5-4 Nishiasakusa, Taito City, Tokyo 111-0035 일본",
      "url": "https://www.google.com/maps?cid=558275523781306747",
      "lat": 35.7125937,
      "lng": 139.7886804,
      "when": "11/28 토 오후",
      "status": "기본 코스 후보",
      "note": "닛포리 → 우에노 경유 → 갓파바시. 5곳 완주 대신 관심 매장 2~3곳과 골목 산책. 당일 영업·마감 우선 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "TSUCHI-YA 합파바시점",
      "tone": "craft",
      "description": "유리 그릇·공예에 관심 있을 때 살펴볼 후보. 저장된 위치는 니시아사쿠사 2-5-4예요. 다른 그릇가게와 취향을 비교하며 2~3곳만 골라도 충분해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "저장 지점은 浅草合羽橋本店 西浅草2-5-4, 10:00–17:30. 긴자점과 구분.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://tsuchi-ya.jp/pages/shop"
          }
        ]
      }
    },
    {
      "id": "place-19",
      "area": "아사쿠사·갓파바시",
      "name": "그릇가게",
      "address": "",
      "url": "https://www.google.com/maps?cid=11557830611863902878",
      "lat": 35.7157768,
      "lng": 139.7889371,
      "when": "11/28 토 오후",
      "status": "갓파바시 골목에 통합",
      "note": "좌표가 Takenokodo 주변. 정식 주소·상호가 없는 별도 필수 목적지로 두지 않고 그 골목 그릇·세일 매대 구경에 포함.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "그릇가게 주변",
      "tone": "walk",
      "description": "정식 상호와 주소가 없는 원본 저장 핀이에요. 현재 지도는 Marukatsu·마쓰가야 3초메 17로 응답하지만 공식 상호·전체 주소는 확인 부족입니다. 근처 그릇 골목 구경 기준점으로만 둡니다.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "원본 이름은 ‘그릇가게’. 현재 지도는 Marukatsu·松が谷3丁目17로 응답하나 공식 상호·전체 주소 확인 부족.",
        "remaining": "공식 자료로 해당 지점의 현재 운영·입장 조건을 확인하지 못했습니다. 지도만으로 영업을 보장하지 않습니다.",
        "sources": []
      }
    },
    {
      "id": "place-20",
      "area": "아사쿠사·갓파바시",
      "name": "갓파바시 도구거리 그릇쇼핑",
      "address": "3 Chome-18-2 Matsugaya, Taito City, Tokyo 111-0036 일본",
      "url": "https://www.google.com/maps?cid=16711366571749581804",
      "lat": 35.7163197,
      "lng": 139.7887226,
      "when": "11/28 토 오후",
      "status": "기본 코스 후보",
      "note": "닛포리 → 우에노 경유 → 갓파바시. 5곳 완주 대신 관심 매장 2~3곳과 골목 산책. 당일 영업·마감 우선 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "갓파바시 조합 기준점",
      "tone": "walk",
      "description": "마쓰가야 3-18-2는 공식 도구거리 조합 주소입니다. 개별 그릇가게 한 곳의 핀이 아니라 주변 골목을 더 둘러볼 기준점으로 표시했어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "松が谷3-18-2는 공식 상점가 조합의 주소. 개별 그릇 매장으로 확정하지 않고 골목 기준점으로 표시.",
        "remaining": "개별 소매점 입장·판매를 보장하는 핀이 아님.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.kappabashi.or.jp/"
          }
        ]
      }
    },
    {
      "id": "place-1",
      "area": "시모키타자와",
      "name": "Puppy Yarn 11am",
      "address": "2 Chome-26-4 Kitazawa, Setagaya City, Tokyo 155-0031 일본",
      "url": "https://www.google.com/maps?cid=2127321461429893629",
      "lat": 35.66194,
      "lng": 139.666057,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지 필수 방문을 유지한 상태에서 신주쿠 또는 다른 선택 구간 대신 고려. 기치조지·공원 시간을 줄여 무조건 추가하지 않음. 매장 이용 조건 별도 확인.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "시모키타자와점 주소 北沢2-26-4, 11:00–19:00·월요일 휴무를 공식 매장 안내와 지도에서 대조.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.puppyarn.com/puppyclub/tenpo/shimokitazawa.htm"
          }
        ]
      }
    },
    {
      "id": "place-48",
      "area": "시부야",
      "name": "ちいかわラーメン 豚 渋谷パルコ",
      "address": "일본 〒150-0042 Tokyo, Shibuya, Udagawacho, 15−1 渋谷パルコ・ヒューリックビル B1F",
      "url": "https://www.google.com/maps?cid=3933908751612537865",
      "lat": 35.6621812,
      "lng": 139.699131,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지 필수 방문을 유지한 상태에서 신주쿠 또는 다른 선택 구간 대신 고려. 기치조지·공원 시간을 줄여 무조건 추가하지 않음. 매장 이용 조건 별도 확인.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "시부야PARCO B1F. 공식 운영사는 예약 우선제, 혼잡에 따라 예약 없이 입점 가능, 현재 JapanTicket 판매 중단으로 안내.",
        "remaining": "여행일 빈자리·최신 예약 링크는 공식 안내에서 확인. 무예약 입장 보장 아님.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://cafe.parco.jp/event/chiikawaramenbuta_shibuya?area=029979"
          }
        ]
      }
    },
    {
      "id": "place-32",
      "area": "에비스·다이칸야마",
      "name": "DARUMA STORE -Tokyo-",
      "address": "Oike Bldg., 2 Chome-6-1 Ebisunishi, Shibuya, Tokyo 150-0021 일본",
      "url": "https://www.google.com/maps?cid=10230442776115560327",
      "lat": 35.6516663,
      "lng": 139.7068292,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지 필수 방문을 유지한 상태에서 신주쿠 또는 다른 선택 구간 대신 고려. 기치조지·공원 시간을 줄여 무조건 추가하지 않음. 매장 이용 조건 별도 확인.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "DARUMA STORE Tokyo 恵比寿西2-6-1, 10:30–18:00. 지도와 공식 주소 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://daruma-store.jp/?mode=f168"
          }
        ]
      }
    },
    {
      "id": "place-36",
      "area": "에비스·다이칸야마",
      "name": "minä perhonen materiaali",
      "address": "일본 〒150-0033 Tokyo, Shibuya, Sarugakucho, 29−10 HILLSIDE TERRACE C棟1階",
      "url": "https://www.google.com/maps?cid=16185740707666941796",
      "lat": 35.6479351,
      "lng": 139.7004384,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지 필수 방문을 유지한 상태에서 신주쿠 또는 다른 선택 구간 대신 고려. 기치조지·공원 시간을 줄여 무조건 추가하지 않음. 매장 이용 조건 별도 확인.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "materiaali 猿楽町29-10 C棟1F, 11:00–19:00·수요일 휴무. 지도와 공식 주소 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.mina-perhonen.jp/store_information/materiaali/"
          }
        ]
      }
    },
    {
      "id": "place-8",
      "area": "하라주쿠·오모테산도·아오야마",
      "name": "Cosmo Space",
      "address": "3 Chome-22-11 Jingumae, Shibuya, Tokyo 150-0001 일본",
      "url": "https://www.google.com/maps?cid=16492073477738071610",
      "lat": 35.6702881,
      "lng": 139.7072826,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지는 대체하지 않음. 원한다면 신주쿠 또는 긴자 구간을 줄여 하라주쿠·오모테산도를 선택. 소우소우를 위한 아오야마 연장은 제외.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Cosmo Space",
      "tone": "craft",
      "description": "목록에 원석 관심 장소로 저장한 매장. 진구마에 3-22-11에 있어 하라주쿠·오모테산도 코스를 선택했을 때 후보로 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "공식 사이트에서 원석 전문점·11:00–19:00 안내 확인. 저장 지도는 神宮前3-22-11.",
        "remaining": "주소의 최신 일치 여부·당일 임시휴무는 추가 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://cosmospace.jp/"
          }
        ]
      }
    },
    {
      "id": "place-9",
      "area": "하라주쿠·오모테산도·아오야마",
      "name": "소우소우 도쿄 아오야마점",
      "address": "일본 〒107-0062 Tokyo, Minato City, Minamiaoyama, 5 Chome−4−24 ア・ラ・クローチェ1F",
      "url": "https://www.google.com/maps?cid=17275758790874668940",
      "lat": 35.6612521,
      "lng": 139.714892,
      "when": "기본안 제외",
      "status": "후순위",
      "note": "사용자 지시: 소우소우는 가지 않아도 됨. 이 매장을 위해 아오야마 동선을 늘리지 않음.",
      "excluded": false,
      "lowPriority": true,
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "지도는 南青山5-4-24의 SOU SOU 도쿄아오야마점으로 응답. 사용자 요청대로 후순위 유지.",
        "remaining": "공식 사이트에서 해당 실매장 운영 조건을 확인하지 못해 예약·영업시간은 단정하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-42",
      "area": "하라주쿠·오모테산도·아오야마",
      "name": "Boris Zakkaten · 보리스 잡화점",
      "address": "〒150-0001 東京都渋谷区神宮前4-16-2",
      "url": "https://www.google.com/maps?cid=10783324310941095014",
      "lat": 35.6688739,
      "lng": 139.7113136,
      "when": "11/29 일 15:45–16:45 · 꼭 방문",
      "status": "사용자 지정 필수 방문",
      "note": "기치조지 필수 방문을 유지한 뒤 보리스로 이동. 신주쿠·나카노 선택 구간을 대체. 입장 예약을 확보했다는 뜻은 아님.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "보리스 잡화점",
      "tone": "browse",
      "description": "히구치 유코의 갤러리 겸 상품점. 공식 11월 안내는 11:00–19:00, 수요일 휴무입니다. 전시·행사 첫날에만 예약제, 그 외 영업일은 예약 불필요. 매장 결제는 현금 불가(가챠 제외), 2층은 부정기휴무·중간 휴식이 있어 현장 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "사용자 새 링크의 지도 CID가 기존 place-42와 일치. 공식 갤러리 주소 神宮前4-16-2와 저장 지도 대조. 공식 11월 공지에서 1층 11:00–19:00·수요일 휴무, 전시 RIBBON 9/19–12/22 확인. 매장 안내는 전시·행사 첫날만 예약제, 그 외 영업일 예약 불필요·매장 결제 현금 불가(가챠 제외).",
        "remaining": "11/29 15:45–16:45는 사용자 희망을 반영한 방문 계획이며 예약 시각이 아님. 2층은 부정기휴무·중간 휴식, 임시변경·재고·대기는 방문 전 확인.",
        "sources": [
          {
            "label": "공식 매장·입장 안내",
            "url": "https://gallery.higuchiyuko.tokyo/"
          },
          {
            "label": "공식 2026년 11월 일정",
            "url": "https://gallery.higuchiyuko.tokyo/news/2026_11_schedule/"
          },
          {
            "label": "공식 현금 없는 결제 안내",
            "url": "https://gallery.higuchiyuko.tokyo/news/cashless/"
          },
          {
            "label": "작가 공식 사이트",
            "url": "https://higuchiyuko.com/"
          }
        ]
      },
      "required": true
    },
    {
      "id": "place-45",
      "area": "하라주쿠·오모테산도·아오야마",
      "name": "키디랜드 하라주쿠점",
      "address": "6 Chome-1-9 Jingumae, Shibuya, Tokyo 150-0001 일본",
      "url": "https://www.google.com/maps?cid=7858405403824591241",
      "lat": 35.667733,
      "lng": 139.7065474,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지는 대체하지 않음. 원한다면 신주쿠 또는 긴자 구간을 줄여 하라주쿠·오모테산도를 선택. 소우소우를 위한 아오야마 연장은 제외.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "키디랜드 하라주쿠",
      "tone": "character",
      "description": "진구마에 6-1-9에 저장한 캐릭터 상품 매장. 이케부쿠로에서 쇼핑을 마쳤다면 생략하고 Boris·Cosmo Space에 시간을 써도 좋아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "하라주쿠점 神宮前6-1-9. 공식 주소와 지도 일치.",
        "remaining": "랜드 해당 지점 입장 공지는 일반 키디랜드 영업과 별개로 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.kiddyland.co.jp/harajuku/"
          }
        ]
      }
    },
    {
      "id": "place-12",
      "area": "기치조지",
      "name": "36 사브로",
      "address": "일본 〒180-0004 Tokyo, Musashino, Kichijoji Honcho, 2 Chome−4−16 原ビル ２階",
      "url": "https://www.google.com/maps?cid=17687105954414841933",
      "lat": 35.705693,
      "lng": 139.5784638,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "36 사브로",
      "tone": "paper",
      "description": "문구·종이 제품 매장, 혼초 2-4-16 원빌딩 2층. 공식 안내는 12:00–19:00, 화요일 휴무입니다. 오전 11시에는 아직 열지 않으므로 페이퍼메세지 등을 먼저 보고 12시 이후 방문해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "吉祥寺本町2-4-16 原ビル2F, 12:00–19:00·화요일 휴무. 공식 온라인숍 안내와 지도 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://sublo.ocnk.net/"
          }
        ]
      }
    },
    {
      "id": "place-13",
      "area": "기치조지",
      "name": "페이퍼메세지 - 종이용품 판매점",
      "address": "일본 〒180-0004 Tokyo, Musashino, Kichijoji Honcho, 4 Chome−1−3 村上ビル",
      "url": "https://www.google.com/maps?cid=7493306829015922572",
      "lat": 35.704953,
      "lng": 139.5737854,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "페이퍼메세지",
      "tone": "paper",
      "description": "혼초 4-1-3의 종이용품 매장. 공식 안내는 11:00–19:00, 부정기휴무입니다. 사브로가 12시에 열기 전 먼저 둘러볼 후보예요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "吉祥寺本町4-1-3, 11:00–19:00·부정기휴무. 공식 사이트와 지도 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.papermessage.jp/"
          }
        ]
      }
    },
    {
      "id": "place-14",
      "area": "기치조지",
      "name": "シープメドウ",
      "address": "2 Chome-27-8 Kichijoji Honcho, Musashino, Tokyo 180-0004 일본",
      "url": "https://www.google.com/maps?cid=17333172016767914052",
      "lat": 35.7062028,
      "lng": 139.5759337,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "シープメドウ",
      "tone": "craft",
      "description": "실·뜨개 쇼핑 후보로 묶어둔 곳. 저장된 위치는 혼초 2-27-8로, 북서쪽 다른 저장 매장들과 함께 선택해요. 품목·재고·영업은 방문 전 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도는 吉祥寺本町2-27-8의 シープメドウ로 응답.",
        "remaining": "해당 실매장의 현행 공식 사이트·영업표 확인 부족. 지도만으로 일요일 영업·재고를 보장하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-15",
      "area": "기치조지",
      "name": "Temari no Ouchi",
      "address": "일본 〒180-0004 Tokyo, Musashino, Kichijoji Honcho, 2 Chome−13−14 ３F",
      "url": "https://www.google.com/maps?cid=11239835527200278416",
      "lat": 35.704961,
      "lng": 139.5770375,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Temari no Ouchi",
      "tone": "cafe",
      "description": "저장해둔 고양이 카페 후보. 혼초 2-13-14 건물 3층에 저장돼 있어 쇼핑 중 실내에서 쉬고 싶을 때 검토해요. 프티트 무라의 다른 고양이 카페와는 구분하고 이용 조건을 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "브랜드 공식 사이트에서 고양이 카페를 확인. 프티트 무라의 てまりのおしろ와 별도 시설.",
        "remaining": "해당 지점의 최신 이용 연령·예약·요금·운영시간은 확인 필요.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "http://www.temarinoouchi.com/"
          }
        ]
      }
    },
    {
      "id": "place-29",
      "area": "기치조지",
      "name": "Avril Kichijōji",
      "address": "일본 〒180-0004 Tokyo, Musashino, Kichijoji Honcho, 3 Chome−10−3 エスカイア吉祥寺 1Ｆ6号",
      "url": "https://www.google.com/maps?cid=1755032973305058479",
      "lat": 35.7048661,
      "lng": 139.5713921,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Avril Kichijōji",
      "tone": "craft",
      "description": "실·뜨개 쇼핑을 우선할 때의 후보. 혼초 3-10-3에 저장돼 있어 북서쪽 매장 중에서도 서쪽으로 더 걸어가는 위치예요. 운영·취급품목은 방문 전 확인해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "현재 AVRIL 吉祥寺 공식 사이트에서 실 전문점 운영을 확인. 2024년 교토 AVRIL 폐업 공지는 기치조지 폐업 공지가 아님.",
        "remaining": "지도의 실매장 주소와 법적 사업자 주소가 다름. 방문 전 실매장 주소·시각 재확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.avril-kichijoji.com/"
          }
        ]
      }
    },
    {
      "id": "place-30",
      "area": "기치조지",
      "name": "L-musee",
      "address": "東京都武蔵野市吉祥寺本町2-12-2 (지도 주소·공식 미확인)",
      "url": "https://www.google.com/maps?cid=12092496146247976198",
      "lat": 35.7039723,
      "lng": 139.5762898,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "L-musee LABO",
      "tone": "browse",
      "description": "현재 지도는 혼초 2-12-2의 エル・ミューゼ中道通りLABO, 비즈점으로 표시합니다. 공식 지점 운영·취급품목은 확인이 부족해 실 전문점 코스에서는 빼고 골목의 선택 후보로 남겼어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도는 エル・ミューゼ中道通りLABO·吉祥寺本町2-12-2·비즈점으로 응답. 기치조지 지점의 공식 운영 확인은 부족.",
        "remaining": "공식 자료로 해당 지점의 현재 운영·입장 조건을 확인하지 못했습니다. 지도만으로 영업을 보장하지 않습니다.",
        "sources": []
      }
    },
    {
      "id": "place-31",
      "area": "기치조지",
      "name": "VENETIAN BAZAAR",
      "address": "4 Chome-1-1 Kichijoji Honcho, Musashino, Tokyo 180-0004 일본",
      "url": "https://www.google.com/maps?cid=12536700450337799676",
      "lat": 35.7048951,
      "lng": 139.5739378,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "VENETIAN BAZAAR",
      "tone": "craft",
      "description": "혼초 4-1-1의 베네치안 유리 전문점입니다. 뜨개 매장으로 묶었던 분류를 정정했어요. 공식 주말 영업은 11:00–18:00, 수요일 휴무이며 페이퍼메세지와 같은 서쪽 구역에서 골라요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "베네치안 유리 전문점. 吉祥寺本町4-1-1. 평일 12–17시, 토·일·공휴일 11–18시, 수요일 휴무.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.venetianbazaar.com/"
          }
        ]
      }
    },
    {
      "id": "place-10",
      "area": "신주쿠",
      "name": "몽벨 신주쿠미나미구치",
      "address": "일본 〒151-0053 Tokyo, Shibuya, Yoyogi, 2 Chome−4−9 Nmf Shinjuku Minamiguchi Building, 1階",
      "url": "https://www.google.com/maps?cid=17884812280338132625",
      "lat": 35.68757069999999,
      "lng": 139.6992203,
      "when": "11/29 일 오후",
      "status": "기치조지 후 여유 있을 때",
      "note": "기치조지 후 신주쿠에서 약 1.5~2.5시간을 쓸 수 있을 때 관심 매장 1~2곳. 남쪽 몽벨과 동쪽 세카이도·키디랜드 중 원하는 권역 선택. 기치조지에서 오래 머물면 생략. 하나조노 신사 시장 개최는 미확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "몽벨 신주쿠 남쪽출구",
      "tone": "outdoor",
      "description": "아웃도어 의류·용품 쇼핑 후보. 요요기 2-4-9의 역 남쪽 위치예요. 동쪽 세카이도·키디랜드와 방향이 달라 관심 있는 권역만 선택해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "신주쿠 남쪽점 代々木2-4-9 1F, 10:00–21:00. 지도와 공식 매장 주소 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://store.montbell.jp/search/shopinfo/?shop_no=618937"
          }
        ]
      }
    },
    {
      "id": "place-26",
      "area": "신주쿠",
      "name": "세카이도 신주쿠본점",
      "address": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−1−1 世界堂ビル 1F～5F",
      "url": "https://www.google.com/maps?cid=344607579707335171",
      "lat": 35.6900298,
      "lng": 139.7063963,
      "when": "11/29 일 오후",
      "status": "기치조지 후 여유 있을 때",
      "note": "기치조지 후 신주쿠에서 약 1.5~2.5시간을 쓸 수 있을 때 관심 매장 1~2곳. 남쪽 몽벨과 동쪽 세카이도·키디랜드 중 원하는 권역 선택. 기치조지에서 오래 머물면 생략. 하나조노 신사 시장 개최는 미확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "세카이도 신주쿠 본점",
      "tone": "paper",
      "description": "문구·미술재료에 관심 있을 때의 후보. 신주쿠 3-1-1에 저장돼 있어 신주쿠 동쪽 코스로 묶어요. 남은 시간에 1곳만 골라도 좋아요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "세계당 신주쿠본점 新宿3-1-1 1–5F, 09:30–20:00. 공식 매장 주소와 지도 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.sekaido.co.jp/store/77/"
          }
        ]
      }
    },
    {
      "id": "place-40",
      "area": "신주쿠",
      "name": "하나조노 신사",
      "address": "",
      "url": "https://www.google.com/maps?cid=4269457073854064468",
      "lat": 35.6935311,
      "lng": 139.7053279,
      "when": "11/29 일 오후",
      "status": "기치조지 후 여유 있을 때",
      "note": "기치조지 후 신주쿠에서 약 1.5~2.5시간을 쓸 수 있을 때 관심 매장 1~2곳. 남쪽 몽벨과 동쪽 세카이도·키디랜드 중 원하는 권역 선택. 기치조지에서 오래 머물면 생략. 하나조노 신사 시장 개최는 미확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "하나조노 신사",
      "tone": "walk",
      "description": "신주쿠 5초메 쪽 신사 산책 후보. 골동품 시장은 해당 날짜 개최가 확인된 경우에만 함께 구경하고, 시장이 없어도 신사 방문 자체는 별개로 생각해요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도는 신주쿠의 하나조노 신사 핀으로 응답. 신사 방문과 골동품시장 개최는 별개.",
        "remaining": "공식 사이트는 HTTP503으로 읽지 못함. 방문일 시장 개최·운영시간을 단정하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-44",
      "area": "신주쿠",
      "name": "키디랜드 신주쿠점",
      "address": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−23−17 オカダヤビル 1F～4F",
      "url": "https://www.google.com/maps?cid=15038129067309236490",
      "lat": 35.6929851,
      "lng": 139.7009716,
      "when": "11/29 일 오후",
      "status": "기치조지 후 여유 있을 때",
      "note": "기치조지 후 신주쿠에서 약 1.5~2.5시간을 쓸 수 있을 때 관심 매장 1~2곳. 남쪽 몽벨과 동쪽 세카이도·키디랜드 중 원하는 권역 선택. 기치조지에서 오래 머물면 생략. 하나조노 신사 시장 개최는 미확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "키디랜드 신주쿠",
      "tone": "character",
      "description": "신주쿠 3-23-17에 저장한 캐릭터 상품 매장. 기치조지에서 돌아오는 길에 추가 쇼핑을 원할 때만 선택하고, 다른 지점을 모두 순회할 필요는 없어요.",
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "신주쿠점 新宿3-23-17 オカダヤビル1–4F, 10:30–20:30. 공식 주소와 지도 일치.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.kiddyland.co.jp/shoplist/shinjuku/"
          }
        ]
      }
    },
    {
      "id": "place-28",
      "area": "미타카",
      "name": "미타카의 숲 지브리 미술관",
      "address": "1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013 일본",
      "url": "https://www.google.com/maps?cid=5611860688709652997",
      "lat": 35.696238,
      "lng": 139.5704317,
      "when": "11/29 일 선택 후보",
      "status": "미술관 입장 불필요·공원도 선택",
      "note": "미술관 자체는 미예약 입장을 기본 일정에 넣지 않음. 이노카시라 공원은 산책을 원할 때만 선택. 공원·미술관 근처 산책을 위해 쇼핑 시간을 의무 배정하지 않음.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "지브리 미술관 공식 사이트 확인. 나고야권 지브리 파크와 다른 도쿄 미타카 시설.",
        "remaining": "입장권을 확보한 시설이 아님. 미술관 입장은 기본 코스에 넣지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.ghibli-museum.jp/"
          }
        ]
      }
    },
    {
      "id": "place-25",
      "area": "이케부쿠로",
      "name": "더 비 이케부쿠로",
      "address": "1 Chome-39-4 Higashiikebukuro, Toshima City, Tokyo 170-0013 일본",
      "url": "https://www.google.com/maps?cid=9370746503280081282",
      "lat": 35.7323509,
      "lng": 139.7141748,
      "when": "숙소 참고",
      "status": "방문 대상 제외",
      "note": "지도 목록의 더 비 이케부쿠로는 숙박시설. 실제 예약 숙소를 뜻한다고 가정하지 않음. 이동 기준은 이케부쿠로역.",
      "excluded": true,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "the b 이케부쿠로의 공식 호텔 페이지 확인. 사용자 실제 예약 호텔로 확인된 것은 아님.",
        "remaining": "실제 호텔 예약 내역은 미확인. 코스는 이케부쿠로역 기준.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.theb-hotels.com/theb/ikebukuro"
          }
        ]
      }
    },
    {
      "id": "place-2",
      "area": "가마타",
      "name": "유자와야 카마타점",
      "address": "8 Chome-23-5 Nishikamata, Ota City, Tokyo 144-0051 일본",
      "url": "https://www.google.com/maps?cid=17632154140334788951",
      "lat": 35.5604625,
      "lng": 139.7146336,
      "when": "이번 기본안 제외",
      "status": "가마타 별도 반나절",
      "note": "이케부쿠로에서 도쿄 남쪽으로 왕복 부담. 유자와야 방문을 우선하면 다른 반나절과 교체; 동쪽/서쪽 기본 코스 끝에 추가하지 않음.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "가마타점 西蒲田8-23-5, 10:00–20:00. 2026/10/1 층 리뉴얼 안내 확인.",
        "remaining": "방문일 임시휴무·재고는 별도 확인.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.yuzawaya.co.jp/shop/detail/264.html"
          }
        ]
      }
    },
    {
      "id": "place-46",
      "area": "가와고에·사이타마",
      "name": "Chiikawa Mogumogu Hompo Kawagoe",
      "address": "일본 〒350-0062 Saitama, Kawagoe, Motomachi, 2 Chome−７番9",
      "url": "https://www.google.com/maps?cid=4061988407443016430",
      "lat": 35.9245452,
      "lng": 139.4815019,
      "when": "이번 기본안 제외",
      "status": "가와고에 반나절 이상",
      "note": "이케부쿠로 → 도부 도조선 가와고에 방면, 구도심까지 버스/도보 추가. 도쿄 시내 코스와 짧게 묶기보다 반나절 이상을 교체.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "모구모구 본포 공식 사이트에서 川越店 운영 관련 최신 공지를 확인.",
        "remaining": "카와고에 지점의 방문일 예약·주소·영업시간은 별도 확인. 다른 지역 지점 공지를 대신 적용하지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.chiikawamogumogu.jp/"
          }
        ]
      }
    },
    {
      "id": "place-5",
      "area": "도요스",
      "name": "6-chōme-4-25 Toyosu",
      "address": "6-chōme-4-25 Toyosu, Koto City, Tokyo 135-0061 일본",
      "url": "https://www.google.com/maps?cid=2612486849197134774",
      "lat": 35.647453,
      "lng": 139.7849792,
      "when": "이번 기본안 제외",
      "status": "도요스 목적 확인 후 교체",
      "note": "저장된 것은 주소 지점. 메모만으로 팀버튼 전시가 현재 그곳에서 열린다고 간주하지 않음. 실제 전시명·기간·입장 조건 확인 시 반나절 교체.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "저장 핀은 도요스6-4-25의 주소 지점.",
        "remaining": "팀버튼 전시의 행사명·실제 장소·운영기간 공식 확인 부족. 해당 전시를 이 위치의 현재 행사로 안내하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-43",
      "area": "마쿠하리·지바",
      "name": "Lawn Field",
      "address": "Toyosuna, Mihama Ward, Chiba, 261-0024 일본",
      "url": "https://www.google.com/maps?cid=18401650998579069896",
      "lat": 35.648477,
      "lng": 140.0274008,
      "when": "이번 기본안 제외",
      "status": "마쿠하리 별도 반나절 이상",
      "note": "좌표는 지바 마쿠하리권. 이케부쿠로에서 장거리 이동. 크리스마스마켓 개최를 메모만으로 확정하지 않으며 공항과 같은 지바현이라는 이유로 경유하지 않음.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "공식 확인 필요",
        "scope": "현재 지도 이름은 幕張海浜公園 Gブロック芝生広場. 저장 핀은 지바 마쿠하리권.",
        "remaining": "이 좌표에서 여행일 크리스마스마켓이 열린다는 공식 자료는 확인하지 못함. 주소만으로 행사를 확정하지 않음.",
        "sources": []
      }
    },
    {
      "id": "place-41",
      "area": "오이 경마장 주변",
      "name": "Tokyo City Flea Market",
      "address": "",
      "url": "https://www.google.com/maps?cid=18287830242295148613",
      "lat": 35.5949798,
      "lng": 139.7430414,
      "when": "이번 기본안 제외",
      "status": "개최 확인 후 반나절 교체",
      "note": "좌표상 오이 경마장 주변. JR 하마마쓰초 → 도쿄 모노레일 오이케이바조마에 등의 경로 후보. 개최일·입구·운영시간 확인 후 별도 반나절.",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "운영사 공식 일정에 11/28(토) 오이 경마장 TokyoCityFleaMarket 안내 확인. 저장 지도 위치와 대조.",
        "remaining": "당일 우천취소·입구·운영시간·여행 일정과의 교체 여부 별도 확인. 기본 코스에는 넣지 않음.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://trx.jp/"
          }
        ]
      }
    }
  ],
  "options": [
    {
      "id": "kichijoji-0",
      "day": "2026-11-29",
      "name": "문구·종이 쇼핑",
      "detail": "36 사브로 + 페이퍼메세지 중 관심 매장. 종이·문구 구경 중심.",
      "duration": "1~2시간",
      "travel": "역 북쪽~서쪽 잡화 골목. 가까운 다른 저장 매장과 조합.",
      "url": "",
      "note": "페이퍼메세지 11시, 사브로 12시 개점은 공식 안내 확인. 임시휴무·재고는 재확인.",
      "candidateGroups": [
        "kichijoji-paper"
      ]
    },
    {
      "id": "kichijoji-1",
      "day": "2026-11-29",
      "name": "실·뜨개 쇼핑",
      "detail": "AVRIL 기치조지·シープメドウ 중 선택. VENETIAN BAZAAR는 유리, L-musee는 지도상 비즈점으로 별도 잡화 후보.",
      "duration": "1~2시간",
      "travel": "북서쪽에 흩어진 매장들을 지도상 위치로 묶음. 한 골목의 같은 건물은 아님.",
      "url": "",
      "note": "AVRIL 브랜드 운영은 확인. 두 지점의 방문일 영업·재고는 재확인. 유리·비즈 후보를 실 매장으로 계산하지 않음.",
      "candidateGroups": [
        "kichijoji-yarn"
      ]
    },
    {
      "id": "kichijoji-2",
      "day": "2026-11-29",
      "name": "Temari no Ouchi",
      "detail": "저장해둔 고양이 카페 후보. 실내에서 오래 쉬고 싶을 때 검토.",
      "duration": "1~1.5시간",
      "travel": "북쪽 골목. 프티트 무라의 다른 고양이 카페와 상호 혼동 주의.",
      "url": "",
      "note": "입장·연령·이용·예약 조건과 영업 미확인."
    },
    {
      "id": "kichijoji-3",
      "day": "2026-11-29",
      "name": "하모니카 요코초",
      "detail": "좁은 골목 구경, 영업 중인 가게에서 식사·한잔.",
      "duration": "30~90분",
      "travel": "북쪽 출구 가까이. 귀가 전 식사로도 편리.",
      "url": "https://www.google.com/maps/search/?api=1&query=%E5%90%89%E7%A5%A5%E5%AF%BA+%E3%83%8F%E3%83%BC%E3%83%A2%E3%83%8B%E3%82%AB%E6%A8%AA%E4%B8%81",
      "note": "Maps 장소명·주소·좌표 확인. 골목 전체를 단일 영업시간으로 취급하지 않음."
    },
    {
      "id": "kichijoji-4",
      "day": "2026-11-29",
      "name": "선로드 상점가",
      "detail": "아케이드 상점가 구경, 간식·생활 쇼핑.",
      "duration": "30~60분",
      "travel": "북쪽 출구 가까이. 비가 올 때 대안. 숙소까지 모든 구간이 실내인 것은 아님.",
      "url": "https://www.google.com/maps/search/?api=1&query=%E5%90%89%E7%A5%A5%E5%AF%BA+%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E5%95%86%E5%BA%97%E8%A1%97",
      "note": "Maps 소개에서 지붕 있는 보행 상점가 확인. 개별 점포 영업 미확인."
    },
    {
      "id": "kichijoji-5",
      "day": "2026-11-29",
      "name": "기치조지 프티트 무라",
      "detail": "동화풍 건물 구경, 사진, 카페·잡화 구경 후보.",
      "duration": "30~90분",
      "travel": "기치조지 혼초 2-33-2. 페이퍼메세지·서쪽 잡화 골목과 연결.",
      "url": "https://www.google.com/maps/search/?api=1&query=%E5%90%89%E7%A5%A5%E5%AF%BA%E3%83%97%E3%83%86%E3%82%A3%E3%83%83%E3%83%88%E6%9D%91",
      "note": "공식 FAQ: 마을 자체는 입장 무료·예약 불필요. 중정은 주말·공휴일 10–20시. 내부 카페·가게 요금·예약 조건은 각각 확인."
    },
    {
      "id": "kichijoji-6",
      "day": "2026-11-29",
      "name": "HATTIFNATT 기치조지",
      "detail": "카페에서 쉬어가는 선택지.",
      "duration": "60~90분+대기",
      "travel": "미나미초 2-22-1. 역 동쪽으로 우회 필요, 북서쪽 잡화 골목 바로 옆은 아님.",
      "url": "https://www.google.com/maps/search/?api=1&query=HATTIFNATT+%E5%90%89%E7%A5%A5%E5%AF%BA%E3%81%AE%E3%81%8A%E3%81%86%E3%81%A1",
      "note": "공식 기치조지 카페는 11:30–21:00, 월·셋째 화요일 휴무. 동일 주소의 잡화점 영업과 구분. 당일 대기·임시휴무 확인."
    },
    {
      "id": "kichijoji-7",
      "day": "2026-11-29",
      "name": "이노카시라 공원",
      "detail": "연못 주변 가벼운 산책. 원하지 않으면 생략.",
      "duration": "30~90분",
      "travel": "역 남쪽. 북쪽 쇼핑 골목에서 남쪽으로 이동 필요.",
      "url": "https://www.google.com/maps/search/?api=1&query=%E4%BA%95%E3%81%AE%E9%A0%AD%E6%81%A9%E8%B3%9C%E5%85%AC%E5%9C%92",
      "note": "사용자 지시로 선택 후보만 유지. 단풍 절정·보트 운영 등 미확인."
    },
    {
      "id": "extra-0",
      "day": "2026-11-29",
      "name": "나카노 브로드웨이: 중고 캐릭터·만화·수집품 가게 구경",
      "detail": "기치조지 쇼핑 후",
      "duration": "2~3시간",
      "travel": "주오선 신주쿠 방면 귀환 경로. 역간 대략 15~25분+도보. 나카노를 골랐다면 신주쿠 쇼핑은 덧붙이지 않기.",
      "url": "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E9%87%8E%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A4",
      "note": "현재 11/29 기본 일정은 기치조지 + 보리스 필수 방문입니다. 이 후보는 기본안에 더하지 않으며, 별도 일정 재조정 때만 검토. Maps 쇼핑몰·만화/애니 관련 매장 소개 확인. 점포별 마감은 다름.",
      "candidateGroups": [
        "nakano"
      ]
    },
    {
      "id": "extra-1",
      "day": "2026-11-29",
      "name": "신주쿠: 세카이도·키디랜드 또는 몽벨 중 원하는 쪽",
      "detail": "기치조지 쇼핑 후",
      "duration": "1.5~2.5시간",
      "travel": "주오선으로 신주쿠, 이후 야마노테선 이케부쿠로. 역간 대략 20~30분+도보. 동쪽 매장과 남쪽 몽벨을 모두 넣지 않아도 됨.",
      "url": "",
      "note": "현재 11/29 기본 일정은 기치조지 + 보리스 필수 방문입니다. 이 후보는 기본안에 더하지 않으며, 별도 일정 재조정 때만 검토. 교통 시간은 가안, 실시간·여행일 시간표 미조회.",
      "candidateGroups": [
        "shinjuku"
      ]
    },
    {
      "id": "extra-2",
      "day": "2026-11-29",
      "name": "보리스 방문 후: Cosmo Space·키디랜드 중 한 곳",
      "detail": "11/29 보리스는 기본 일정의 꼭 방문 장소로 이동했습니다. 이 후보는 보리스 관람 뒤 여유가 남을 때만 선택.",
      "duration": "0~45분",
      "travel": "보리스에서 주변 매장으로 도보. 추가 쇼핑 후 하라주쿠역 등에서 이케부쿠로 방향으로 귀환.",
      "url": "",
      "note": "보리스 관람이 길어지면 모두 생략. 소우소우 방문이나 신주쿠·나카노 추가는 넣지 않음.",
      "candidateGroups": [
        "harajuku"
      ]
    },
    {
      "id": "extra-3",
      "day": "all",
      "name": "이케부쿠로: 파르코·선샤인 주변 미방문 매장 또는 식사",
      "detail": "어느 날 저녁이든",
      "duration": "1~2시간",
      "travel": "숙소권이어서 추가 장거리 이동 최소화. 이미 만족한 캐릭터 매장은 반복 방문 불필요.",
      "url": "",
      "note": "그날 매장 마감과 구매한 짐 양에 맞춰 조절.",
      "candidateGroups": [
        "ikebukuro"
      ]
    },
    {
      "id": "extra-4",
      "day": "2026-11-28",
      "name": "아사쿠사바시: Kiwa·Parts Club·West Five 중 선택",
      "detail": "11/28 닛포리·갓파바시를 일찍 마쳤을 때",
      "duration": "1.5~2.5시간",
      "travel": "부자재 쇼핑이 우선일 때. 점포가 닫기 전 시간을 확보해야 하므로 저녁에 남는 시간용으로 무조건 미루지 않음.",
      "url": "",
      "note": "토요일 공식 영업: 기와 본점 09:30–18:30, WEST5 10:00–18:30. Parts Club 현재 공식 지점 안내는 접근 제한으로 확인 부족. 기존 두 지역 중 하나와 교체.",
      "candidateGroups": [
        "asakusabashi"
      ]
    },
    {
      "id": "extra-5",
      "day": "2026-11-27",
      "name": "도쿄역 캐릭터스트리트·치이카와 랜드",
      "detail": "11/27 긴자를 일찍 마쳤을 때",
      "duration": "1~1.5시간",
      "travel": "긴자·교바시에서 가까운 편. 치이카와 추가 쇼핑을 원할 때만 선택. 포켓몬센터 방문 없음.",
      "url": "",
      "note": "치이카와 전 지점 방문 목표 없음. 개별 매장 마감 확인.",
      "candidateGroups": [
        "tokyo-station"
      ]
    }
  ],
  "extraVenues": [
    {
      "id": "extra-harmonica",
      "name": "Harmonica Yokocho",
      "displayName": "하모니카 요코초",
      "tone": "walk",
      "description": "역 북쪽의 좁은 골목을 구경하거나 식사할 때의 후보. 개별 점포마다 영업이 다르므로 열려 있는 가게를 보며 골라요.",
      "address": "1 Chome-1-3 Kichijoji Honcho, Musashino, Tokyo 180-0004, Japan",
      "lat": 35.7035959,
      "lng": 139.5790815,
      "url": "https://www.google.com/maps/search/?api=1&query=35.7035959,139.5790815",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "운영 사이트에서 하모니카 요코초를 확인. 11/17 지도 결과와 구역 명칭 대조.",
        "remaining": "골목 단위. 개별 식당 예약·영업은 별도.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "http://hamoyoko.jp/hamonika_kichijoji/"
          }
        ],
        "mapChecked": "2026-11-17"
      }
    },
    {
      "id": "extra-sunroad",
      "name": "Kichijoji SUNROAD shopping district",
      "displayName": "선로드 상점가",
      "tone": "browse",
      "description": "역 북쪽의 지붕 있는 상점가. 비가 오거나 간식·생활 쇼핑을 가볍게 더 하고 싶을 때의 후보예요. 개별 가게의 영업은 따로 확인해요.",
      "address": "1 Chome-15-1 Kichijoji Honcho, Musashino, Tokyo 180-0004, Japan",
      "lat": 35.7038362,
      "lng": 139.5798441,
      "url": "https://www.google.com/maps/search/?api=1&query=35.7038362,139.5798441",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "상점가 공식 사이트에서 吉祥寺サンロード를 확인. 11/17 지도 결과와 명칭 대조.",
        "remaining": "조합 사무실 주소는 상점가 대표 핀 주소와 다름. 개별 점포 영업 별도.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://sun-road.or.jp/"
          }
        ],
        "mapChecked": "2026-11-17"
      }
    },
    {
      "id": "extra-petitmura",
      "name": "Kichijōji Petit Mura",
      "displayName": "기치조지 프티트 무라",
      "tone": "cafe",
      "description": "동화풍 건물과 작은 가게·카페를 구경할 후보. 혼초 2-33-2에 있어 페이퍼메세지와 서쪽 잡화 골목을 볼 때 함께 연결하기 좋아요.",
      "address": "Japan, 〒180-0004 Tokyo, Musashino, Kichijoji Honcho, 2 Chome−33−2 吉祥寺プティット村",
      "lat": 35.7045998,
      "lng": 139.5746884,
      "url": "https://www.google.com/maps/search/?api=1&query=35.7045998,139.5746884",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "공식 주소 吉祥寺本町2-33-2와 11/17 지도 일치. 공식 FAQ는 마을 입장 무료·예약 불필요, 점포 조건은 별도로 안내.",
        "remaining": "과거 행사·코로나 휴업 공지는 현재 운영으로 일반화하지 않음. 당일 점포 영업은 별도.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://petitmura.com/"
          }
        ],
        "mapChecked": "2026-11-17"
      }
    },
    {
      "id": "extra-kichcafe",
      "name": "Hattifnatt",
      "displayName": "HATTIFNATT",
      "tone": "cafe",
      "description": "미나미초 2-22-1의 카페는 공식 안내상 11:30–21:00, 월·셋째 화요일 휴무입니다. 같은 주소 잡화점과 운영시간이 달라요. 북서쪽 쇼핑 골목에서 동쪽으로 이동하므로 여유가 있을 때만 선택해요.",
      "address": "2 Chome-22-1 Kichijoji Minamicho, Musashino, Tokyo 180-0003, Japan",
      "lat": 35.7032186,
      "lng": 139.5852559,
      "url": "https://www.google.com/maps/search/?api=1&query=35.7032186,139.5852559",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "교차 확인",
        "scope": "공식 기치조지 카페 주소 南町2-22-1과 11/17 지도 일치. 카페 11:30–21:00, 월·셋째 화요일 휴무.",
        "remaining": "같은 주소의 잡화점 11:00–19:00와 카페 운영을 구분. 임시휴무·예약·대기 별도.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://www.hattifnatt.jp/blank-1"
          }
        ],
        "mapChecked": "2026-11-17"
      }
    },
    {
      "id": "extra-nakano",
      "name": "Nakano Broadway",
      "displayName": "나카노 브로드웨이",
      "tone": "character",
      "description": "중고 캐릭터·만화·수집품 가게 구경 후보. 나카노역 북쪽의 쇼핑몰로, 기치조지에서 주오선으로 이동하는 교체 코스예요. 신주쿠 쇼핑까지 모두 덧붙이지 않아도 돼요.",
      "address": "5 Chome-52-15 Nakano, Nakano City, Tokyo 164-0001, Japan",
      "lat": 35.7092475,
      "lng": 139.6656524,
      "url": "https://www.google.com/maps/search/?api=1&query=35.7092475,139.6656524",
      "excluded": false,
      "lowPriority": false,
      "verification": {
        "checked": "2026-11-18",
        "level": "일부 확인",
        "scope": "나카노 브로드웨이 공식 몰과 11/17 지도 명칭을 대조.",
        "remaining": "각 점포·층별 운영 및 마감은 별도.",
        "sources": [
          {
            "label": "공식 안내",
            "url": "https://nakano-broadway.com/"
          }
        ],
        "mapChecked": "2026-11-17"
      }
    },
    {
      "id": "extra-daiso-ginza",
      "name": "다이소 마로니에 게이트 긴자점 (DAISO)",
      "displayName": "다이소 긴자 대형점",
      "area": "긴자·교바시·유라쿠초",
      "address": "東京都中央区銀座3-2-1 マロニエゲート銀座2 6F",
      "lat": 35.6736,
      "lng": 139.7651429,
      "url": "https://www.google.com/maps/search/?api=1&query=DAISO%20%E3%83%9E%E3%83%AD%E3%83%8B%E3%82%A8%E3%82%B2%E3%83%BC%E3%83%88%E9%8A%80%E5%BA%A7%E5%BA%97%20%E9%8A%80%E5%BA%A73-2-1",
      "tone": "browse",
      "required": true,
      "savedByUser": true,
      "excluded": false,
      "lowPriority": false,
      "status": "대형점 · 가방 제품·재고 확인 목적",
      "when": "11/27 금 17:30–18:15",
      "note": "긴자 원래 쇼핑 90분은 유지하고 뒤에 45분 추가. 닌텐도 가방의 정확한 제품은 사용자 확인 대기, 해당 제품 판매·현장 재고는 미확인.",
      "description": "공식적으로 ‘대형점’인 다이소. 마로니에 게이트 긴자2 6층, 11:00–21:00. 무인양품·로프트와 가까운 긴자 쇼핑 구역에 묶었어요. 닌텐도 가방은 제품명·모델 확인 후 재고를 조회하고, 매장에 반드시 있다는 뜻은 아니에요.",
      "coordinateSource": "https://www.daiso-sangyo.co.jp/shop/detail/009168",
      "verification": {
        "checked": "2026-11-19",
        "level": "공식 매장 확인",
        "scope": "DAISO 공식 매장 검색 결과와 상세 페이지 모두 マロニエゲート銀座店을 大型店으로 분류하고 銀座3-2-1 マロニエゲート銀座2 6階·11:00–21:00를 안내. 좌표 35.6736000,139.7651429는 공식 매장 지도·경로 링크와 일치. 공식 앱은 매장·상품명으로 재고 검색 기능을 안내.",
        "remaining": "요청한 닌텐도 가방의 정확한 제품명·모델은 확인 대기. 해당 가방 판매·현장 재고 미확인. 큰 매장이라는 사실이 특정 상품 재고를 보장하지 않음. 쇼핑몰 공식 사이트는 이번 접속에서 읽지 못해 교차 근거로 쓰지 않음.",
        "sources": [
          {
            "label": "DAISO 공식 매장 상세",
            "url": "https://www.daiso-sangyo.co.jp/shop/detail/009168"
          },
          {
            "label": "DAISO 공식 검색 결과",
            "url": "https://www.daiso-sangyo.co.jp/shop/result?keyword=%E3%83%9E%E3%83%AD%E3%83%8B%E3%82%A8"
          },
          {
            "label": "공식 재고 검색 앱 안내",
            "url": "https://www.daiso-sangyo.co.jp/app"
          }
        ]
      }
    }
  ],
  "venueGroups": {
    "ikebukuro": {
      "label": "이케부쿠로 역·선샤인시티",
      "anchor": {
        "lat": 35.7308568,
        "lng": 139.7123844
      },
      "placeIds": [
        "place-49",
        "place-3",
        "place-7",
        "place-47"
      ]
    },
    "ikebukuro-clothes": {
      "label": "히가시이케부쿠로",
      "anchor": {
        "lat": 35.7300281,
        "lng": 139.7154827
      },
      "placeIds": [
        "place-7"
      ]
    },
    "ginza": {
      "label": "긴자·교바시",
      "anchor": {
        "lat": 35.6731273,
        "lng": 139.7672138
      },
      "placeIds": [
        "place-35",
        "place-33",
        "place-34",
        "place-39",
        "place-11"
      ]
    },
    "nippori": {
      "label": "닛포리 원단거리",
      "anchor": {
        "lat": 35.7284489,
        "lng": 139.7733819
      },
      "placeIds": [
        "place-37",
        "place-38",
        "place-27"
      ]
    },
    "kappabashi": {
      "label": "갓파바시 도구거리",
      "anchor": {
        "lat": 35.7125937,
        "lng": 139.7886804
      },
      "placeIds": [
        "place-17",
        "place-4",
        "place-18",
        "place-19",
        "place-16",
        "place-20"
      ]
    },
    "kichijoji-shops": {
      "label": "기치조지 북쪽·서쪽 골목",
      "anchor": {
        "lat": 35.705693,
        "lng": 139.5784638
      },
      "placeIds": [
        "place-13",
        "place-31",
        "place-12",
        "place-14",
        "place-29",
        "place-30"
      ]
    },
    "kichijoji-paper": {
      "label": "기치조지 문구·종이",
      "anchor": {
        "lat": 35.705693,
        "lng": 139.5784638
      },
      "placeIds": [
        "place-13",
        "place-12"
      ]
    },
    "kichijoji-yarn": {
      "label": "기치조지 실·뜨개",
      "anchor": {
        "lat": 35.7062028,
        "lng": 139.5759337
      },
      "placeIds": [
        "place-14",
        "place-29"
      ]
    },
    "kichijoji-break": {
      "label": "기치조지 골목·카페",
      "anchor": {
        "lat": 35.704961,
        "lng": 139.5770375
      },
      "placeIds": [
        "extra-petitmura",
        "place-15",
        "extra-harmonica",
        "extra-sunroad",
        "extra-kichcafe"
      ]
    },
    "kichijoji-lunch": {
      "label": "기치조지 역 북쪽",
      "anchor": {
        "lat": 35.7035959,
        "lng": 139.5790815
      },
      "placeIds": [
        "extra-harmonica",
        "extra-sunroad"
      ]
    },
    "shinjuku": {
      "label": "신주쿠 역 주변",
      "anchor": {
        "lat": 35.690921,
        "lng": 139.700258
      },
      "placeIds": [
        "place-26",
        "place-44",
        "place-10",
        "place-40"
      ]
    },
    "nakano": {
      "label": "나카노 역 북쪽",
      "anchor": {
        "lat": 35.705765,
        "lng": 139.665837
      },
      "placeIds": [
        "extra-nakano"
      ]
    },
    "harajuku": {
      "label": "보리스 방문 후 주변 선택",
      "anchor": {
        "lat": 35.6688739,
        "lng": 139.7113136
      },
      "placeIds": [
        "place-8",
        "place-45"
      ]
    },
    "asakusabashi": {
      "label": "아사쿠사바시 역 주변",
      "anchor": {
        "lat": 35.6975,
        "lng": 139.7858
      },
      "placeIds": [
        "place-22",
        "place-23",
        "place-21"
      ]
    },
    "tokyo-station": {
      "label": "도쿄역 캐릭터스트리트",
      "anchor": {
        "lat": 35.6820335,
        "lng": 139.7686549
      },
      "placeIds": [
        "place-52",
        "place-51"
      ]
    },
    "boris": {
      "label": "보리스 잡화점 · 꼭 방문",
      "anchor": {
        "lat": 35.6688739,
        "lng": 139.7113136
      },
      "placeIds": [
        "place-42"
      ],
      "required": true
    },
    "daiso-ginza": {
      "label": "다이소 긴자 대형점 · 구매 목적",
      "anchor": {
        "lat": 35.6736,
        "lng": 139.7651429
      },
      "placeIds": [
        "extra-daiso-ginza"
      ],
      "required": true
    }
  }
};
if (typeof module !== "undefined" && module.exports) module.exports = globalThis.TOKYO_TRIP_DATA;
