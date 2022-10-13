/*퀵메뉴 이미지*/
//for()문 이용해서 <img>를 quick01_0000. png~quick01_00019.png 생성
//<span>안에 넣기
/*let quick1 = '';
  for (let i=0; i<20; i++){
   if(i<10){
    quick1 += `<img src=images/quick01/quick01_0000${i}.png />`;
   } else {
    quick1 += `<img src=images/quick01/quick01_000${i}.png />`
   }
}
document.querySelector("span.quick1").innerHTML = quick ;*/

const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');
let images= ''
for(let j=0; j<quickSpan.length; j++) {  //span 4개 0,1,2,3 중첩문 이용
  for (let i=0; i<20; i++){ //img 20개 생성
    if(i<10){
      images += `<img src=images/quick0${j+1}/quick0${j+1}_0000${i}.png />`;
    } else {
      images += `<img src=images/quick0${j+1}/quick0${j+1}_000${i}.png />`
    }
  }
  quickSpan[j].innerHTML = images;
}
/*로그인 이미지*/
let appear = "";
for (let i=0; i<57; i++) {
  if(i<10) {
    appear += `<img src=images/appear/appear_0000${i}.png />`;
  } else {
    appear += `<img src=images/appear/appear_000${i}.png />`;
  }
}
document.querySelector("a.appear").innerHTML = appear;

let loop = "";
for (let k=0; k<82; k++) {
  if(k<10) {
    loop += `<img src=images/loop/loop_0000${k}.png />`;
  } else {
    loop += `<img src=images/loop/loop_000${k}.png />`;
  }
}
document.querySelector("a.loop").innerHTML = loop;


/*로그인 애니메이션*/
//appear 
//animation: ani 2.75s linear 0s 1 ; 
//animation: ani 2.75s linear 0.5s 1 ;
//animation: ani 2.75s linear 1s 1 ;

//loop
//animasion: ani 4.1s linear 2.85s infinite;
//animasion: ani 4.1s linear 2.905s infinite;
//animasion: ani 4.1s linear 2.95s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for (let i=0; i<appearImgs.length; i++) {
  appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
for (let j=0; j<loopImgs.length; j++) {
  loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}





/*고객센터*/
//toggle()
//title="고객센터열기" -> title="고객센터 닫기"
const topMenuDD = document.querySelectorAll('dl.topMenu > dd');
topMenuDD[4].addEventListener('click', e => {
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contanins("on")) {
    e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
  } else {
    e.currentTarget.children[0].setAttribute("title","고객센터 열기");
  }
});

/*주메뉴*/
//.header_wrap.on
//nav.gnb>ul>li>ul.on
const headerWrap = document.querySelector (".header_wrap");
const navMenu = document.querySelectorAll('nav>ul>li'); //큰li
var subMenu = document.querySelectorAll('nav>ul>li>ul');

for(var i=0; i<navMenu.length; i++) {
  navMenu[i].addEventListener('mouseover', () => {
  //고객센터에 on붙어 있으면 고객센터의 on 지운다.
 
  if(topMenuDD[4].classList.contains('on')){
    topMenuDD[4].classList.remove('on');
  }
   //검색박스에 on붙어 있으면 검색박스의 on 지운다.
   if(srchOpen.classList.contains('on')){
    srchOpen.classList.remove('on');
    srchBox.classList.remove('on');
   }

   headerWrap.classList.add("on");
   subMenu.forEach(item => {
    item.classList.add("on");
   })


  });  //mouseover
  navMenu[i].addEventListener('mouseout', () =>{
    headerWrap.classList.remove("on");
    subMenu.forEach(item => {
      item.classList.remove("on");
     })
  }); //mouseout

  navMenu[i].children[0].addEventListener('focus', () => {
    headerWrap.classList.add('on');
    subMenu.forEach(item => {
     item.classList.add("on");
    });
   });  //mouseover
   navMenu[i].children[0].addEventListener('blur', () =>{
     headerWrap.classList.remove("on");
     subMenu.forEach(item => {
       item.classList.remove("on");
      })
   }); //mouseout
};

/*검색열기닫기*/
const srchBox = document.querySelector("form.srch");
const srchOpen = document.querySelector(".srch_open");

srchOpen.addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  srchBox.classList.toggle('on');

  if(srchOpen.classList.contains('on')) {
    e.currentTarget.children[0].setAttribute('title','검색입서식 닫기')
  } else {
    e.currentTarget.children[0].setAttribute('title','검색입서식 열기')
  }
});


//배너
//next 버튼을 눌렀을 때 
//배너번호 1증가 1left -2left
//배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
//배너프레임의 left 값 변경해서 배너 움직이게 

//prev버튼 눌렀을 때

const btnNext = document.querySelector('a.btn_next');
const btnprev = document.querySelector('a.btn_prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll(".banner_frame>section"); //0~11번 섹션

const arrowA = document.querySelectorAll('.banner_arrow > a');
const rollingA = document.querySelectorAll('.banner_rolling a')

const bnn_rollA = document.querySelectorAll('.banner_rolling li a'); //a가 12개



let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize', () => {
  bnnW = document.querySelector('body>section').offsetWidth;
})

let bnnNum = 0;
let lastNum = bnnSection.length -1;


let secWhite = bannerNumer => {  //함수를 만들어 중복되는 거 묶어주기
 

  if(bnnSection[bannerNumer].classList.contains('white')) {
    arrowA.forEach(item => {
     item.classList.add('white');
    })
    rollingA.forEach(item => {
     item.classList.add('white');
    }) 
 
   }else {
     arrowA.forEach(item => {
       item.classList.remove('white');
      })
      rollingA.forEach(item => {
       item.classList.remove('white');
      })
  }
  bnn_rollA.forEach(item => { //롤링배너번호
    item.classList.remove('on');
    });
    bnn_rollA[bannerNumer].classList.add('on');
  
     
}
secWhite(0);

btnNext.addEventListener('click', e => {
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  //bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,200%...-1100%
  bnnFrame.style.left = `${-bnnNum * bnnW}px`; 
  secWhite(bnnNum);
});

btnprev.addEventListener('click', e => {
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum =lastNum;
  bnnFrame.style.left = `${-bnnNum * bnnW}px`; //prev를 눌러도 left 값은 -로 이동됨.
  secWhite(bnnNum);
});

//오토배너
let autoBanner = () => {
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  //bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,200%...-1100%
  bnnFrame.style.left = `${-bnnNum * bnnW}px`; 
  secWhite(bnnNum);

  autoBnn = setTimeout(autoBanner,5000);
};
let autoBnn = setTimeout(autoBanner, 5000);


//재생/멈춤 버튼
let flag = true;
btnPlay = document.querySelector('a.btn_play');
btnPlay,addEventListener('click', e => {
  e.preventDefault();
  if(flag) {
    clearTimeout(autoBnn);
    btnPlay.classList.add('pause');
    flag = false;
  } else {
    autoBnn =setTimeout(autoBanner,5000);
    btnPlay.classList.remove('pause');
    flag = true;
  }
})

/*롤링 클릭*/
const bnnRollLists = document.querySelectorAll('.banner_rolling li');

for(let i=0; i<bnnRollLists.length; i++) {
  bnnRollLists[i].addEventListener('click', e => {
    clearTimeout(autoBnn);
    bnnFrame.style.left = `${-i * bnnW}px`;
    secWhite(i);
  })
}

//content1
//마우스 올렸을 때 이미지에 애니메이션 적용
//마우스 뗏을 때 이미지에 애니메이션 삭제
const content1Li =document.querySelectorAll(".content ul li");
for(let i=0; i<content1Li.length; i++){
  content1Li[i].addEventListener('mouseover', (e) => {
    for(let k=0; k < 20; k++) {
     let imgLi = e.currentTarget.children[0].children[0].children;  //자식의자식의자식
     imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`; //1번만 실행
    }
  });
}
/*//forEach문사용가능
content1Li.forEach(item=>{ 
  item[i].addEventListener('mouseover', (e) => {
    for(let k=0; k < 20; k++) {
     let imgLi = e.currentTarget.children[0].children[0].children;
     imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`; //1번만 실행
    }
  });
}*/

 
for(let i=0; i<content1Li.length; i++){
content1Li[i].addEventListener('mouseout', (e) => {
  for(let k=0; k < 20; k++) {
   let imgLi = e.currentTarget.children[0].children[0].children;
   imgLi[k].style.animation = "none" //1번만 실행
   }
 });
}

/*스크롤 이벤트*/
const btnTop =document.querySelector('.top');
btnTop.addEventListener('click', e => {
  e.preventDefault();
  window.scroll ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  //도넛
  const doughnut_Left_L = document.querySelector(".doughnut_Left_");
  const doughnut_Left_s = document.querySelector(".doughnut_Left_s ");
  const combine_Left = document.querySelector(".combine_Left");
  
  const doughnut_Center_M = document.querySelector(".doughnut_Center_M");
  const combine_right  = document.querySelector(".combine_right");

  combine_Left.style.top = `${scroll*0.7}px`;
  doughnut_Left_s.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;
 
  doughnut_Center_M.style.top = `${500-scroll*0.6}px`;
  combine_right.style.top = `${1421-scroll*0.8}px`;
  
  //top 버튼
  if(scroll <= 0) {
    btnTop.classList.remove("on","ab");
    
  } else if (scroll > 0 && scroll < 2700) {
    btnTop.classList.remove("ab");
    btnTop.classList.add("on");
  } else {
    btnTop.classList.add("ab");
  }
});


//content3
//li 하나하나에 마우스오버하면 모든 li에 .on을 지우고 마우스 오버한 li만  .on이 붙어라
const content3Li = document.querySelectorAll(".content3_inner>div>ul>li");

var all = document.querySelectorAll('.content3_inner>div>ul>li');
  all.forEach(item => {
    item.addEventListener('mouseover', e => {
      e.currentTarget.classList.add('on');
    });
    item.addEventListener('mouseout', e => {
      e.currentTarget.classList.remove('on');
    });
    
  });

  //li a 하나하나를 클릭했을 때 
  //class 속성값을 가져와서 변수에 저장
  //변수값이랑 정확하게 일치하는 케이스 찾아서
  //해당 클래스 이름에 해당되는 li만 보이게 설정한다. -각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고.
  const group = document.querySelectorAll('.content3_inner>ul>li>a'); //5개
  
  const ent= document.querySelectorAll('.content3_inner>div>ul>li.ent');
  const shop= document.querySelectorAll('.content3_inner>div>ul>li.shop');
  const diner= document.querySelectorAll('.content3_inner>div>ul>li.diner');
  const box= document.querySelectorAll('.content3_inner>div>ul>li.box');
  for(let k=0; k<group.length; k++) {
    group[k].addEventListener('click',e => {
      e.preventDefault(); //누를 때마다 튕기기 때문에 써줘야됨.

      group.forEach(item => {
        item.classList.remove('on');
      });
      e.currentTarget.classList.add('on');

      let className = e.currentTarget.parentElement.getAttribute("class");
       
      all.forEach(item => {
        item.style.display = "none";
      });

      switch(className) {
        case "all":
          all.forEach(item => {
            item.style.display = "block";
          });    
          break;
        case "ent":
          ent.forEach(item => {
            item.style.display = "block";
          }); 
          break;
        case "shop":
          shop.forEach(item => {
            item.style.display = "block";
          });  
          break;
        case "diner":
          diner.forEach(item => {
            item.style.display = "block";
          });  
          break;
        case "box":
          box.forEach(item => {
            item.style.display = "block";
          });   
          break;
        default:
          break;
      }
    });
  }

  
  //패밀리 사이트
  const familySite = document.querySelector("dd.family_site");
  familySite.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")) {
      e.currentTarget.children[0].setAttribute("title", "닫기");
    }else {
      e.currentTarget.children[0].setAttribute("title", "열기");
    }
   
  })

  //햄버거 버튼 클릭
  const body = document.querySelector('body');
  const bg = document.querySelector('.bg');


  const mobBtn = document.querySelector(".mobBtn");
  const mobBtn_Close = document.querySelector(".mobBtn_close");
  const mob = document.querySelector(".mob");

  mobBtn.addEventListener('click', e => {
    e.preventDefault();
    body.classList.add('on');
    bg.classList.add('on');
    mob.classList.add('on');
    mobBtn_Close.classList.add('on');
  });
  mobBtn_Close.addEventListener('click', e => {
    e.preventDefault();
    body.classList.remove('on');
    bg.classList.remove('on');
    mob.classList.remove('on');
    mobBtn_Close.classList.remove('on');
  });
  
