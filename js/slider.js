
var Slider = function(id, _big, _wide, _web, _tab, _mobile, spacing, time){
    var containerWidth = 0;
    var sliderItemWidth = 0;
    var totalCount = 0;
    var spacing = spacing || 10;
    var display = _web;
    var left = 0;
    var interval;
    var container = document.querySelector('#'+id);
    var items = document.querySelector('#'+ id + ' .slider').children;
    let slider = document.querySelector('.slider');
    totalCount = items.length;
  

    var items = document.querySelector('#'+ id + ' .slider').children;
    for(var i=0; i<items.length; i++){
      items[i].style.float = 'left';
      items[i].style.width = (sliderItemWidth-spacing)+ 'px';
      items[i].style['margin-right'] = spacing+'px'; // 간격

    }
  

    // 화면 사이즈 수정시 발생하는 이벤트
    function resize(){
      left = 0;
      document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
  
      var innerWidth = window.innerWidth;
      if(innerWidth <= 1920 && innerWidth >= 1520){
        setDisplayCount(_web);
      }else if(innerWidth <= 2400 && innerWidth > 1920) {
        setDisplayCount(_wide);
      }else if(innerWidth > 2400) {
        setDisplayCount(_big);
      }else if(innerWidth < 1520 && innerWidth >= 768) {
        setDisplayCount(_tab);
      }else if (innerWidth < 768) {
        setDisplayCount(_mobile);
      }
      
      if(display === 1){
        spacing = 0;
        sliderItemWidth = container.offsetWidth;
        var items = document.querySelector('#'+ id + ' .slider').children;
        for(var i=0; i<items.length; i++){
          items[i].style.width = container.offsetWidth + 'px';
          items[i].style['margin-right'] = 0 + 'px'; // 간격
        }
      }
    }
  
    // 디스플레이 갯수 설정 함수
    function setDisplayCount(count) {
      display = count;
  
      containerWidth = container.offsetWidth + spacing;
      sliderItemWidth = containerWidth / display;
  
      document.querySelector('#'+ id + ' .slider').style.width = totalCount * sliderItemWidth + spacing * totalCount + 'px';
      var items = document.querySelector('#'+ id + ' .slider').children;
      for(var i=0; i<items.length; i++){
        items[i].style.width = (sliderItemWidth-spacing)+ 'px';
      }
    }
  
    // 반응형 디스플레이 갯수 조절
    var isResponsive = _wide != undefined &&_tab != undefined && _mobile != undefined;
    if(isResponsive){
      window.onresize = resize;
    }
    resize();
  
    return {
      setDisplayCount: setDisplayCount,
      move: function(index){
        left = (-1) * sliderItemWidth * index;
        document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
      },
      prev: function(){
        left += sliderItemWidth;
        var limit = 0;
        if(left > limit){
          left = limit;
        }
        document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
      },
      next: function(){
        left -= sliderItemWidth;
        var limit = (-1) * sliderItemWidth * (totalCount - display);
        if(left < limit){
          left = limit;
        }
        document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
      },
      auto: function(){
        clearInterval(interval);
        interval = setInterval(function(){
          left -= sliderItemWidth;
          var limit = (-1) * sliderItemWidth * (totalCount - display);
          if(left < limit){
            left = 0;
          }
          document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
        }, time)
      },
      stop: function(){
        clearInterval(interval);
      }
    };
  };

  let slider = document.querySelectorAll('.slider');

  //복원사업 슬라이드 
  var restore = new Slider("restore-view", 5, 4, 3, 2, 1, 100, 5000);
  restore.auto();
  slider[0].addEventListener("mouseover",restore.stop);
  slider[0].addEventListener("mouseout",restore.auto);

  //경복궁행사 슬라이드 
  var poster = new Slider("poster-view", 4, 4, 3, 2, 1, 100,  4000);
  var eventList = document.querySelector('#poster-view' + ' .slider').children;
  var eventGuide = document.querySelector('#event-hover').children;
  
  poster.auto();
  slider[1].addEventListener("mouseout",poster.auto);
  
    for(let i=0; i < eventList.length; i++){
      eventList[i].addEventListener('mouseover',hideGuide);
      eventList[i].addEventListener('mouseover',viewGuide);

      function hideGuide(e) {
        for(let i=0; i < eventList.length; i++){
        poster.stop();
        eventGuide[i].style.display = 'none';
        eventList[i].classList.remove('view');
        };
      };    

      function viewGuide(e) {
        poster.stop();
        eventGuide[i].style.display = 'flex';
        eventList[i].classList.add('view');
      };
    };

  //갤러리 슬라이드 
  let galleryBtn = document.querySelector('.season').children;
  let galleryView = document.querySelector("#gallery-view").children;
  var sSlider = document.querySelectorAll('#gallery-view .slider')
  
  for (let j = 0; j < galleryBtn.length; j++) {
    galleryBtn[j].addEventListener("click", seasonalHide);
    galleryBtn[j].addEventListener("click", seasonalView);
  
    function seasonalHide (e) {
      for(let k = 0; k < galleryView.length; k++){
        galleryView[k].classList.remove('slider');
        galleryView[k].style.display = 'none';
        galleryBtn[k].classList.remove('view');
      };
    };
  
    function seasonalView (e) {
      galleryView[j].classList.add('slider');
      galleryView[j].style.display = 'flex';
      galleryBtn[j].classList.add('view');
      gallery.auto();
    };
  };

  var gallery = new Slider("gallery-view", 1, 1, 1, 1, 1, 0,  3000);
  gallery.auto();
  
  slider[2].addEventListener("mouseover",gallery.stop);
  slider[2].addEventListener("mouseout",gallery.auto);
