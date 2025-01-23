const coffee = {
  name: "아메리카노",
  price: 2500,
  ingredients: ["물", "커피콩", "얼음"],
};
// .(dot) 연산자
console.log(coffee.price);
console.log(coffee["price"]);

//커피콩 꺼내기
console.log(coffee.ingredients[1]);
console.log(coffee["ingredients"][1]);

const dplus = {
  top: {
    playerName: "siwoo",
    champion: "Sion",
    kda: {
      kill: 1,
      death: 3,
      assist: 10,
    },
  },

  middle: {
    playerName: "showmaker",
    champion: "ahri",
    kda: {
      kill: 9,
      death: 2,
      assist: 7,
    },
  },
};

//콘솔로 top + middle 총 킬을 나타내기
console.log(dplus.top.kda.kill + dplus.middle.kda.kill);

const lanch = {
  name: "햄버거",
  franchise: "버거킹",
};

// 오브젝트 데이터 추가
lanch.kcal = 900;

//사이드메뉴, 음료 추가
lanch.side = "감튀";
lanch.drink = 콜라;

//오브젝트 삭제
delete lanch.name;

const drama = {
  title: "오징어 게임2",
  grade: 18,
  grenres: ["액션", "블랙 코미디", "군상극", "데스 게임"],
};
const a = drama.title;
const { title } = drama;
const [action, black] = drama.genres;

const menu = ["아메리카노", "라떼", "민트"];
const a1 = menu[0];
const [a2] = menu;

const player = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};

const coffee1 = {
  coffeeName: "아메리카노",
  price: 2500,
};

//key, value 이름이 같으면 생략 가능
const data = { plata, coffee1, coffee2 };
console.log(data);

const cosmetic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세린",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄 오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};

//카밀 변수
const { company } = consmetic;

//첫번째 성분만 빼기
const { first } = consmetic.ingredients;

const test1 = { ...consmetic.ingredients.first };

// laptop이 lap[허벅지위 단어]
const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};

const { cpu, ram, storage } = laptop.specs;
console.log(cpu);
console.log(ram);
console.log(storage);
