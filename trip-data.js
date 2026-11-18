// Summary checked against the live Google Sheet; details and choices from the prepared trip workbook.
globalThis.TOKYO_TRIP_DATA = {
  "updated": "2026-11-18",
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
        "afternoon": "입국 → 숙소 짐 보관 → 근처 한 권역",
        "evening": "저녁·휴식",
        "adjust": "입국 지연 시 쇼핑 생략"
      },
      "route": [
        "나리타",
        "이케부쿠로 숙소",
        "주변 쇼핑"
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
          "id": "2026-11-26-1600-c3475998",
          "start": "16:00",
          "end": "17:30",
          "kind": "선택",
          "name": "이케부쿠로 주변 쇼핑 한 권역",
          "detail": "역 주변과 선샤인시티 중 관심 있는 권역을 골라요.",
          "adjust": "두 권역 완주 불필요. 치이카와 매장 추가 방문은 선택",
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
      "region": "파크·긴자",
      "title": "치이카와 파크, 그리고 긴자",
      "summary": {
        "morning": "11:40–12:00 파크 입장 예약",
        "afternoon": "관람·점심 → 긴자 2곳 정도",
        "evening": "식사 → 숙소",
        "adjust": "파크가 늦어지면 긴자 축소"
      },
      "route": [
        "이케부쿠로",
        "치이카와 파크",
        "긴자",
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
          "adjust": "14:00은 예상 퇴장 시각이며 체류 제한 아님. 늦어지면 오후 축소",
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
          "id": "2026-11-27-1730-d960d099",
          "start": "17:30",
          "end": "18:30",
          "kind": "식사",
          "name": "긴자 카페·저녁",
          "detail": "쇼핑한 권역에서 선택",
          "adjust": "도쿄역 캐릭터 쇼핑은 이 구간 일부와 교체, 포켓몬 제외",
          "url": "https://www.google.com/maps/search/?api=1&query=Ginza+Tokyo",
          "reserved": false
        },
        {
          "id": "2026-11-27-1830-e9dbdc9d",
          "start": "18:30",
          "end": "19:30",
          "kind": "이동",
          "name": "숙소 복귀",
          "detail": "마루노우치선 이케부쿠로 방향 + 도보",
          "adjust": "짐이 많으면 다른 지역 추가 방문 생략",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        }
      ]
    },
    {
      "id": "2026-11-28",
      "date": "11.28",
      "dow": "토",
      "region": "닛포리·갓파바시",
      "title": "원단과 그릇을 만나는 날",
      "summary": {
        "morning": "원단·TOMATO 쇼핑",
        "afternoon": "그릇·유리·앞치마 쇼핑",
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
          "name": "갓파바시 그릇·유리·앞치마 쇼핑",
          "detail": "아래 후보 중 관심 있는 2~3곳을 골라요. 이름 없는 핀은 골목 구경에 포함해요.",
          "adjust": "상호 없는 그릇가게는 Takenokodo 주변 골목 구경에 포함",
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
      ]
    },
    {
      "id": "2026-11-29",
      "date": "11.29",
      "dow": "일",
      "region": "기치조지 필수",
      "title": "기치조지에서 마음 가는 대로",
      "summary": {
        "morning": "북쪽 잡화 골목",
        "afternoon": "점심·추가 매장·카페 → 잔류/신주쿠/나카노 중 하나",
        "evening": "귀환·짐 정리",
        "adjust": "공원 선택. 포켓몬 제외·소우소우 후순위"
      },
      "route": [
        "이케부쿠로",
        "기치조지",
        "선택 코스 한 곳",
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
          "name": "문구·종이 또는 실·뜨개 쇼핑",
          "detail": "문구·종이 또는 실·뜨개 중 취향에 맞는 곳을 골라요.",
          "adjust": "모든 후보 완주 대신 취향에 맞는 1~2곳",
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
          "end": "15:00",
          "kind": "선택",
          "name": "추가 잡화 쇼핑 또는 카페",
          "detail": "잡화 골목을 더 보거나 카페에서 쉬는 코스로 바꿔도 좋아요.",
          "adjust": "공원·HATTIFNATT는 동선과 대기에 따라 교체",
          "url": "https://www.google.com/maps/search/?api=1&query=Kichijoji+Petit+Mura",
          "reserved": false,
          "candidateGroups": [
            "kichijoji-break"
          ]
        },
        {
          "id": "2026-11-29-1500-35f59be6",
          "start": "15:00",
          "end": "15:15",
          "kind": "판단",
          "name": "오늘 남은 코스 하나 선택",
          "detail": "① 기치조지 잔류 ② 신주쿠 ③ 나카노",
          "adjust": "신주쿠+나카노 둘 다 추가하지 않기",
          "url": "https://www.google.com/maps/search/?api=1&query=Kichijoji+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1515-5f2947d8",
          "start": "15:15",
          "end": "17:30",
          "kind": "분기 선택",
          "name": "선택한 한 코스에서 구경·휴식",
          "detail": "기치조지에 머물러도 괜찮아요. 다른 지역으로 이동한다면 아래 두 구역 중 한 곳만 골라요.",
          "adjust": "잔류 시 잡화·카페·선로드·공원 중 선택. 개별 점포 마감 확인",
          "url": "",
          "reserved": false,
          "candidateGroups": [
            "shinjuku",
            "nakano"
          ]
        },
        {
          "id": "2026-11-29-1730-90a2648d",
          "start": "17:30",
          "end": "18:30",
          "kind": "이동",
          "name": "이케부쿠로 숙소 귀환",
          "detail": "기치조지·나카노 → 신주쿠 경유 JR 등",
          "adjust": "출발 지역에 따라 경로·시간 재조회",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1830-5be957ed",
          "start": "18:30",
          "end": "19:30",
          "kind": "식사",
          "name": "마지막 저녁",
          "detail": "숙소권에서 편하게 식사",
          "adjust": "쇼핑 미련보다 귀국 준비 여유 확보",
          "url": "https://www.google.com/maps/search/?api=1&query=Ikebukuro+Station",
          "reserved": false
        },
        {
          "id": "2026-11-29-1930-9233cd1b",
          "start": "19:30",
          "end": "20:30",
          "kind": "준비",
          "name": "짐 정리·공항 열차 확인",
          "detail": "여권·항공권·수하물·터미널 점검",
          "adjust": "공항 09:00 도착에 맞는 실제 열차를 선택",
          "url": "",
          "reserved": false
        }
      ]
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
          "name": "공항 도착·체크인·수하물·보안",
          "detail": "항공사 지정 터미널·카운터",
          "adjust": "면세 물품 관련 출국 절차는 공식 확인 후 반영 필요",
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
      ]
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
      "description": "에반게리온 관련 상품을 보고 싶을 때의 후보. 저장된 위치는 이케부쿠로 PARCO 본관 6층으로, 파르코를 들를 때 함께 확인하기 좋아요."
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
      "description": "히가시이케부쿠로 1-21-4에 저장한 지점. 여행 중 필요한 옷을 살 때만 선택하고, 이미 준비가 됐다면 생략해도 돼요."
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
      "description": "선샤인시티 알파 2층에 저장한 캐릭터 상품 매장. 파르코 쪽과는 다른 권역이니 원하는 상품이 있는 쪽을 골라요. 치이카와 관련 입장 공지는 별도 확인이 필요해요."
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
      "description": "역 동쪽의 파르코 쇼핑 후보. 에반게리온 스토어와 같은 건물로 저장돼 있어 묶기 좋아요. 특정 캐릭터 매장의 현재 층·입장 방식은 방문 전 확인해요."
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
      "lowPriority": false
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
      "lowPriority": false
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
      "description": "아웃도어 의류·용품을 살펴볼 후보. 저장된 위치는 교바시 도쿄 스퀘어가든 1·2층이에요. 긴자 중심 매장들보다 북동쪽이므로 관심 있을 때 동선을 늘려요."
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
      "description": "문구·생활 잡화 구경 후보. 긴자 2-4-6에 저장돼 있어 이토야·무인양품과 같은 긴자 쇼핑 구간으로 묶을 수 있어요."
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
      "description": "생활용품·의류·문구를 한 번에 살펴볼 후보. 저장된 위치는 긴자 3-3-5예요. 살 것이 많다면 이후 매장을 줄이고 짐을 숙소에 가져가도 좋아요."
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
      "description": "문구·종이 제품을 보고 싶을 때 우선 살펴볼 후보. 긴자 2-7-15에 저장돼 있어 긴자 로프트와 같은 구역에서 비교해보기 좋아요."
    },
    {
      "id": "place-39",
      "area": "긴자·교바시·유라쿠초",
      "name": "Feiler Ginza",
      "address": "",
      "url": "https://www.google.com/maps?cid=9295772223182406052",
      "lat": 35.6724604,
      "lng": 139.7651295,
      "when": "11/27 금 오후",
      "status": "기본 코스 후보",
      "note": "파크 후 긴자·교바시. 5곳 완주가 아니라 취향에 따라 2~3곳 선택. Feiler는 장소명·좌표 기준 긴자 분류, 메모로 다른 매장으로 바꾸지 않음.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Feiler Ginza",
      "tone": "browse",
      "description": "손수건·패브릭 소품을 살펴볼 긴자 후보. 이름과 좌표가 긴자이므로 이곳에 배치했어요. 기존 오모테산도 관련 메모와는 구분해요."
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
      "lowPriority": false
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
      "description": "도쿄역 안에 저장한 치이카와 상품 매장. 캐릭터스트리트와 같은 구역이므로 추가 쇼핑이 필요할 때만 선택해요. 예약·정리권 여부는 해당 날짜의 공식 공지를 확인해야 해요."
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
      "description": "도쿄역 이치방가이 지하 1층에 저장한 캐릭터 쇼핑 구역. 개별 매장 하나가 아니라 여러 매장을 구경하는 후보예요. 치이카와 랜드와 중복 왕복하지 않아도 돼요."
    },
    {
      "id": "place-24",
      "area": "긴자·교바시·유라쿠초",
      "name": "Oedo Antique Market",
      "address": "",
      "url": "https://www.google.com/maps?cid=9543162483212471229",
      "lat": 35.6773272,
      "lng": 139.7645021,
      "when": "11/27 금 오후 또는 다른 날",
      "status": "개최 확인 후 교체",
      "note": "좌표상 유라쿠초·도쿄국제포럼 주변. 방문일 개최가 확인될 때만 긴자 일정 일부와 교체. 상설 시장으로 간주하지 않음.",
      "excluded": false,
      "lowPriority": false
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
      "description": "목록에 체인·마감 장식 등 부자재 관심 장소로 저장한 곳. 아사쿠사바시 1-23-1에 있어 역 주변 부자재 쇼핑 코스로 묶어요."
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
      "description": "비즈·펜던트를 살펴볼 후보. 저장된 위치는 아사쿠사바시 2-1-10, 기와제작소 본점 건물이에요. Parts Club과 함께 비교할 곳으로 골라볼 수 있어요."
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
      "description": "비즈·펜던트 쇼핑 후보. 야나기바시 1-20-1에 저장돼 있어 아사쿠사바시 부자재 구역에서 함께 살펴보기 좋아요."
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
      "lowPriority": false
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
      "lowPriority": false
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
      "description": "원단거리 쇼핑 중 선택할 저장 항목. 히가시닛포리 5-33-8의 2층으로 저장돼 있어 아래 Notions-kan과 같은 건물의 층별 후보로 묶어요. 현재 취급품목은 현장에서 확인해요."
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
      "description": "원단·부자재 가게들을 둘러보는 거리 단위 후보. TOMATO 한 건물에만 머물거나 주변 가게를 더 볼지 구매 목적과 짐의 양에 맞춰 정해요."
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
      "description": "히가시닛포리 5-33-8의 1층으로 저장한 항목. Select-kan과 별도 지역으로 이동하는 일정이 아니라 같은 건물 안에서 비교할 후보예요."
    },
    {
      "id": "place-4",
      "area": "아사쿠사·갓파바시",
      "name": "Seven Uniform",
      "address": "일본 〒111-0035 Tokyo, Taito City, Nishiasakusa, 1 Chome−5−17 第2京成ビル 1F",
      "url": "https://www.google.com/maps?cid=10567520280451807035",
      "lat": 35.7121073,
      "lng": 139.7885986,
      "when": "11/28 토 오후",
      "status": "기본 코스 후보",
      "note": "닛포리 → 우에노 경유 → 갓파바시. 5곳 완주 대신 관심 매장 2~3곳과 골목 산책. 당일 영업·마감 우선 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Seven Uniform",
      "tone": "craft",
      "description": "앞치마를 보고 싶어 저장한 후보. 니시아사쿠사 1-5-17의 1층 위치로, 갓파바시 그릇·유리 가게 구경과 함께 들를 수 있어요."
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
      "displayName": "Takenokodo",
      "tone": "browse",
      "description": "목록에 앤티크숍 관심 장소로 저장한 곳. 마쓰가야 3-17-13에 있고, 이름 없는 그릇가게 핀 바로 근처라 같은 골목으로 묶어 구경해요."
    },
    {
      "id": "place-17",
      "area": "아사쿠사·갓파바시",
      "name": "Takahashi Sōhonten",
      "address": "1 Chome-9-13 Matsugaya, Taito City, Tokyo 111-0036 일본",
      "url": "https://www.google.com/maps?cid=10384531620015108929",
      "lat": 35.711371,
      "lng": 139.7882007,
      "when": "11/28 토 오후",
      "status": "기본 코스 후보",
      "note": "닛포리 → 우에노 경유 → 갓파바시. 5곳 완주 대신 관심 매장 2~3곳과 골목 산책. 당일 영업·마감 우선 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Takahashi Sōhonten",
      "tone": "craft",
      "description": "유리공예에 관심 있어 저장한 후보. 마쓰가야 1-9-13에 있어 이 후보 목록의 남쪽부터 구경할 때 먼저 확인하기 좋아요."
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
      "displayName": "TSUCHI-YA",
      "tone": "craft",
      "description": "유리 그릇·공예에 관심 있을 때 살펴볼 후보. 저장된 위치는 니시아사쿠사 2-5-4예요. 다른 그릇가게와 취향을 비교하며 2~3곳만 골라도 충분해요."
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
      "description": "정식 상호와 주소가 없는 저장 핀이에요. Takenokodo 근처 좌표를 기준으로 골목의 그릇·유리 매대를 둘러보는 후보로 묶었어요. 특정 매장이나 세일을 보장하는 표시는 아니에요."
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
      "displayName": "갓파바시 그릇 골목",
      "tone": "walk",
      "description": "마쓰가야 3-18-2에 저장한 그릇쇼핑 지점. 한 가게 입장을 확정하기보다 북쪽 골목을 더 둘러볼 때의 기준점으로 활용해요."
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "description": "목록에 원석 관심 장소로 저장한 매장. 진구마에 3-22-11에 있어 하라주쿠·오모테산도 코스를 선택했을 때 후보로 확인해요."
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
      "lowPriority": true
    },
    {
      "id": "place-42",
      "area": "하라주쿠·오모테산도·아오야마",
      "name": "Boris Zakkaten",
      "address": "",
      "url": "https://www.google.com/maps?cid=10783324310941095014",
      "lat": 35.6688739,
      "lng": 139.7113136,
      "when": "다른 일정 일부와 교체",
      "status": "기치조지 보존, 별도 선택",
      "note": "기치조지는 대체하지 않음. 원한다면 신주쿠 또는 긴자 구간을 줄여 하라주쿠·오모테산도를 선택. 소우소우를 위한 아오야마 연장은 제외.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "Boris Zakkaten",
      "tone": "browse",
      "description": "히구치 유코 관련 잡화를 보고 싶을 때의 후보. 저장된 진구마에 좌표를 기준으로 배치했어요. 최신 영업·입장 조건은 방문 전 확인해요."
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
      "description": "진구마에 6-1-9에 저장한 캐릭터 상품 매장. 이케부쿠로에서 쇼핑을 마쳤다면 생략하고 Boris·Cosmo Space에 시간을 써도 좋아요."
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
      "description": "기치조지에서 문구·종이 제품을 구경할 후보. 혼초 2-4-16 건물 2층으로 저장돼 있어 북쪽 잡화 골목 코스에 넣었어요."
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
      "description": "종이용품을 보고 싶을 때 살펴볼 후보. 혼초 4-1-3에 저장돼 있고 프티트 무라·서쪽 잡화 골목과 연결해 구경하기 좋아요."
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
      "description": "실·뜨개 쇼핑 후보로 묶어둔 곳. 저장된 위치는 혼초 2-27-8로, 북서쪽 다른 저장 매장들과 함께 선택해요. 품목·재고·영업은 방문 전 확인해요."
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
      "description": "저장해둔 고양이 카페 후보. 혼초 2-13-14 건물 3층에 저장돼 있어 쇼핑 중 실내에서 쉬고 싶을 때 검토해요. 프티트 무라의 다른 고양이 카페와는 구분하고 이용 조건을 확인해요."
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
      "description": "실·뜨개 쇼핑을 우선할 때의 후보. 혼초 3-10-3에 저장돼 있어 북서쪽 매장 중에서도 서쪽으로 더 걸어가는 위치예요. 운영·취급품목은 방문 전 확인해요."
    },
    {
      "id": "place-30",
      "area": "기치조지",
      "name": "L-musee",
      "address": "",
      "url": "https://www.google.com/maps?cid=12092496146247976198",
      "lat": 35.7039723,
      "lng": 139.5762898,
      "when": "11/29 일 오전~이른 오후",
      "status": "필수 지역 안의 선택 매장",
      "note": "기치조지 필수 방문은 유지. 북쪽 잡화 골목에서 취향에 맞는 곳 선택. 공원 산책은 필수가 아니며 쇼핑·카페·공원 중 현장에서 조합. 다른 지역으로 이동하려면 오후 잔여시간 확인.",
      "excluded": false,
      "lowPriority": false,
      "displayName": "L-musee",
      "tone": "browse",
      "description": "기치조지 북쪽 골목에 저장한 매장. 원본 목록에 주소가 없어 좌표를 기준으로 묶었어요. 정식 상호·취급품목을 확인하면서 주변 골목과 함께 구경하는 후보예요."
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
      "tone": "browse",
      "description": "혼초 4-1-1에 저장한 매장으로, 페이퍼메세지와 가까운 같은 골목의 후보예요. 취급품목·영업은 미확인이므로 주변을 구경할 때 함께 확인해요."
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
      "description": "아웃도어 의류·용품 쇼핑 후보. 요요기 2-4-9의 역 남쪽 위치예요. 동쪽 세카이도·키디랜드와 방향이 달라 관심 있는 권역만 선택해요."
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
      "description": "문구·미술재료에 관심 있을 때의 후보. 신주쿠 3-1-1에 저장돼 있어 신주쿠 동쪽 코스로 묶어요. 남은 시간에 1곳만 골라도 좋아요."
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
      "description": "신주쿠 5초메 쪽 신사 산책 후보. 골동품 시장은 해당 날짜 개최가 확인된 경우에만 함께 구경하고, 시장이 없어도 신사 방문 자체는 별개로 생각해요."
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
      "description": "신주쿠 3-23-17에 저장한 캐릭터 상품 매장. 기치조지에서 돌아오는 길에 추가 쇼핑을 원할 때만 선택하고, 다른 지점을 모두 순회할 필요는 없어요."
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
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
      "note": "목록 장소명·주소·좌표 확인, 최신 영업 미확인",
      "candidateGroups": [
        "kichijoji-paper"
      ]
    },
    {
      "id": "kichijoji-1",
      "day": "2026-11-29",
      "name": "실·뜨개 쇼핑",
      "detail": "Avril Kichijōji + シープメドウ 중 선택. VENETIAN BAZAAR·L-musee는 주변 저장 후보로 유지.",
      "duration": "1~2시간",
      "travel": "북서쪽에 흩어진 매장들을 지도상 위치로 묶음. 한 골목의 같은 건물은 아님.",
      "url": "",
      "note": "취급 품목·재고·영업은 방문 전 확인. 미확인 매장의 품목을 단정하지 않음.",
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
      "note": "Maps 장소명·주소·소개 확인. 대형 테마파크 방문처럼 긴 시간을 잡지 않음. 시설별 입장·주문 조건 미확인."
    },
    {
      "id": "kichijoji-6",
      "day": "2026-11-29",
      "name": "HATTIFNATT 기치조지",
      "detail": "카페에서 쉬어가는 선택지.",
      "duration": "60~90분+대기",
      "travel": "미나미초 2-22-1. 역 동쪽으로 우회 필요, 북서쪽 잡화 골목 바로 옆은 아님.",
      "url": "https://www.google.com/maps/search/?api=1&query=HATTIFNATT+%E5%90%89%E7%A5%A5%E5%AF%BA%E3%81%AE%E3%81%8A%E3%81%86%E3%81%A1",
      "note": "Maps 카페 분류·주소·좌표 확인. 메뉴·이용 조건·영업시간 미확인."
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
      "note": "Maps 쇼핑몰·만화/애니 관련 매장 소개 확인. 점포별 마감은 다름.",
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
      "note": "교통 시간은 가안, 실시간·여행일 시간표 미조회.",
      "candidateGroups": [
        "shinjuku"
      ]
    },
    {
      "id": "extra-2",
      "day": "2026-11-29",
      "name": "하라주쿠·오모테산도: Boris·Cosmo Space·키디랜드 중 1~2곳",
      "detail": "기치조지를 이르게 마쳤을 때",
      "duration": "3~4시간",
      "travel": "신주쿠 경유 하라주쿠 등으로 이동. 문전 이동 약 45~65분 여유. 소우소우 때문에 아오야마까지 연장하지 않음.",
      "url": "",
      "note": "개별 매장 마감 전 도착 가능할 때 선택. 귀환·저녁 시간 별도 확보.",
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
      "note": "토요일 영업·마감 미확인. 필요하면 기존 두 지역 중 하나와 교체.",
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
      "lowPriority": false
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
      "lowPriority": false
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
      "lowPriority": false
    },
    {
      "id": "extra-kichcafe",
      "name": "Hattifnatt",
      "displayName": "HATTIFNATT",
      "tone": "cafe",
      "description": "기치조지 미나미초 2-22-1에 저장된 카페 후보. 역 동쪽으로 이동해야 하므로 북서쪽 쇼핑 골목 바로 옆으로 생각하지 말고 여유가 있을 때 선택해요.",
      "address": "2 Chome-22-1 Kichijoji Minamicho, Musashino, Tokyo 180-0003, Japan",
      "lat": 35.7032186,
      "lng": 139.5852559,
      "url": "https://www.google.com/maps/search/?api=1&query=35.7032186,139.5852559",
      "excluded": false,
      "lowPriority": false
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
      "lowPriority": false
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
        "place-12",
        "place-13",
        "place-14",
        "place-29",
        "place-30",
        "place-31"
      ]
    },
    "kichijoji-paper": {
      "label": "기치조지 문구·종이",
      "anchor": {
        "lat": 35.705693,
        "lng": 139.5784638
      },
      "placeIds": [
        "place-12",
        "place-13"
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
        "place-29",
        "place-30",
        "place-31"
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
      "label": "하라주쿠·오모테산도",
      "anchor": {
        "lat": 35.6688739,
        "lng": 139.7113136
      },
      "placeIds": [
        "place-42",
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
    }
  }
};
if (typeof module !== "undefined") module.exports = globalThis.TOKYO_TRIP_DATA;
