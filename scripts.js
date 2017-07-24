class Calendar {
  constructor (element, locale, callback) {
    this.element = element
    this.locale = locale
    this.callback = callback
    this.data = [{name: 'Lecture about JS', date: '2017-07-26', object: 'Science', description: 'Adress: Lviv_Levuckogo(67).'},
      {name: 'Go to the cinema', date: '2017-08-03', object: 'Buy a tickets', description: 'Finally came the screen adaptation of book "Dark Tower"'},
      {name: 'Buy a book for Yura', date: '2017-08-03', object: '!!!', description: 'Something like "Oh wonderful new world", "Generation x"'},
      {name: 'B-Day party', date: '2017-07-28', object: 'Do not forget about the gifts.', description: 'Address: Lviv_Zelena(234). Dress code: Mafia style', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqDGhVyhuf8T-uXNB0dBEylE3C51StPOm6DqWQUnPa4f2BDsQ',
                                                                                  participants: [{name: 'Dianisia', url: 'https://www.facebook.com/profile.php?id=100005813477507&fref=hovercard&hc_location=chat', avatar: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/19894638_766396940230748_8873438110914490390_n.jpg?oh=6b83a6c296bd9aebd9691451b9002134&oe=59FB48A0'}, 
                                                                                                 {name: 'Bogdan', url: 'https://www.facebook.com/profile.php?id=100004548884884&fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/18447294_728172000677756_3146342074349917805_n.jpg?oh=3879d1f48ab082598e0aa9826963f8e5&oe=5A074896'},
                                                                                                 {name: 'Diana', url: 'https://www.facebook.com/diana.kryskuw?fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/18740483_1335791009822713_2418921572645266864_n.jpg?oh=d46cac60799f72a0f9745960720ce0f8&oe=5A0AE60D'} ,
                                                                                                 {name: 'Vova', url: 'https://www.facebook.com/vova.matsko.1?fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/19030591_1460692193969802_1536405959553204727_n.jpg?oh=ea9f2a81f0441636ba1e8fdc19b517e7&oe=59F4EFAA'},
                                                                                                 {name: 'Yura', url: 'https://www.facebook.com/yura.maluga?fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/20046650_753373668178249_1169706321296918652_n.jpg?oh=04a937180658c8b7e701466047c43810&oe=5A0082A0'},
                                                                                                 {name: 'Lyana', url: 'https://www.facebook.com/profile.php?id=100007573603426&fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/20245927_1890229781239457_8890442932644422956_n.jpg?oh=d3b995f9efd351d80fd1c49f1e2dc707&oe=5A04C476'}]},
      {name: 'Wedding day Ira+Roma', date: '2017-08-05', object:'Happy time', description: 'Look at my to-do list!!!', image: 'data:image/jpeg;base64,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'},
      {name: 'Party with the best people', date: '2017-08-13',object:"GOOO", description:'Adress: Malevich Night Club 22:00 in  center', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtm6_yDuU3fJ-ldUubRlvZeH7sLLS7eUg_apFjjoCK-uCFkj5M',
                                                                                  participants: [{name: 'Diana', url: 'https://www.facebook.com/diana.kryskuw?fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/18740483_1335791009822713_2418921572645266864_n.jpg?oh=d46cac60799f72a0f9745960720ce0f8&oe=5A0AE60D'},
                                                                                                  {name: 'Liana', url: 'https://www.facebook.com/profile.php?id=100007573603426&fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/20245927_1890229781239457_8890442932644422956_n.jpg?oh=d3b995f9efd351d80fd1c49f1e2dc707&oe=5A04C476'},
                                                                                                  {name: 'Olya', url:'https://www.facebook.com/solyar.olya?fref=pb&hc_location=friends_tab', avatar: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/18527606_1046753715424813_6134587385767559335_n.jpg?oh=fe2f5b5ddcdbb36b6305fc261c6388d4&oe=5A020271'}]},
      {name: 'Conference', date: '2017-09-10', object:'GOGOGOGO!', description:'Global problem in the world.'},
      {name: 'Lviv Outsourcing Forum', date:'2017-12-26', object:'GO!', description:"Abobt business"},
      {name: 'Days of Performance Art in Lviv', date: '2017-11-16', object:'To go', description: 'It must be very intresting!', participants: [{name: 'Maryana', url:'https://www.facebook.com/maryana.prus.5?fref=pb&hc_location=friends_tab', avatar:'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/20228391_1397140210364287_1412296658930269830_n.jpg?oh=a9d9a9f394f1613a5b558eab6ed963f8&oe=5A05E181'}]},
      {name: 'Lviv Candles Festival', date: '2017-12-27', object: 'To go', description: 'There will be mysticism and interesting storie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9GHZ17JEBEB9uHuigg9UXTZoW4YJMyIOosebLFIW5_WnMv4a'},
      {name: 'B-Day in my sweet girl', date: '2017-10-17', object: 'Gift!!!', description:'Buy something special, lok at note'},
      {name: 'B-Day party', date: '2017-10-17', object: 'To be in the mind', description: 'Do not forgen about morning meeting', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtw8_stlzNgyRRyT8HxGzFMn-8c2WXixel9utynl2z1uPPWPi'},
      {name: 'Meet with Ira', date:'2017-10-17', object: 'Work', description:'Ask about some tasks'},
      {name: 'Important meet with parent', date: '2017-11-18', object:'Talk about work', description:'In note'},
      {name: 'Forum for the Future 2050', date:'2017-09-10', object:'Science',description:'Something intresting', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk112Gs_49vU5qJDahfMlPY3b7Vu6bJcYMACaa8xMst4IrzLntOg'},
      {name: 'Book forum', date: '2017-09-28', object:'GO!', description:'Find a old books connect with art and music.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZlPXENLvmi4Pzh93mpoVcI3LRkyOLS9G_P3e-MwN4tUDaNtM'},
      {name: 'Batyar day in Lviv', date:'2017-11-26', object:'WAlK', description:'A lot events in center!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVWFXOwMi9d2s3A5e3Tgnu_7Jm4dIOQiU9IU3EZH1JwTCtcU1'},
      {name: 'Meet with friends', date:'2017-11-26', object: 'Happy time!', description:'Tell about important news'},
      {name: 'Buy a bear for a little princess', date:'2017-11-26', object: 'If you want to live, do not forget about it!!!', description: 'He must be white and big', image: 'http://thumbs3.ebaystatic.com/d/l225/m/mu7foTqvEQip9_jPExDxaWQ.jpg'} 
                ]  
    moment.locale(locale)                                                                         
    this.plansByDate = {}
    this.data.forEach(plan => {
      if (!this.plansByDate[plan.date]) {
        this.plansByDate[plan.date] = 1
      }else {
        this.plansByDate[plan.date]++
      }
    })
    this.show(moment().year())
  }

  getContent (year, m, d) {
    var content = ''
    var events = this.data.filter(plan => plan.date == dateToString(year, m, d)).map(e => e.name).join('  ')
    if (this.plansByDate[dateToString(year, m, d)]) {
      content = '<span class="ui teal circular label" data-content="' + events + '"' + getDate(year, m, d) + ' >' + this.plansByDate[dateToString(year, m, d)] + '</span>'
    }
    return '<div class="content">' + content + '</div>'
  }

  showModal (year, m, d) {
    var date = dateToString(year, m - 1, d);
    var events = this.data.filter(plan => plan.date == date)
    if (events.length == 1) {
      this.createModal(events[0])
    }else {
      this.createModals(events)
    }
    $('.ui.modal').modal('show')
  }

  createModals (events) {
    $('.ui.modal')[0].innerHTML =
      `<i class="close icon"></i>`

    events.forEach(e => {

      var i = e.image ?
       `<div class="ui medium image">
      <img src="${e.image}">
    </div>` : ''


      var p = ''
      if (e.participants)
      {
       for (var i = 0; i < e.participants.length; i++) 
        { 
          p+=
          ` <a class="ui image label" href=${e.participants[i].url}>
          <img src="${e.participants[i].avatar}">
          ${e.participants[i].name}
          </a>`
        }
      }   


      $('.ui.modal')[0].innerHTML +=
        `<div class="header">
      ${e.name}
    </div>
    <div class="content">
     <div class="ui header">${e.object}</div>
     <p>${e.description}</p>
     ${i}
     ${p}
    </div>
    `
    })
  }

  createModal (event) {
    var p='';
 if (event.participants)
 {
  for (var i = 0; i < event.participants.length; i++) 
 { 
  p+=
 ` <a class="ui image label" href=${event.participants[i].url}>
  <img src="${event.participants[i].avatar}">
  ${event.participants[i].name}
  </a>`
}
}

    var image = event.image ?
      `    <div class="ui medium image">
      <img src="${event.image}">
    </div>` : ''
    $('.ui.modal')[0].innerHTML =
      `<i class="close icon"></i>
  <div class="header">
    ${event.name}
  </div>
  ${image}
  <div class="image content">
    <div class="description">
      <div class="ui header">${event.object}</div>
      <p>${event.description}</p>
    </div>
    ${p}
  </div>
  </div>`

  }

  show (year) {
    var that = this
    this.year = year
    var m, d1, t = [], y = '', w = 0, r = 0, n = _.reduce(moment.weekdaysShort(), function (n, ddd) { return n += '<div class="ddd" data-ddd="' + ddd + '"></div>'; }, '')
    for (m = 0; m <= 11; m++) {
      d1 = moment([year, m, 1])
      t.push('<div class="MMMM">' + moment.months()[m] + '</div>' + n + '<div class="MM"><a href="#" class="' + (year == moment().year() && m == moment().month() && 1 == moment().date() ? 'active ' : '') + 'D" data-d="' + d1.day() + '" ' + getDate(year, m, 1) + ' draggable="false"><span ' + getDate(year, m, 1) + ' class="num">1</span>' + this.getContent(year, m, 1) + '</a>' + _.range(2, d1.daysInMonth() + 1).reduce(function (MM, d) { return MM += '<a href="#" class="' + (year == moment().year() && m == moment().month() && d == moment().date() ? 'active ' : '') + 'D"' + getDate(year, m, d) + '" draggable="false">' + '<span class="num" ' + getDate(year, m, d) + '>' + d + '</span >' + that.getContent(year, m, d) + '</a>'; }, '') + '</div>')
      w = Math.max(w, Math.ceil((d1.day() + d1.daysInMonth()) / 7))
      if (m == 3 || m == 7 || m == 11) {
        y += '<div class="M" data-w="' + w + '">' + t.join('</div><div class="M" data-w="' + w + '">') + '</div>'
        r += w
        w = 0
        t = []
      }
    }
    this.element.innerHTML = '<nav><a href="#" class="nav prev" draggable="false"><svg viewBox="0 0 512 512"><path d="M189.8,349.7c3.1-3.1,3-8,0-11.3L123.4,264H408c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4,3.2-8.1,0.1-11.2c-3.1-3.1-8.5-3.3-11.4-0.1c0,0-79.2,87-80,88S96,253.1,96,256s1.6,4.9,2.4,5.7s80,88,80,88c1.5,1.5,3.6,2.3,5.7,2.3C186.2,352,188.2,351.2,189.8,349.7z"/></svg></a><div class="title"><strong>' + year + '</strong></div><a href="#" class="nav next" draggable="false"><svg viewBox="0 0 512 512"><path d="M322.2,349.7c-3.1-3.1-3-8,0-11.3l66.4-74.4H104c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-0.1-11.2c3.1-3.1,8.5-3.3,11.4-0.1c0,0,79.2,87,80,88s2.4,2.8,2.4,5.7s-1.6,4.9-2.4,5.7s-80,88-80,88c-1.5,1.5-3.6,2.3-5.7,2.3C325.8,352,323.8,351.2,322.2,349.7z"/></svg></a></nav><div class="YYYY" data-w="' + r + '">' + y + '</div>'
    this.element.querySelector('.prev').addEventListener('click', () => {
      this.show(--this.year);})
    this.element.querySelector('.next').addEventListener('click', () => {
      this.show(++this.year);})
    // this.element.querySelectorAll('.D').forEach((element) => element.addEventListener('click', (event) => { this.callback(event.target.getAttribute('data-date')); }))
    $('.ui.circular.label').click(data => {
      var date = data.target.dataset.date.split("-");
      that.showModal(+date[0], +date[1], +date[2]);
    })
  }
}

function test (date) {
  alert(date)
}

function getDate (year, m, d) {
  return 'data-date="' + this.dateToString(year, m, d) + '"'
}

function dateToString (year, m, d) {
  return year + '-' + ('00' + (m + 1)).slice(-2) + '-' + ('00' + d).slice(-2)
}

new Calendar(document.getElementById('calendar'), 'en', test)

$('.ui.teal[data-content]').popup()
