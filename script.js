document.addEventListener('DOMContentLoaded', function() {
  // Audio Player for Kids & Family Section
  const audioPlayerCards = document.querySelectorAll('.audio-player-card');
  audioPlayerCards.forEach(card => {
    card.addEventListener('click', function() {
      const audioSrc = this.getAttribute('data-audio');
      const audioPlayer = document.getElementById('audioPlayer');
      
      // Stop any currently playing audio
      audioPlayer.pause();
      
      // Set new audio source and play
      audioPlayer.src = audioSrc;
      audioPlayer.style.display = 'block';
      audioPlayer.play();
    });
  });

  // Audio Player for Popular Hits Section
  const popularHitsCards = document.querySelectorAll('.popular-hits-card');
  popularHitsCards.forEach(card => {
    card.addEventListener('click', function() {
      const audioSrc = this.getAttribute('data-audio');
      const audioPlayer = document.getElementById('audioPlayer');
      
      // Stop any currently playing audio
      audioPlayer.pause();
      
      // Set new audio source and play
      audioPlayer.src = audioSrc;
      audioPlayer.style.display = 'block';
      audioPlayer.play();
    });
  });

  // Play buttons in Audio Categories Section
  const playButtons = document.querySelectorAll('.play-btn');
  playButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling to parent elements
      
      const card = this.closest('.card');
      const audioPlayer = card.querySelector('.audio-player');
      
      // Toggle play/pause
      if (audioPlayer.paused) {
        audioPlayer.play();
        this.textContent = 'Pause';
      } else {
        audioPlayer.pause();
        this.textContent = 'Play';
      }
    });
  });

  // Audio players in Featured Tracks Section
  const audioPlayers = document.querySelectorAll('.audioplayer');
  audioPlayers.forEach(player => {
    const audioId = player.getAttribute('data-player');
    const audio = document.getElementById(audioId);
    const playButton = player.querySelector('.pButton');
    const timeline = player.querySelector('.timeline');
    const playhead = player.querySelector('.playhead');
    
    // Play/Pause button
    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        this.classList.remove('fa-play');
        this.classList.add('fa-pause');
      } else {
        audio.pause();
        this.classList.remove('fa-pause');
        this.classList.add('fa-play');
      }
    });
    
    // Timeline interaction
    timeline.addEventListener('click', function(e) {
      const timelineWidth = this.offsetWidth;
      const clickPosition = e.offsetX;
      const duration = audio.duration;
      
      audio.currentTime = (clickPosition / timelineWidth) * duration;
    });
    
    // Update playhead position as audio plays
    audio.addEventListener('timeupdate', function() {
      const playheadPosition = (audio.currentTime / audio.duration) * timeline.offsetWidth;
      playhead.style.width = playheadPosition + 'px';
    });
    
    // Reset when audio ends
    audio.addEventListener('ended', function() {
      playButton.classList.remove('fa-pause');
      playButton.classList.add('fa-play');
      playhead.style.width = '0';
    });
  });

  // Video play buttons
  const videoPlayButtons = document.querySelectorAll('.card button.btn-primary');
  videoPlayButtons.forEach(button => {
    if (button.textContent.trim() === 'Watch') {
      button.addEventListener('click', function() {
        const card = this.closest('.card');
        const videoSrc = card.querySelector('img').getAttribute('alt');
        alert(`Playing video: ${videoSrc}\n(In a real implementation, this would open a video player)`);
      });
    }
  });
});

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
   // Sales Chart
   const ctx = document.getElementById('salesChart').getContext('2d');
   new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
       datasets: [{
         label: 'Music Sales (in millions)',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: 'rgba(13, 110, 253, 0.5)',
         borderColor: 'rgba(13, 110, 253, 1)',
         borderWidth: 2
       }]
     },
     options: {
       responsive: true,
       plugins: {
         legend: {
           labels: {
             color: '#fff'
           }
         }
       },
       scales: {
         y: {
           beginAtZero: true,
           ticks: {
             color: '#fff'
           },
           grid: {
             color: 'rgba(255,255,255,0.1)'
           }
         },
         x: {
           ticks: {
             color: '#fff'
           },
           grid: {
             color: 'rgba(255,255,255,0.1)'
           }
         }
       }
     }
   });
 // Video Modal Controller
document.addEventListener('DOMContentLoaded', function() {
  var videoModal = document.getElementById('videoModal');
  
  // When modal opens
  videoModal.addEventListener('show.bs.modal', function(event) {
    let button = event.relatedTarget;
    let videoSrc = button.getAttribute('data-video-src');
    let videoTitle = button.getAttribute('data-video-title');

    // Set video source and title
    let videoPlayer = document.getElementById('modalVideo');
    videoPlayer.src = videoSrc;
    document.getElementById('videoModalLabel').textContent = videoTitle;
    
    // Auto-play when ready
    videoPlayer.onloadeddata = function() {
      videoPlayer.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    };
  });

  // When modal closes
  videoModal.addEventListener('hidden.bs.modal', function() {
    let videoPlayer = document.getElementById('modalVideo');
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
  });
});
  