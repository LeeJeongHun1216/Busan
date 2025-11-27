const CULTURE_SPOTS = [
      {id:"port",title:"부산항 개항장 (초량왜관~일본조계지)",period:"1876~1910",location:"중구 초량동·부평동 일대",keywords:"다문화 상업지구 · 유네스코 세계기록유산",summary:"강화도조약 이후 세계 상인이 드나든 부산 근대화의 출발점.",highlights:["1876년 개항과 함께 청·일·서양 상인 유입","초량왜관에서 일본조계지로 확장된 국제무역 거리","부산근대역사관 건물군(등록문화재 제48호 등) 보존","2023년 ‘부산개항장 기록물’ 유네스코 세계기록유산 등재"]},
      {id:"station",title:"부산역 (붉은 벽돌 역사)",period:"1905~1934",location:"동구 부산진역로 118",keywords:"근대 교통 허브 · 건축사 랜드마크",summary:"경부선 완공 이후 한반도 철도 종착지의 상징.",highlights:["1905년 경부선 완공으로 서울-부산 철도 연결","붉은 벽돌과 돔형 지붕이 돋보이는 근대 건축","등록문화재 제252호 지정","현재도 KTX·일반열차 종점, 연간 2천만 명 이용"]},
      {id:"pier",title:"부산 부두 1~3호선",period:"1910~1928",location:"중구 북항 일대",keywords:"근대 항만 인프라 · 산업문화 심장",summary:"부산이 세계무역항으로 도약한 물리적 토대.",highlights:["1호선(1910) 최초 근대식 콘크리트 부두","2·3호선(1920~28) 대형 화물선 접안","일제강점기 수출입 70%가 집중된 물류 거점","현재 일부 구조물이 산업유산 탐방 코스로 활용"]},
      {id:"park",title:"용두산공원 & 망망대",period:"1913~1920",location:"중구 용두산길 37-55",keywords:"서양식 공공공간 · 도시 조경의 시작",summary:"부산 시민 근대 휴식 문화의 출발점.",highlights:["일제 도시계획으로 조성된 최초 공원","망망대에서 부산항 전경 조망, 도시 아이덴티티 형성","1973년 부산타워로 계승되어 관광 명소화","연간 150만 명이 찾는 대표 전망 명소"]},
      {id:"nampo",title:"남포동 근대 상업거리",period:"1920~1940",location:"중구 남포동·광복로 일대",keywords:"소비·엔터테인먼트 중심지",summary:"쇼핑·극장·시장·거리공연이 결합된 생활 문화 1번지.",highlights:["미쓰코시 백화점 → 롯데백화점 광복점으로 계보","부산극장(1934) 등 영화·연극 대중화의 산실","자갈치·국제시장과 연결된 복합 상업 공간","현재 BIFF 광장, 거리 공연 문화로 계승"]},
      {id:"jagalchi",title:"자갈치 시장 (피란민 재건 문화)",period:"1945~1953",location:"중구 자갈치로 52",keywords:"생존·상생 · 다문화 재건",summary:"전쟁 속 피란민이 일군 부산의 혼과 여성 경제력의 상징.",highlights:["6·25전쟁 중 피난민이 판잣집 시장 형성","자갈치 아지매로 대표되는 여성 상인 네트워크","재일동포·중국인·미군 PX 물자까지 더한 글로컬 생태계","등록문화재 제61호, 대한민국 대표 전통시장"]}
    ];
    const CULTURE_TIMELINE = [
      {year:"1274",title:"원나라 침략군 부산 진출",detail:"고종 15년, 원나라 군대가 부산포(현 동래)에 상륙해 고려와 연합 군사기지화를 시도했습니다.",note:"고려·원 연합 작전 전초기지"},
      {year:"1407",title:"동래부 설치",detail:"조선 태종 7년, 부산포를 관할하는 동래부를 설치하며 행정·군사 중심지로 성장했습니다.",note:"부산 행정도시의 태동"},
      {year:"1592",title:"임진왜란 부산포 전투",detail:"왜군이 부산진성에 최초 상륙, 동래성 전투로 이어지며 전쟁의 도화선이 되었습니다.",note:"부산진·동래성 격전"},
      {year:"1876",title:"부산항 개항 (강화도조약)",detail:"강화도조약으로 부산항이 공식 개항하며 근대 국제무역항의 문을 열었습니다.",note:"개항장 형성과 해외 상인 유입"},
      {year:"1897",title:"부산 일본조계지 설정",detail:"일본 거류민단이 설립되어 초량·부평동 일대가 일본식 근대 도시로 재편됐습니다.",note:"다층적 도시 경관 형성"},
      {year:"1902",title:"경부선 철도 개통",detail:"부산~서울을 잇는 경부선이 개통되어 한반도 종단 교통망이 완성되었습니다.",note:"부산역, 교통 허브 부상"},
      {year:"1910",title:"부산 부두 1호선 완공",detail:"근대식 부두 건설로 대형 선박 접안이 가능해지며 국제 무역항으로 도약했습니다.",note:"항만 인프라 현대화"},
      {year:"1920",title:"부산공원(현 용두산공원) 조성",detail:"일제강점기 조성된 근대 공원으로 시민 휴식과 문화생활의 거점이 되었습니다.",note:"도심 조경 문화 확산"},
      {year:"1934",title:"부산역 신역사 준공",detail:"붉은 벽돌의 부산역이 완공되어 근대 건축의 상징이 되었습니다.",note:"등록문화재 제252호"},
      {year:"1945",title:"광복과 부산 해방",detail:"8·15 광복 후 일본인 이주민이 철수하며 한국인 중심 도시로 재편이 시작됐습니다.",note:"원도심 재정비 착수"},
      {year:"1950",title:"한국전쟁 피난수도 선포",detail:"6·25 전쟁 중 임시수도 부산으로 지정, 인구가 3배 증가하며 피란민 문화가 형성되었습니다.",note:"전국 문화가 집결"},
      {year:"1953",title:"부산항 국제여객선 취항",detail:"전후 복구 이후 국제 여객선 운항이 재개되어 재일동포 귀환과 이민 통로가 되었습니다.",note:"해외 교류 재개"},
      {year:"1963",title:"아시아영화제 개최",detail:"부산국제영화제의 전신 격인 아시아영화제가 열리며 영화 도시 이미지를 쌓았습니다.",note:"BIFF의 뿌리 형성"},
      {year:"1970",title:"해운대해수욕장 종합개발",detail:"고층 호텔과 관광시설이 들어서며 국내 대표 해양 레저 도시로 전환했습니다.",note:"마이스·관광 산업 확장"},
      {year:"1973",title:"부산 지하철 1호선 착공",detail:"국내 두 번째 지하철 공사가 시작되며 도시 교통 혁신이 추진됐습니다.",note:"1985년 1호선 개통"},
      {year:"1981",title:"부산아시아경기대회 개최",detail:"아시아드 주경기장 건설과 함께 국제 스포츠 도시 이미지를 높였습니다.",note:"대규모 스포츠 인프라"},
      {year:"1988",title:"부산시청 신청사 준공",detail:"해운대구 우동으로 이전하며 현대적 행정 중심지 기능을 강화했습니다.",note:"센텀시티 개발 촉진"},
      {year:"2002",title:"한일월드컵 부산 개최",detail:"부산아시아드주경기장을 활용해 글로벌 스포츠 도시임을 입증했습니다.",note:"글로벌 도시 브랜드"},
      {year:"2005",title:"APEC 정상회의 개최",detail:"누리마루 APEC 하우스가 건립되어 국제회의 도시로 도약했습니다.",note:"MICE 허브"},
      {year:"2014",title:"BIFF 빌리지 개관",detail:"남포동 일대에 부산국제영화제 빌리지가 조성되어 영화 콘텐츠 산업 거점이 되었습니다.",note:"영화·관광 융합"}
    ];
    const CULTURE_GALLERY = [
      {
        id:"landmark",
        title:"부산의 근대 역사적 랜드마크",
        caption:"부산항 개항장에서 남포동 상업거리까지 이어지는 5대 거점의 시대별 역할을 정리한 다이어그램.",
        thumb:"images/busan_landmark.png",
        full:"images/busan_landmark.png"
      },
      {
        id:"timeline",
        title:"부산의 주요 역사적 사건 (1274~2014)",
        caption:"원나라 정벌부터 현대 도시 도약까지, 700년 역사를 타임라인으로 구성한 연표.",
        thumb:"images/busan_history_timeline.png",
        full:"images/busan_history_timeline.png"
      }
    ];
    const IMAGE_FALLBACK = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";
    const WEEKDAY_LABELS = ["일","월","화","수","목","금","토"];

    const EVENTS = [
      {id:"biff",name:"부산국제영화제(BIFF) 2025",category:"영화/축제",period:"2025.10.02 - 10.11",venue:"영화의전당 야외극장",address:"부산 해운대구 수영강변대로 120",lat:35.171025221008584,lng:129.12702012511946,summary:"아시아 최대 규모의 국제영화제.",description:"아시아필름마켓, 커뮤니티비프, VR 시네마 등으로 확장된 도시 전역의 영화 축제.",extra:"세계 각지의 감독과 배우, 프로그래머가 부산에 모여 신작을 소개하고, 해운대와 센텀시티 일대에서 레드카펫, 오픈토크, 시네마틱 야외 상영이 펼쳐집니다. 관객과의 대화(GV)와 마스터 클래스, 아카데미 프로그램 등 영화 교육 프로그램도 함께 운영됩니다.",image:"images/biff.jfif",tags:["국제페스티벌","해운대","아시아영화"],related:["bshort","biky","sea"]},
      {id:"bshort",name:"부산국제단편영화제",category:"영화",period:"2025.04.24 - 04.29",venue:"영화의전당 시네마테크",address:"부산 해운대구 수영강변대로 120",lat:35.171025221008584,lng:129.12702012511946,summary:"국내 최장수 단편 영화제, 아카데미 공인.",description:"국제·아시아 경쟁, XR 시네마, 감독·관객 GV, 워크숍 등 단편 영화 생태계 허브.",extra:"실험영화와 애니메이션, 다큐멘터리까지 폭넓게 소개하며, 차세대 감독 발굴을 위한 피칭, 멘토링 프로그램을 운영합니다. 상영 후에는 영화인과 관객이 가까운 거리에서 소통할 수 있는 포럼과 네트워킹이 이어집니다.",image:"images/biffs.png",tags:["단편영화","GV","XR"],related:["biff","indieplus"]},
      {id:"biky",name:"부산국제어린이청소년영화제(BIKY)",category:"영화",period:"2025.07.08 - 07.14",venue:"영화의전당·BNK부산은행 아트시네마",address:"부산 해운대구 수영강변대로 120",lat:35.171025221008584,lng:129.12702012511946,summary:"어린이·청소년이 주체가 되는 영화제.",description:"시네키즈, 레드카펫 키즈 MC, 청소년 심사단 등 참여형 프로그램으로 차세대 영화인을 양성.",extra:"아이들이 직접 심사하고 진행하는 상영 프로그램, 영화캠프, 미디어 교육 워크숍이 함께 열려 ‘어린이 영화학교’ 역할을 합니다. 가족 단위 관객을 위한 야외 상영과 체험 부스도 준비됩니다.",image:"images/biky.png",tags:["청소년","참여형","교육"],related:["biff","bnkcinema"]},
      {id:"indieplus",name:"영화의전당·인디플러스 기획전",category:"영화",period:"연중",venue:"영화의전당 인디플러스",address:"부산 해운대구 수영강변대로 120",lat:35.171025221008584,lng:129.12702012511946,summary:"독립·예술영화 기획전 상시 운영.",description:"지역 관객을 위한 테마 기획전, 감독과의 대화, 시나리오 북토크 등을 연중 개최.",extra:"독립영화 배급사와 협력한 특별전, 여성영화·인권영화·장르영화 등 주제 섹션이 수시로 열립니다. 상영 후에는 감독과 제작진이 참여하는 소규모 GV와 시나리오·연출 워크숍도 함께 운영됩니다.",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",tags:["독립영화","기획전","GV"],related:["bshort","bnkcinema"]},
      {id:"bnkcinema",name:"BNK부산은행 아트시네마 정기 상영",category:"영화",period:"연중",venue:"BNK부산은행 아트시네마",address:"부산 중구 광복중앙로 13 3층",lat:35.171025221008584,lng:129.12702012511946,summary:"남포동 독립영화 전용관.",description:"국내외 예술영화, 부산 스토리 큐레이션, 감독 초청전으로 지역 영화인과 관객을 잇는다.",extra:"남포동 원도심을 기반으로 지역 감독, 부산 배경 작품을 집중 조명하며, 상영과 함께 작은 토크, 라이브 연주, 북토크가 어우러진 복합 프로그램을 선보입니다.",image:"images/art_cinema.jfif",tags:["남포동","독립영화","시사회"],related:["biky","gamcheon"]},
      {id:"rock",name:"부산국제록페스티벌",category:"음악/축제",period:"2025.08.01 - 08.03",venue:"삼락생태공원 메인스테이지",address:"부산 사상구 삼락동 29-46",lat:35.16921261296691,lng:128.97313668766947,summary:"국내 최장수 록 페스티벌.",description:"헤드라이너 3개 무대, 캠핑존, 지역 밴드 쇼케이스, 친환경 뮤직 페어를 함께 구성.",extra:"국내외 유명 록·메탈·인디 밴드가 대거 출연하며, 잔디 위에서 캠핑과 공연을 동시에 즐길 수 있는 ‘락캠핑존’이 인기입니다. 플리마켓과 푸드트럭, 환경 캠페인 부스가 함께 운영되어 페스티벌 분위기를 더합니다.",image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",tags:["록","야외","캠핑"],related:["sea","liveclub","chorus"]},
      {id:"chorus",name:"부산국제합창제",category:"음악",period:"2025.07.10 - 07.13",venue:"부산문화회관 대극장",address:"부산 남구 유엔평화로76번길 1",lat:35.12720381116853,lng:129.09343392393183,summary:"세계 합창단 경연 및 갈라 콘서트.",description:"마스터클래스, 시민합창단 프로젝트, 어린이 합창 캠프와 함께 세계 합창 네트워크를 만든다.",extra:"전 세계 합창단이 클래식, 민요, 현대음악 레퍼토리를 선보이며, 시민합창단과의 합동 무대, 오디션을 통한 청소년 합창 아카데미도 함께 진행됩니다.",image:"images/choir_festival.jpg",tags:["합창","클래식","갈라"],related:["classic","rock"]},
      {id:"sea",name:"부산바다축제",category:"음악/축제",period:"2025.08.01 - 08.03",venue:"해운대·광안리·송도 해수욕장",address:"부산 해운대해수욕장",lat:35.158503656035776,lng:129.15986512407855,summary:"해변 전역 K-POP & EDM 파티.",description:"미디어파사드, 서핑 챌린지, 나이트마켓, 친환경 캠페인을 포함한 대표 여름 축제.",extra:"오프닝 콘서트와 DJ 파티, 비치 스포츠 대회, 야간 버스킹이 여러 해수욕장에서 동시에 진행됩니다. 가족과 친구, 연인이 함께 머무르며 여름 밤바다를 즐길 수 있는 대표 바캉스 축제입니다.",image:"images/sea_festival.jpg",tags:["해변","KPOP","야간"],related:["rock","fireworks","light"]},
      {id:"classic",name:"클래식 기획 공연 시리즈",category:"음악",period:"월별",venue:"부산문화회관·시민회관·F1963",address:"부산 남구 유엔평화로76번길 1",lat:35.127337460783124,lng:129.0937828643011,summary:"정기 연주회·협연·실내악 페스티벌.",description:"부산문화회관, 시민회관, F1963에서 오케스트라, 실내악, 현대음악 프로그램을 릴레이로 운영.",extra:"국내외 지휘자와 솔리스트 초청 협연, 젊은 연주자를 소개하는 라이징스타 시리즈, 현대음악·크로스오버 기획까지 포함되어 클래식 팬들의 꾸준한 사랑을 받습니다.",image:"https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80",tags:["클래식","레지던시","F1963"],related:["chorus","biennale"]},
      {id:"biennale",name:"2024 부산비엔날레",category:"전시",period:"2024.08.17 - 10.20",venue:"부산시립미술관·F1963",address:"부산 해운대구 APEC로 58",lat:35.16671910012939,lng:129.13705071290875,summary:"국제 현대미술제, 테마 ‘Sea of Memory’.",description:"다국적 작가 80여 명 참여, 수변 설치, 아티스트 토크, 커뮤니티 랩 프로그램으로 구성.",extra:"해양 도시 부산의 역사와 기억을 주제로 설치, 영상, 퍼포먼스가 전시되며, 작가와의 만남, 워크숍, 도시 투어 프로그램이 함께 기획됩니다.",image:"images/bieenale.jpg",tags:["현대미술","F1963","전시"],related:["artfair","photo","museum"]},
      {id:"artfair",name:"2025 유라시아부산국제아트페어",category:"전시",period:"2025.12.04 - 12.07",venue:"벡스코 제2전시장",address:"부산 해운대구 APEC로 30",lat:35.1657004614896,lng:129.13502680140527,summary:"국제 아트페어, 180개 갤러리.",description:"VIP 컬렉터 프로그램, 아트토크, NFT라운지, 청년작가 존, 부산 프라이즈 시상식을 운영.",extra:"국내외 유수 갤러리가 참가해 회화, 조각, 사진, 미디어아트 작품을 선보이며, 컬렉터 라운지와 아트 토크, 키즈 아트 프로그램이 운영됩니다.",image:"images/art_busan.png",tags:["아트페어","벡스코","컬렉터"],related:["biennale","photo"]},
      {id:"photo",name:"부산국제사진제",category:"전시",period:"2025.09.24 - 10.23",venue:"F1963·영화의전당 라운지",address:"부산 해운대구 수영강변대로 120",lat:35.171025221008584,lng:129.12702012511946,summary:"사진 전문 전시 행사.",description:"국제 큐레이터 초청전, 아티스트 토크, 포트폴리오 리뷰, 포토북 페어를 포함.",extra:"국내외 사진가들의 개인전·그룹전과 함께, 포트폴리오 리뷰, 출판사와 함께하는 포토북 마켓, 작가 강연 등이 열려 사진 작업 흐름을 한눈에 볼 수 있습니다.",image:"images/photo_festival.png",tags:["사진","큐레이션","토크"],related:["biennale","artfair"]},
      {id:"museum",name:"부산시립·현대미술관 기획전",category:"전시",period:"상시",venue:"부산시립미술관 외",address:"부산 해운대구 APEC로 58",lat:35.16663692129298,lng:129.137111662703,summary:"동시대 이슈를 다루는 기획전 릴레이.",description:"시립·현대미술관에서 로컬 레지던시, 미디어아트, 어린이 미술교육 전시를 순환 개최.",extra:"지역 작가 전, 국제 공동 기획전, 어린이·청소년 대상 체험형 전시 등 다양한 층을 아우르며, 도슨트 투어와 교육 프로그램이 상시 운영됩니다.",image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",tags:["공공미술관","레지던시","교육"],related:["biennale","photo"]},
      {id:"theater",name:"부산국제연극제",category:"공연",period:"2025.05.23 - 06.01",venue:"영도문화예술회관·중구 소극장",address:"부산 영도구 함지로79번길 6",lat:35.07566980452236,lng:129.06604601757334,summary:"도시 전체를 무대로 하는 연극 축제.",description:"거리극, 해외 공동제작, 청년극단 쇼케이스, 국제 포럼을 운영.",extra:"항구와 원도심 골목, 공원 등 도시 곳곳을 무대로 삼아 야외극과 퍼포먼스를 선보이며, 해외 극단 초청공연과 워크숍, 연극 교육 프로그램이 함께 열립니다.",image:"images/theater_festival.jpg",tags:["연극","스트리트","포럼"],related:["dance","smallplay"]},
      {id:"dance",name:"부산국제무용제",category:"공연",period:"2025.06.04 - 06.08",venue:"해운대 해변 특설무대",address:"부산 해운대구 해운대해변로 264",lat:35.158503656035776,lng:129.15986512407855,summary:"바다와 함께하는 국제 무용 축제.",description:"해변 메인 공연, 워크숍, 해외 무용단 교류, 시민 플래시몹을 진행.",extra:"현대무용, 한국무용, 스트리트댄스까지 다양한 레퍼토리가 해변과 실내무대에서 펼쳐지고, 시민이 참여하는 플래시몹과 즉흥 퍼포먼스 프로그램도 마련됩니다.",image:"images/dance_festival.jpg",tags:["무용","해운대","플래시몹"],related:["theater","sea"]},
      {id:"smallplay",name:"2025 부산 소극장 연극 페스티벌",category:"공연",period:"2025.10.31 - 11.15",venue:"중구·부산진구 소극장",address:"부산 중구 비프광장로 30",lat:35.1272036690769,lng:129.09344214691922,summary:"지역 소극장 연합 연극제.",description:"로컬 극단 20여 팀이 신작과 리바이벌 작품을 릴레이 상연, 관객 피드백 세션 운영.",extra:"중·소극장 밀집 지역을 중심으로, 창작극·실험극·뮤지컬 등 다양한 형식의 공연이 이어지며, 공연 후에는 관객과의 대화와 워크숍이 열려 로컬 연극 생태계를 활성화합니다.",image:"images/small_theater.png",tags:["소극장","신작","관객참여"],related:["theater","gamcheon"]},
      {id:"fireworks",name:"부산불꽃축제",category:"축제",period:"2025.10.25",venue:"광안리 해변 일대",address:"부산 수영구 광안해변로 219",lat:35.1531808828218,lng:129.11901472371838,summary:"광안대교를 배경으로 한 대표 야간 축제.",description:"멀티미디어 불꽃 쇼, 드론 라이트 쇼, 시민 버스킹 존을 운영.",extra:"광안대교를 중심으로 음악과 연동된 대형 불꽃 연출, 드론 쇼, 레이저 쇼가 어우러지며, 해변과 인근 언덕, 선상 관람 등 다양한 명당이 형성됩니다. 축제 기간에는 공연과 체험부스, 먹거리 장터도 함께 운영됩니다.",image:"images/fireworks.jfif",tags:["불꽃","야간","광안리"],related:["sea","light"]},
      {id:"sunrise",name:"해맞이 부산 축제",category:"축제",period:"2023.12.31, 2024.01.01",venue:"해운대·송정 해수욕장",address:"부산 해운대해수욕장",lat:35.158503656035776,lng:129.15986512407855,summary:"새해 일출 기원 축제.",description:"새해맞이 퍼포먼스, 타종식, 소망엽서 이벤트, 따뜻한 차 나눔.",extra:"해돋이와 함께 풍물 공연, 새해 메시지 퍼포먼스, 소망 등 달기 등 참여형 이벤트가 열리며, 지역 상인들과 연계한 따뜻한 먹거리 부스가 운영됩니다.",image:"images/sunrise_festival.jpg",tags:["일출","소망","시민"],related:["sand","light"]},
      {id:"gamcheon",name:"감천문화마을 골목 축제",category:"축제",period:"2025.05.04 - 05.06",venue:"감천문화마을 일대",address:"부산 사하구 감천동 1-17",lat:35.09740619778115,lng:129.01057719029086,summary:"피란민 마을의 골목 예술 축제.",description:"벽화 투어, 골목 공연, 주민 플리마켓, 피란 음식 체험을 즐길 수 있다.",extra:"가파른 언덕길과 계단을 따라 골목골목을 거닐며 벽화와 설치 작품을 감상할 수 있고, 주민이 직접 운영하는 공방·카페·플리마켓에서 독특한 굿즈와 로컬 음식을 만날 수 있습니다.",image:"images/gamcheon_festival.jfif",tags:["골목","벽화","플리마켓"],related:["bnkcinema","smallplay"]},
      {id:"light",name:"해운대 빛 축제",category:"축제",period:"2025.11.30 - 2026.01.31",venue:"해운대 해변·광장",address:"부산 해운대구 해운대해변로 292",lat:35.158503656035776,lng:129.15986512407855,summary:"해변을 수놓는 미디어 라이트 쇼.",description:"미디어터널, 포토존, 공연, 크리스마스 마켓으로 겨울 해변을 밝힌다.",extra:"해변 산책로와 광장에 대형 트리, 미디어 터널, 포토 스팟이 조성되고, 주말마다 버스킹·합창 공연과 겨울 시즌 마켓이 함께 열립니다.",image:"images/light_festival.jpg",tags:["빛축제","포토존","겨울"],related:["fireworks","sea"]},
      {id:"sand",name:"해운대 모래축제",category:"축제",period:"2025.05.24 - 05.27",venue:"해운대 해수욕장",address:"부산 해운대해수욕장",lat:35.158503656035776,lng:129.15986512407855,summary:"모래 조각과 워터스포츠 축제.",description:"세계 모래조각 챔피언십, 비치런, 시티투어 연계 프로그램이 열린다.",extra:"국내외 모래조각 작가들의 대형 작품이 전시되고, 시민 참여 모래조각 체험, 비치 요가, 비치런 등 바다와 모래를 활용한 프로그램이 가득합니다.",image:"images/sand_festival.jfif",tags:["모래조각","비치","체험"],related:["sunrise","sea"]},
      {id:"chinatown",name:"부산 차이나타운 특구 문화축제",category:"축제",period:"2025.09.13 - 09.15",venue:"초량 차이나타운 특구",address:"부산 동구 초량동 1109",lat:35.11370349988347,lng:129.0379842923801,summary:"부산 개항장 문화와 중화권 문화를 잇는 축제.",description:"사자춤 퍼레이드, 중국 전통요리 마켓, 개항장 스탬프 투어를 제공.",extra:"중화권 전통 공연과 K-컬처가 함께 어우러지고, 거리 곳곳에서 다양한 스타일의 중식과 디저트를 맛볼 수 있는 푸드존이 운영됩니다. 개항장 일대 역사 투어와 연계 프로그램도 함께 진행됩니다.",image:"images/chinatown_festival.jfif",tags:["차이나타운","퍼레이드","미식"],related:["fireworks","gamcheon"]},
      {id:"anchovy",name:"기장 멸치축제",category:"축제",period:"2025.04.25 - 04.27",venue:"기장 대변항",address:"부산 기장군 기장읍 대변리 274-17",lat:35.22051828102901,lng:129.23086179039657,summary:"봄철 멸치 풍어를 기원하는 향토 축제.",description:"멸치잡이 체험, 활멸치 회&구이 시식, 어선 퍼레이드, 음악 공연을 즐길 수 있다.",extra:"대변항 포구를 따라 멸치 요리 시식 부스와 특산물 장터가 펼쳐지고, 어선 퍼레이드와 어촌 문화 체험 프로그램이 함께 열립니다. 바다를 보며 라이브 공연을 즐길 수 있는 작은 무대도 마련됩니다.",image:"images/anchovy_festival.jpg",tags:["어촌","향토","푸드"],related:["sand","sea"]}
    ];

    const EVENT_LINKS = {
      biff:"https://www.biff.kr/kor/",
      bshort:"https://www.bisff.org/",
      biky:"https://www.biky.or.kr/home",
      indieplus:"https://mobile.dureraum.org:44500/bccm/main/main.do?rbsIdx=1",
      bnkcinema:"https://www.instagram.com/corner_theater/",
      rock:"https://busanrockfestival.com/",
      chorus:"https://www.busanchoral.org/eng/",
      sea:"https://festivalbusan.com/seafestival/",
      classic:"https://www.bscc.or.kr/main/",
      biennale:"https://busanbiennale2024.com/ko",
      artfair:"http://www.biaf.co.kr/",
      photo:"http://w.bipf.kr/2025/",
      museum:"https://www.busan.go.kr/moca/exhibition01",
      theater:"https://www.bipaf.org/",
      dance:"https://www.bidf.kr/",
      smallplay:"http://www.blta.co.kr/00_main/main.asp",
      fireworks:"https://busanfireworks.com/",
      sunrise:"https://busan.grandculture.net/Contents?local=busan&dataType=01&contents_id=GC04214107",
      gamcheon:"https://www.saha.go.kr/tour/contents.do?mId=0202000000",
      light:"https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=b3b7a23c-c7f6-45db-930a-b139e4d8cd9f",
      sand:"https://www.haeundae.go.kr/index.do?menuCd=DOM_000000309005011000",
      chinatown:"https://www.visitbusan.net/index.do?menuCd=DOM_000000201005001000&uc_seq=414&lang_cd=ko&pagingParms=4ca15f3a76a21f554a6e515f5344f50c4f734814d27260977c0eb574b1e0019a33f5a8e2dd587a9efb82cc91cf112987488312a3bc08c3054da8c190c930f6592e7894a7ed3cf424c17bc506baa57feb0aa608ee54ad79feb8b43e0becf2aedf306446a26175f37928b2e64d297ab48f8acfae3743ce2794ef15d99eb793341329c53a76d24a81ef72a11ca917970aac34400ec0365d93e364d7a859d58178e212648c28901350cb20330ec09b4e8c7ee5e2b8287a2a6536a889e832bf7d31f847bff6a467836ed9d75537b39410af399cbcba9ee6702cb3dbdfc37118061bdc6242d2505ff463a634757c4ad1fb5316c17e3c6c881b1202936a9591f574a9b458fe7ada378c8e24a939d38009efceb2f1d2f3d9fb0a84335999d70d74a175a02229fcd269f25ecae09cba47d7fa5b4ca79471889a1020e6226a199377b97ead69d777bcce27c101be7225c1ffeb0036367494277c22e6ec9cff0114e7cadf3a2d867367262d1b5f6a717ace24b4cae0734d3410c3de7cbbe8e8e2de4a08c9f7f2d71419b760deedc85bfd092d20cf83296e62049d974032c50fee7f8aa0e20719104acb04653baa264be502ef0f1cca19faf72dfd77b0bf1930b929eb2ee93dbea2f5bff2d9ad4661906d2630252c7a77755caae6cc44ce63bad15ddb06615ce3b6b3e2ad2ade8ddc56b9a8835779c8968497af73b9cee2d26904ec9ddb2852944561dc3a786f3e5c68c8e0e32ae35abb0978563b823f553103c0757fd7e769114895883f6c30f8d9107f51b43406263d9ba68fff184ad872b9b0efeefd8d3a2a809eb15b6818f12446d25d8cd7efecc255394911058317",
      anchovy:"https://www.gijang.go.kr/tour/index.gijang?menuCd=DOM_000000302000000000"
    };

    const featuredEl = document.getElementById("featured");
    const eventListEl = document.getElementById("eventList");
    const filtersEl = document.getElementById("filters");
    const favoriteSectionEl = document.getElementById("favoriteSection");
    const favoriteListEl = document.getElementById("favoriteList");
    const eventSearchInput = document.getElementById("eventSearch");
    const favoriteOnlyBtn = document.getElementById("favoriteOnlyBtn");
    const favoriteCountEl = document.getElementById("favoriteCount");
    const cultureGalleryEl = document.getElementById("cultureGallery");
    const historyTimelineEl = document.getElementById("historyTimeline");
    const calendarGridEl = document.getElementById("calendarGrid");
    const calendarLabelEl = document.getElementById("calendarCurrentLabel");
    const viewToggle = document.querySelector(".view-toggle");
    const viewToggleButtons = viewToggle ? viewToggle.querySelectorAll("button") : [];
    const VIEW_STORAGE_KEY = "busan-view-mode";
    const FAVORITE_STORAGE_KEY = "busan-favorites";
    const MOBILE_BREAKPOINT = "(max-width: 768px)";
    const mobileMediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const KAKAO_SHARE_KEY = "d865babc963d6edc39f7371bd8869346";
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobi/i.test(navigator.userAgent);
    let userSelectedView = false;
    let favorites = new Set();
    let currentCategory = "전체";
    let currentSearchTerm = "";
    let favoriteOnly = false;
    let currentEventId = null;
    let searchDebounceTimer = null;
    let userLocation = null;
    let sortMode = "default";
    let locatingUser = false;
    const calendarNavButtons = document.querySelectorAll("[data-calendar-nav]");
    let calendarCurrentDate = new Date();
    calendarCurrentDate.setDate(1);

    function getClosest(target, selector) {
      if (!target) return null;
      if (typeof target.closest === "function") {
        return target.closest(selector);
      }
      let node = target.parentElement;
      while (node) {
        if (node.matches(selector)) return node;
        node = node.parentElement;
      }
      return null;
    }

    function getAbsoluteUrl(path) {
      try {
        return new URL(path, window.location.href).toString();
      } catch (err) {
        return path;
      }
    }

    function buildEventPageUrl(id) {
      const url = new URL(window.location.href);
      if (id) {
        url.searchParams.set("event", id);
      } else {
        url.searchParams.delete("event");
      }
      url.hash = "";
      return url.toString();
    }

    function getOfficialLink(id) {
      return EVENT_LINKS[id] || null;
    }

    function copyOfficialLink(id) {
      const officialLink = getOfficialLink(id);
      const linkToCopy = officialLink || buildEventPageUrl(id);
      copyToClipboard(linkToCopy);
      showToast(officialLink ? "행사 공식 링크를 복사했어요." : "행사 페이지 링크를 복사했어요.");
    }

    const EARTH_RADIUS_KM = 6371;
    function deg2rad(value) {
      return value * (Math.PI / 180);
    }

    function calculateDistance(lat1, lng1, lat2, lng2) {
      if ([lat1,lng1,lat2,lng2].some(coord => typeof coord !== "number" || Number.isNaN(coord))) {
        return null;
      }
      const dLat = deg2rad(lat2 - lat1);
      const dLng = deg2rad(lng2 - lng1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return +(EARTH_RADIUS_KM * c).toFixed(2);
    }

    function formatDistanceLabel(distance) {
      if (typeof distance !== "number" || Number.isNaN(distance)) return "";
      if (distance < 1) {
        return `${Math.round(distance * 1000)}m`;
      }
      return distance < 10 ? `${distance.toFixed(1)}km` : `${Math.round(distance)}km`;
    }

    function updateLocationUI() {
      if (nearbySortBtn) {
        nearbySortBtn.classList.toggle("active", sortMode === "distance" && !!userLocation);
        nearbySortBtn.classList.toggle("is-loading", locatingUser);
        nearbySortBtn.setAttribute("aria-pressed", sortMode === "distance" && !!userLocation);
        if (locatingUser) {
          nearbySortBtn.textContent = "위치 확인 중...";
        } else if (sortMode === "distance" && userLocation) {
          nearbySortBtn.textContent = "내 주변 순 정렬 해제";
        } else {
          nearbySortBtn.textContent = "내 주변 행사 보기";
        }
      }
      if (locationStatusEl) {
        if (locatingUser) {
          locationStatusEl.textContent = "현재 위치를 확인하는 중입니다...";
        } else if (sortMode === "distance" && userLocation) {
          locationStatusEl.textContent = "가까운 행사부터 정렬했습니다.";
        } else if (userLocation) {
          locationStatusEl.textContent = "기본 정렬로 표시 중입니다.";
        } else {
          locationStatusEl.textContent = "";
        }
      }
    }

    function requestUserLocation() {
      if (!navigator.geolocation) {
        showToast("이 브라우저에서는 위치 정보를 사용할 수 없습니다.");
        return;
      }
      locatingUser = true;
      updateLocationUI();
      navigator.geolocation.getCurrentPosition(
        pos => {
          userLocation = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          locatingUser = false;
          sortMode = "distance";
          updateLocationUI();
          renderList();
          renderFavoriteSection();
          showToast("내 주변 행사 순으로 정렬했습니다.");
        },
        err => {
          locatingUser = false;
          updateLocationUI();
          const messages = {
            1: "위치 접근이 거부되었습니다.",
            2: "위치 정보를 확인할 수 없습니다.",
            3: "위치 정보를 가져오는 데 시간이 초과되었습니다."
          };
          showToast(messages[err.code] || "위치 정보를 가져올 수 없습니다.");
        },
        { enableHighAccuracy:false, timeout:8000, maximumAge:0 }
      );
    }

    function clearLocationSorting() {
      sortMode = "default";
      updateLocationUI();
      renderList();
      renderFavoriteSection();
      showToast("기본 정렬로 돌아갔어요.");
    }

    function getAbsoluteUrl(path) {
      try {
        return new URL(path, window.location.href).toString();
      } catch (err) {
        return path;
      }
    }

    function ensureKakaoReady() {
      if (typeof Kakao === "undefined") {
        console.warn("카카오 SDK가 로드되지 않았습니다.");
        showToast("카카오 SDK를 불러오지 못했습니다.");
        return false;
      }
      if (!KAKAO_SHARE_KEY || KAKAO_SHARE_KEY.includes("YOUR_")) {
        console.warn("KAKAO_SHARE_KEY 를 실제 JavaScript 키로 교체하세요.");
        showToast("카카오 공유 키가 설정되어 있지 않습니다.");
        return false;
      }
      if (!Kakao.isInitialized()) {
        Kakao.init(KAKAO_SHARE_KEY);
      }
      return true;
    }

    function shareViaKakao(event) {
      if (!ensureKakaoReady()) return;
      const shareUrl = buildEventPageUrl(event.id);
      const imageUrl = getAbsoluteUrl(event.image || IMAGE_FALLBACK);
      Kakao.Share.sendDefault({
        objectType:"feed",
        content:{
          title:event.name,
          description:event.summary || event.description || "",
          imageUrl,
          link:{
            mobileWebUrl:shareUrl,
            webUrl:shareUrl
          }
        },
        buttons:[
          {
            title:"행사 카드 보기",
            link:{
              mobileWebUrl:shareUrl,
              webUrl:shareUrl
            }
          }
        ]
      });
      showToast("카카오톡 공유 패널을 열었습니다.");
    }

    function setToggleActive(mode) {
      viewToggleButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === mode);
      });
    }

    function storeViewMode(mode) {
      try {
        localStorage.setItem(VIEW_STORAGE_KEY, mode);
      } catch (err) {
        console.warn("view mode 저장 실패:", err);
      }
    }

    function applyDeviceMode(mode, { skipPersist = false } = {}) {
      if (mode === "mobile") {
        document.body.classList.add("device-mobile");
      } else {
        document.body.classList.remove("device-mobile");
        mode = "pc";
      }
      if (viewToggle) {
        setToggleActive(mode);
      }
      if (!skipPersist) {
        storeViewMode(mode);
      }
    }

    if (viewToggle) {
      viewToggle.addEventListener("click", e => {
        const target = getClosest(e.target, "button[data-view]");
        if (!target) return;
        userSelectedView = true;
        applyDeviceMode(target.dataset.view);
      });
    }

    function handleViewportChange(e) {
      if (userSelectedView) return;
      applyDeviceMode(e.matches ? "mobile" : "pc", { skipPersist:true });
    }

    if (typeof mobileMediaQuery.addEventListener === "function") {
      mobileMediaQuery.addEventListener("change", handleViewportChange);
    } else if (typeof mobileMediaQuery.addListener === "function") {
      mobileMediaQuery.addListener(handleViewportChange);
    }

    function initViewMode() {
      let stored = null;
      try {
        stored = localStorage.getItem(VIEW_STORAGE_KEY);
      } catch (err) {
        console.warn("view mode 읽기 실패:", err);
      }
      if (stored) {
        userSelectedView = true;
      }
      const prefersMobile = mobileMediaQuery.matches || isMobileUserAgent;
      const initialMode = stored || (prefersMobile ? "mobile" : "pc");
      applyDeviceMode(initialMode, { skipPersist: Boolean(stored) });
    }

    function renderCards(data, container) {
      if (!container) return;
      container.innerHTML = data.map(item => {
        const isFavorite = favorites.has(item.id);
        const distanceMarkup = typeof item.distance === "number" ? `<p class="distance-info">내 위치에서 약 ${formatDistanceLabel(item.distance)}</p>` : "";
        return `
        <article class="card event-card ${isFavorite ? "is-favorite" : ""}">
          <button type="button" class="favorite-btn ${isFavorite ? "active" : ""}" data-fav-toggle="${item.id}" aria-pressed="${isFavorite}">
            <span class="favorite-icon" aria-hidden="true">${isFavorite ? "★" : "☆"}</span>
            <span class="favorite-label">${isFavorite ? "저장됨" : "찜하기"}</span>
            <span class="sr-only">${isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</span>
          </button>
          <div class="thumb">
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}';">
          </div>
          <span class="tag">${item.category}</span>
          <h3>${item.name}</h3>
          <p class="meta">${item.period} · ${item.venue}</p>
          ${distanceMarkup}
          <p>${item.summary}</p>
          <button class="btn primary" style="margin-top:14px;" data-type="event" data-id="${item.id}">
            자세히 보기
          </button>
        </article>`;
      }).join("");
    }

    function buildCultureGalleryCard(item) {
      return `
        <figure class="gallery-card">
          <div class="gallery-thumb">
            <img src="${item.thumb}" alt="${item.title}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}';">
            <button class="gallery-zoom" type="button" data-view-image="${item.full}" data-view-alt="${item.title}">
              확대 보기
            </button>
          </div>
          <figcaption>
            <strong>${item.title}</strong>
            <p>${item.caption}</p>
          </figcaption>
        </figure>
      `;
    }

    function buildCultureCard(item) {
      return `
        <article class="card culture-card">
          <div class="culture-header">
            <span class="tag">부산 지역 문화</span>
            <h3>${item.title}</h3>
            <p class="meta">${item.period} · ${item.location}</p>
          </div>
          <button class="btn primary" style="margin-top:12px;" data-type="culture" data-id="${item.id}">
            자세히 보기
          </button>
        </article>
      `;
    }

    function renderCulture(containerId) {
      const target = document.getElementById(containerId);
      target.innerHTML = CULTURE_SPOTS.map(buildCultureCard).join("");
    }

    function renderCultureGallery() {
      if (!cultureGalleryEl) return;
      cultureGalleryEl.innerHTML = CULTURE_GALLERY.map(buildCultureGalleryCard).join("");
    }

    function renderHistoryTimeline() {
      if (!historyTimelineEl) return;
      historyTimelineEl.innerHTML = CULTURE_TIMELINE.map(item => `
        <article class="timeline-card" data-year="${item.year}">
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
          ${item.note ? `<small>${item.note}</small>` : ""}
        </article>
      `).join("");
    }

    function renderFeatured() {
      if (!featuredEl) return;
      renderCards(EVENTS.slice(0,4), featuredEl);
    }

    function loadFavorites() {
      try {
        const stored = JSON.parse(localStorage.getItem(FAVORITE_STORAGE_KEY) || "[]");
        favorites = new Set(Array.isArray(stored) ? stored : []);
      } catch (err) {
        console.warn("즐겨찾기 정보를 불러오지 못했습니다:", err);
        favorites = new Set();
      }
    }

    function saveFavorites() {
      try {
        localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify([...favorites]));
      } catch (err) {
        console.warn("즐겨찾기 저장 실패:", err);
      }
    }

    function updateFavoriteToggleState() {
      if (!favoriteOnlyBtn || !favoriteCountEl) return;
      favoriteCountEl.textContent = favorites.size;
      favoriteOnlyBtn.classList.toggle("active", favoriteOnly);
      favoriteOnlyBtn.setAttribute("aria-pressed", favoriteOnly);
    }

    function updateModalFavoriteState() {
      if (!modalFavoriteBtn) return;
      if (!currentEventId) {
        modalFavoriteBtn.classList.remove("active");
        modalFavoriteBtn.textContent = "관심 행사 저장";
        return;
      }
      const isFavorite = favorites.has(currentEventId);
      modalFavoriteBtn.classList.toggle("active", isFavorite);
      modalFavoriteBtn.textContent = isFavorite ? "즐겨찾기 해제" : "관심 행사 저장";
    }

    function renderFavoriteSection() {
      if (!favoriteSectionEl || !favoriteListEl) return;
      const favoriteData = EVENTS
        .filter(event => favorites.has(event.id))
        .map(event => {
          if (!userLocation) return event;
          return {
            ...event,
            distance: calculateDistance(userLocation.lat, userLocation.lng, event.lat, event.lng)
          };
        });
      favoriteSectionEl.hidden = favoriteData.length === 0;
      if (favoriteData.length === 0) {
        favoriteListEl.innerHTML = "";
        return;
      }
      renderCards(favoriteData, favoriteListEl);
    }

    function toggleFavorite(id, { silent = false } = {}) {
      if (!id) return;
      const isFavorite = favorites.has(id);
      if (isFavorite) {
        favorites.delete(id);
      } else {
        favorites.add(id);
      }
      saveFavorites();
      updateFavoriteToggleState();
      renderList();
      renderFeatured();
      renderFavoriteSection();
      if (currentEventId === id) {
        updateModalFavoriteState();
      }
      if (!silent) {
        showToast(isFavorite ? "즐겨찾기에서 제외했어요." : "즐겨찾기에 추가했어요.");
      }
    }

    function initFilters() {
      const categorySet = new Set();
      EVENTS.forEach(e => e.category.split("/").map(cat => cat.trim()).forEach(cat => categorySet.add(cat)));
      const cats = ["전체", ...categorySet];
      filtersEl.innerHTML = cats.map(cat => `
        <button class="filter-btn ${currentCategory === cat ? "active" : ""}" data-cat="${cat}">${cat}</button>
      `).join("");
      filtersEl.addEventListener("click", e => {
        const target = getClosest(e.target, ".filter-btn");
        if (!target) return;
        [...filtersEl.children].forEach(btn => btn.classList.remove("active"));
        target.classList.add("active");
        currentCategory = target.dataset.cat || "전체";
        renderList();
      });
    }

    function getFilteredEvents() {
      return EVENTS.filter(event => {
        const categories = event.category.split("/").map(cat => cat.trim());
        const matchesCategory = currentCategory === "전체" || categories.includes(currentCategory);
        const matchesFavorite = !favoriteOnly || favorites.has(event.id);
        if (!matchesCategory || !matchesFavorite) return false;
        if (!currentSearchTerm) return true;
        const searchTarget = [
          event.name,
          event.summary,
          event.description,
          event.venue,
          categories.join(" "),
          (event.tags || []).join(" ")
        ].join(" ").toLowerCase();
        return searchTarget.includes(currentSearchTerm);
      });
    }

    function renderList() {
      if (!eventListEl) return;
      let filtered = getFilteredEvents();
      let prepared = filtered.map(event => {
        if (!userLocation) return event;
        return {
          ...event,
          distance: calculateDistance(userLocation.lat, userLocation.lng, event.lat, event.lng)
        };
      });
      if (sortMode === "distance" && userLocation) {
        prepared = prepared.sort((a, b) => {
          const distA = typeof a.distance === "number" ? a.distance : Number.POSITIVE_INFINITY;
          const distB = typeof b.distance === "number" ? b.distance : Number.POSITIVE_INFINITY;
          return distA - distB;
        });
      }
      if (prepared.length === 0) {
        eventListEl.innerHTML = `
          <div class="empty-state">
            조건에 맞는 행사가 없습니다.<br>
            <small>검색어와 필터를 조정해 보세요.</small>
          </div>
        `;
        return;
      }
      renderCards(prepared, eventListEl);
    }

    function initTabs() {
      const buttons = document.querySelectorAll(".tab-btn");
      const panels = document.querySelectorAll(".tab-panel");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          buttons.forEach(b => b.classList.remove("active"));
          panels.forEach(panel => panel.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById(btn.dataset.tab).classList.add("active");
        });
      });
    }

    // ★ 지도가 동작하려면 head에 선언된 Kakao SDK URL의 YOUR_KAKAO_API_KEY를 실제 앱 키로 교체하세요.
    let map, marker;
    function setDetailImageSource(src, altText="") {
      detailImage.onerror = () => {
        detailImage.onerror = null;
        detailImage.src = IMAGE_FALLBACK;
      };
      detailImage.src = src || IMAGE_FALLBACK;
      detailImage.alt = altText;
    }

    function openEventDetail(id) {
      const data = EVENTS.find(e => e.id === id);
      if (!data) return;
      currentEventId = id;
      setDetailActionsVisible(true);
      updateEventParam(id);
      updateModalFavoriteState();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      detailImage.style.display = "block";
      setDetailImageSource(data.image, data.name);
      detailCategory.textContent = data.category;
      detailTitle.textContent = data.name;
      detailMeta.innerHTML = `<strong>기간</strong> ${data.period} · <strong>장소</strong> ${data.venue}`;
      detailDesc.innerHTML = `
        <p>${data.description}</p>
        ${data.extra ? `<p style="margin-top:8px; color:#30445e;">${data.extra}</p>` : ""}
      `;
      detailTags.innerHTML = data.tags.map(tag=>`<li>#${tag}</li>`).join("");
      relatedTitle.textContent = "관련 행사";
      related.innerHTML = data.related.map(id=>{
        const rel = EVENTS.find(e=>e.id===id);
        return rel ? `
          <div class="card">
            <strong>${rel.name}</strong>
            <p class="meta">${rel.period}</p>
            <button class="btn primary" style="margin-top:10px;" data-type="event" data-id="${rel.id}">
              자세히 보기
            </button>
          </div>` : "";
      }).join("");

      // 카카오맵 API 확인
      if (typeof kakao === 'undefined' || !kakao.maps) {
        const mapHelper = document.getElementById("mapHelper");
        if (mapHelper) {
          mapHelper.innerHTML = `
            <strong style="color:#d32f2f;">⚠️ 카카오맵을 불러올 수 없습니다.</strong><br>
            <small style="color:#666;">
              1. 카카오 개발자 콘솔(https://developers.kakao.com)에서 <strong>JavaScript 키</strong>를 확인하세요.<br>
              2. <strong>플랫폼 설정</strong>에서 GitHub Pages 도메인을 등록하세요: <code>https://사용자명.github.io</code> (프로토콜 포함)<br>
              3. 상단 스크립트 URL의 <code>YOUR_KAKAO_API_KEY</code>를 실제 JavaScript 키로 교체하세요.<br>
              4. 변경사항이 반영되려면 몇 분이 걸릴 수 있습니다.
            </small>
          `;
          mapHelper.style.padding = "12px";
          mapHelper.style.backgroundColor = "#fff3cd";
          mapHelper.style.borderRadius = "8px";
          mapHelper.style.border = "1px solid #ffc107";
        }
        if (mapEl) {
          mapEl.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#999;">지도를 불러올 수 없습니다. 위 안내를 확인하세요.</div>';
        }
        if (mapSectionEl) {
          mapSectionEl.style.display = "block";
        }
        return;
      }

      try {
        const center = new kakao.maps.LatLng(data.lat, data.lng);
        if (mapEl) {
          map = map || new kakao.maps.Map(mapEl, { center, level:4 });
          map.setCenter(center);
          if (!marker) marker = new kakao.maps.Marker({ map, position:center });
          marker.setPosition(center);
        }
        if (mapSectionEl) {
          mapSectionEl.style.display = "block";
        }
      } catch (error) {
        console.error("카카오맵 초기화 오류:", error);
        const mapHelper = document.getElementById("mapHelper");
        if (mapHelper) {
          mapHelper.innerHTML = `
            <strong style="color:#d32f2f;">⚠️ 지도 로딩 중 오류가 발생했습니다.</strong><br>
            <small style="color:#666;">브라우저 콘솔(F12)에서 오류 메시지를 확인하세요. 플랫폼 도메인이 올바르게 등록되었는지 확인해주세요.</small>
          `;
          mapHelper.style.padding = "12px";
          mapHelper.style.backgroundColor = "#ffebee";
          mapHelper.style.borderRadius = "8px";
          mapHelper.style.border = "1px solid #f44336";
        }
        if (mapEl) {
          mapEl.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#999;">지도 로딩 오류</div>';
        }
      }
    }

    function openImageViewer(src, altText="") {
      if (!imageViewer || !viewerImage) return;
      viewerImage.onerror = () => {
        viewerImage.onerror = null;
        viewerImage.src = IMAGE_FALLBACK;
      };
      viewerImage.src = src || IMAGE_FALLBACK;
      viewerImage.alt = altText || "이미지 확대 보기";
      imageViewer.classList.add("open");
      imageViewer.setAttribute("aria-hidden", "false");
    }

    function closeImageViewer() {
      if (!imageViewer || !viewerImage) return;
      imageViewer.classList.remove("open");
      imageViewer.setAttribute("aria-hidden", "true");
      viewerImage.src = "";
    }

    function openCultureDetail(id) {
      const data = CULTURE_SPOTS.find(c => c.id === id);
      if (!data) return;
      currentEventId = null;
      updateEventParam(null);
      setDetailActionsVisible(false);
      updateModalFavoriteState();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      // 지역 문화 카드는 상단 이미지를 사용하지 않음
      detailImage.style.display = "none";
      detailCategory.textContent = "부산 지역 문화";
      detailTitle.textContent = data.title;
      detailMeta.innerHTML = `<strong>형성 시기</strong> ${data.period} · <strong>위치</strong> ${data.location}`;
      detailDesc.textContent = data.summary;
      const tagList = (data.keywords || "")
        .split("·")
        .map(t => t.trim())
        .filter(Boolean)
        .map(tag => `<li>#${tag}</li>`)
        .join("");
      detailTags.innerHTML = tagList;
      relatedTitle.textContent = "주요 포인트";
      related.innerHTML = `
        <div class="card">
          <p class="meta">하이라이트</p>
          <p>${data.highlights.join(" · ")}</p>
        </div>
      `;
      if (mapSectionEl) {
        mapSectionEl.style.display = "none";
      }
    }

    function setDetailActionsVisible(isVisible) {
      if (!detailActions) return;
      detailActions.hidden = !isVisible;
    }

    function updateEventParam(id) {
      if (!window.history || !window.history.replaceState) return;
      const url = new URL(window.location.href);
      if (id) {
        url.searchParams.set("event", id);
      } else {
        url.searchParams.delete("event");
      }
      window.history.replaceState({}, "", url);
    }

    function getCurrentEvent() {
      if (!currentEventId) return null;
      return EVENTS.find(event => event.id === currentEventId) || null;
    }

    function handleCalendarAction(target) {
      const event = getCurrentEvent();
      if (!event) {
        showToast("행사를 먼저 선택해주세요.");
        return;
      }
      const dates = parsePeriodToDates(event.period);
      if (!dates) {
        showToast("행사 기간 형식을 인식할 수 없습니다.");
        return;
      }
      if (target === "google") {
        window.open(buildGoogleCalendarUrl(event, dates), "_blank", "noopener");
      } else {
        downloadIcs(event, dates);
        showToast("ICS 파일을 내려받았어요.");
      }
    }

    function parsePeriodToDates(period) {
      if (!period) return null;
      const parts = period.split(/[-~,]/).map(p => p.trim()).filter(Boolean);
      const start = parseDatePart(parts[0]);
      const end = parts[1] ? parseDatePart(parts[1], start && start.getFullYear()) : start;
      if (!start || !end) return null;
      return { start, end };
    }

    function parseDatePart(part, fallbackYear) {
      if (!part) return null;
      const digits = part.replace(/[^\d.]/g, "").split(".").filter(Boolean);
      if (digits.length < 2) return null;
      let year, month, day;
      if (digits.length === 3) {
        [year, month, day] = digits;
      } else {
        [month, day] = digits;
        year = fallbackYear ? String(fallbackYear) : null;
      }
      if (!year) return null;
      const m = Number(month || 1);
      const d = Number(day || 1);
      if (!m || !d) return null;
      return new Date(Number(year), m - 1, d);
    }

    function addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    function formatDateValue(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}${month}${day}`;
    }

    function buildGoogleCalendarUrl(event, dates) {
      const start = formatDateValue(dates.start);
      const end = formatDateValue(addDays(dates.end, 1));
      const details = `${event.summary || ""}\n${event.description || ""}\n${event.extra || ""}`.trim();
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(event.venue)}`;
    }

    function buildIcsContent(event, dates) {
      const start = formatDateValue(dates.start);
      const end = formatDateValue(addDays(dates.end, 1));
      const description = `${event.summary || ""}\\n${event.description || ""}\\n${event.extra || ""}`.trim();
      return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Busan Culture Calendar//KR",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `UID:${event.id}@busan-culture`,
        `DTSTAMP:${start}T090000Z`,
        `DTSTART;VALUE=DATE:${start}`,
        `DTEND;VALUE=DATE:${end}`,
        `SUMMARY:${event.name}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${event.venue}`,
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\n");
    }

    function downloadIcs(event, dates) {
      const blob = new Blob([buildIcsContent(event, dates)], { type:"text/calendar" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${event.id || "busan-event"}.ics`;
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function getEventStartDate(event) {
      if (!event) return null;
      const dates = parsePeriodToDates(event.period);
      return dates ? dates.start : null;
    }

    function formatWeeklyDateLabel(date) {
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const weekday = WEEKDAY_LABELS[date.getDay()];
      return `${month}.${day} (${weekday})`;
    }

    function renderWeeklySummary(rangeDays = 7) {
      if (!weeklySummaryEl) return;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const endDate = addDays(today, Math.max(rangeDays - 1, 0));
      const eventsWithinRange = EVENTS
        .map(event => ({ event, start: getEventStartDate(event) }))
        .filter(item => item.start && item.start >= today && item.start <= endDate)
        .sort((a, b) => a.start - b.start);
      const grouped = eventsWithinRange.reduce((acc, item) => {
        const key = item.start.getTime();
        if (!acc[key]) acc[key] = [];
        acc[key].push(item.event);
        return acc;
      }, {});
      const sections = Object.entries(grouped)
        .map(([timestamp, events]) => ({
          date: new Date(Number(timestamp)),
          events
        }))
        .sort((a, b) => a.date - b.date);
      const daysMarkup = sections.map(({ date, events }) => `
        <article class="weekly-day">
          <header>
            <span class="weekly-date">${formatWeeklyDateLabel(date)}</span>
            <span class="weekly-count">${events.length}건</span>
          </header>
          <div class="weekly-events">
            ${events.map(event => `
              <button type="button" class="weekly-event-chip" data-type="event" data-id="${event.id}">
                <span class="weekly-event-name">${event.name}</span>
                <span class="weekly-event-meta">${event.venue}</span>
              </button>
            `).join("")}
          </div>
        </article>
      `).join("");
      const totalCount = eventsWithinRange.length;
      weeklySummaryEl.innerHTML = `
        <div class="weekly-meta">
          <div>
            <p class="weekly-label">이번 주 하이라이트</p>
            <strong>${formatWeeklyDateLabel(today)} - ${formatWeeklyDateLabel(endDate)}</strong>
          </div>
          <span class="weekly-total">${totalCount ? `${totalCount}건 일정 예정` : "새 일정 대기중"}</span>
        </div>
        ${totalCount ? `<div class="weekly-list">${daysMarkup}</div>` : `<p class="weekly-empty">다가오는 7일 안에 등록된 행사가 없습니다.</p>`}
      `;
    }

    function renderCalendarView() {
      if (!calendarGridEl || !calendarLabelEl) return;
      const year = calendarCurrentDate.getFullYear();
      const month = calendarCurrentDate.getMonth();
      calendarLabelEl.textContent = `${year}.${String(month + 1).padStart(2, "0")}`;
      const firstDay = new Date(year, month, 1);
      const startWeekday = firstDay.getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const totalCells = Math.ceil((startWeekday + daysInMonth) / 7) * 7;
      const eventsByDay = EVENTS.reduce((acc, event) => {
        const startDate = getEventStartDate(event);
        if (!startDate) return acc;
        if (startDate.getFullYear() !== year || startDate.getMonth() !== month) return acc;
        const day = startDate.getDate();
        (acc[day] = acc[day] || []).push(event);
        return acc;
      }, {});
      let cells = "";
      for (let index = 0; index < totalCells; index++) {
        const dayNumber = index - startWeekday + 1;
        const inMonth = dayNumber > 0 && dayNumber <= daysInMonth;
        const eventsForDay = inMonth && eventsByDay[dayNumber] ? eventsByDay[dayNumber] : [];
        const ariaLabel = inMonth ? `${year}년 ${month + 1}월 ${dayNumber}일` : "이전/다음 달";
        let content = "&nbsp;";
        if (inMonth && eventsForDay.length) {
          content = eventsForDay.map(event => `
            <button type="button" class="calendar-event-chip" data-type="event" data-id="${event.id}">
              ${event.name}
            </button>
          `).join("");
        }
        cells += `
          <div class="calendar-cell ${inMonth ? "" : "is-muted"}" role="gridcell" aria-label="${ariaLabel}">
            <div class="calendar-date">${inMonth ? dayNumber : ""}</div>
            <div class="calendar-events">
              ${content}
            </div>
          </div>
        `;
      }
      calendarGridEl.innerHTML = cells;
    }

    function changeCalendarMonth(offset) {
      if (!Number.isFinite(offset)) return;
      calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + offset);
      calendarCurrentDate.setDate(1);
      renderCalendarView();
    }

    function handleShare(target) {
      const event = getCurrentEvent();
      if (!event) {
        showToast("행사를 먼저 선택해주세요.");
        return;
      }
      if (target === "kakao") {
        shareViaKakao(event);
        return;
      }
      if (target === "copy") {
        copyOfficialLink(event.id);
        return;
      }
      showToast("지원하지 않는 공유 방식입니다.");
    }

    function copyToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    let toastTimer;
    function showToast(message) {
      if (!toastEl) return;
      toastEl.textContent = message;
      toastEl.classList.add("visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toastEl.classList.remove("visible");
      }, 2200);
    }

    function handleInitialEventFromQuery() {
      const params = new URLSearchParams(window.location.search);
      const targetId = params.get("event");
      if (targetId && EVENTS.some(ev => ev.id === targetId)) {
        openEventDetail(targetId);
      }
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      currentEventId = null;
      setDetailActionsVisible(false);
      updateModalFavoriteState();
      updateEventParam(null);
    }

    const modal = document.getElementById("detailModal");
    const detailImage = document.getElementById("detailImage");
    const detailCategory = document.getElementById("detailCategory");
    const detailTitle = document.getElementById("detailTitle");
    const detailMeta = document.getElementById("detailMeta");
    const detailDesc = document.getElementById("detailDesc");
    const detailTags = document.getElementById("detailTags");
    const related = document.getElementById("related");
    const relatedTitle = document.getElementById("relatedTitle");
    const mapEl = document.getElementById("map");
    const mapSectionEl = document.getElementById("mapSection");
    const imageViewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");
    const detailActions = document.getElementById("detailActions");
    const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
    const calendarButtons = document.querySelectorAll("[data-calendar-target]");
    const shareButtons = document.querySelectorAll("[data-share-target]");
    const toastEl = document.getElementById("toast");
    const nearbySortBtn = document.getElementById("nearbySortBtn");
    const locationStatusEl = document.getElementById("locationStatus");
    const weeklySummaryEl = document.getElementById("weeklySummary");

    document.body.addEventListener("click", e => {
      const detailBtn = getClosest(e.target, "button[data-id][data-type]");
      if (!detailBtn) return;
      const id = detailBtn.dataset.id;
      const type = detailBtn.dataset.type || "event";
      if (!id) return;
      if (type === "culture") {
        openCultureDetail(id);
      } else {
        openEventDetail(id);
      }
    });

    document.body.addEventListener("click", e => {
      const favoriteBtn = getClosest(e.target, "[data-fav-toggle]");
      if (!favoriteBtn) return;
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(favoriteBtn.dataset.favToggle);
    });

    document.body.addEventListener("click", e => {
      const viewerTrigger = getClosest(e.target, "[data-view-image]");
      if (!viewerTrigger) return;
      openImageViewer(viewerTrigger.dataset.viewImage, viewerTrigger.dataset.viewAlt);
    });

    modal.addEventListener("click", e => {
      if (e.target === modal || e.target.matches(".close-btn")) {
        closeModal();
        return;
      }
      if (e.target === detailImage) {
        openImageViewer(detailImage.src, detailImage.alt);
      }
    });

    imageViewer.addEventListener("click", e => {
      if (e.target === imageViewer || e.target.matches(".close-btn")) {
        closeImageViewer();
      }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (imageViewer.classList.contains("open")) {
          closeImageViewer();
        } else if (modal.classList.contains("open")) {
          closeModal();
        }
      }
    });

    if (favoriteOnlyBtn) {
      favoriteOnlyBtn.addEventListener("click", () => {
        favoriteOnly = !favoriteOnly;
        updateFavoriteToggleState();
        renderList();
      });
    }

    if (eventSearchInput) {
      eventSearchInput.addEventListener("input", e => {
        const value = (e.target.value || "").toLowerCase();
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          currentSearchTerm = value.trim();
          renderList();
        }, 180);
      });
    }

    if (modalFavoriteBtn) {
      modalFavoriteBtn.addEventListener("click", () => {
        if (!currentEventId) return;
        toggleFavorite(currentEventId);
      });
    }

    calendarButtons.forEach(btn => {
      btn.addEventListener("click", () => handleCalendarAction(btn.dataset.calendarTarget));
    });

    shareButtons.forEach(btn => {
      btn.addEventListener("click", () => handleShare(btn.dataset.shareTarget));
    });

    if (calendarNavButtons.length) {
      calendarNavButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const offset = Number(btn.dataset.calendarNav);
          if (Number.isNaN(offset)) return;
          changeCalendarMonth(offset);
        });
      });
    }

    if (nearbySortBtn) {
      nearbySortBtn.addEventListener("click", () => {
        if (locatingUser) return;
        if (sortMode === "distance" && userLocation) {
          clearLocationSorting();
        } else {
          requestUserLocation();
        }
      });
      updateLocationUI();
    }

    initViewMode();
    loadFavorites();
    updateFavoriteToggleState();
    renderCulture("cultureList");
    renderCultureGallery();
    renderHistoryTimeline();
    initTabs();
    initFilters();
    renderFeatured();
    renderList();
    renderFavoriteSection();
    renderWeeklySummary();
    renderCalendarView();
    handleInitialEventFromQuery();

    // 페이지 로드 시 카카오맵 API 상태 확인
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (typeof kakao !== 'undefined' && kakao.maps) {
          console.log('✅ 카카오맵 API 로드 성공! 지도 사용 가능합니다.');
        } else {
          console.error('❌ 카카오맵 API 로드 실패');
          console.log('확인 사항:');
          console.log('1. 카카오 개발자 콘솔에서 도메인 https://leejeonghun1216.github.io 등록 여부 확인');
          console.log('2. JavaScript 키가 올바르게 입력되었는지 확인');
          console.log('3. 설정 변경 후 5-10분 대기 (반영 시간 필요)');
          console.log('4. 브라우저 캐시 삭제 후 재시도');
        }
      }, 500);
    });
