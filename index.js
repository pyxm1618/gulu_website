document.addEventListener('DOMContentLoaded', function() {
  // 修改目标时间为2025年1月28日15:00
  const targetDate = new Date('2025-01-28T15:00:00+08:00');
  
  // 获取显示元素
  const daysElement = document.querySelector('.text_2');
  const hoursElement = document.querySelector('.text_4');
  const minutesElement = document.querySelector('.text_6');
  const secondsElement = document.querySelector('.text_8');
  
  function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    
    // 如果目标时间已过，显示00:00:00:00
    if (difference < 0) {
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      return;
    }
    
    // 计算剩余时间
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // 更新显示，保证两位数格式
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }
  
  // 立即执行一次
  updateCountdown();
  
  // 每秒更新一次
  setInterval(updateCountdown, 1000);
});

// 添加一个控制台日志来确认脚本正在运行
console.log('Countdown script loaded'); 